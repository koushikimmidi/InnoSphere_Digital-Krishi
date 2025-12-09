
import React, { useState, useEffect } from 'react';
import { Language, OfflineNode, OfflineInteraction } from '../types';
import { offlineService } from '../services/offlineService';
import { ChevronRight, ArrowLeft, Home, WifiOff, Sprout, AlertTriangle, Leaf, ShieldAlert, CheckCircle, Save } from 'lucide-react';
import { TRANSLATIONS } from '../constants';

interface OfflineChatbotProps {
  language: Language;
}

const OfflineChatbot: React.FC<OfflineChatbotProps> = ({ language }) => {
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [currentNode, setCurrentNode] = useState<OfflineNode | null>(null);
  const [historySaved, setHistorySaved] = useState(false);

  useEffect(() => {
    if (currentPath.length === 0) {
      setCurrentNode(null); 
    } else {
      const lastId = currentPath[currentPath.length - 1];
      const node = offlineService.findNode(lastId);
      setCurrentNode(node || null);
    }
    setHistorySaved(false);
  }, [currentPath]);

  useEffect(() => {
    if (currentNode?.answer && !historySaved) {
      const interaction: OfflineInteraction = {
        id: Date.now().toString(),
        timestamp: Date.now(),
        path: currentPath,
        question: currentNode.label[language] || currentNode.label[Language.ENGLISH],
        synced: false
      };
      offlineService.saveInteraction(interaction);
      setHistorySaved(true);
    }
  }, [currentNode, historySaved, currentPath, language]);

  const handleSelect = (id: string) => {
    setCurrentPath(prev => [...prev, id]);
  };

  const handleBack = () => {
    setCurrentPath(prev => prev.slice(0, -1));
  };

  const handleHome = () => {
    setCurrentPath([]);
  };

  const t = TRANSLATIONS[language] as any;

  const visibleOptions = currentNode ? currentNode.children : offlineService.getRootNodes();

  const isAnswerView = !!currentNode?.answer;

  return (
    <div className="flex flex-col h-full bg-stone-50 dark:bg-stone-900">
      <div className="bg-stone-800 dark:bg-stone-950 text-white p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
            <WifiOff size={20} className="text-stone-400" />
            <div>
                <h3 className="font-bold text-sm">Offline Mode</h3>
                <p className="text-[10px] text-stone-400">Limited Database</p>
            </div>
        </div>
        <div className="flex gap-2">
            {currentPath.length > 0 && (
                <button onClick={handleHome} className="p-2 bg-stone-700 hover:bg-stone-600 rounded-full transition-colors">
                    <Home size={16} />
                </button>
            )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        {currentPath.length > 0 && !isAnswerView && (
             <div className="flex items-center gap-1 text-xs text-stone-400 dark:text-stone-500 mb-4 overflow-x-auto whitespace-nowrap pb-2">
                <span className="cursor-pointer hover:text-green-600 dark:hover:text-green-400" onClick={handleHome}>Home</span>
                {currentPath.map((id, idx) => {
                    const node = offlineService.findNode(id);
                    if (!node) return null;
                    return (
                        <React.Fragment key={id}>
                            <ChevronRight size={12} />
                            <span className={idx === currentPath.length - 1 ? "font-bold text-stone-600 dark:text-stone-300" : ""}>
                                {node.label[language] || node.label[Language.ENGLISH]}
                            </span>
                        </React.Fragment>
                    );
                })}
             </div>
        )}

        {isAnswerView && currentNode?.answer ? (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                 <button onClick={handleBack} className="mb-4 text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 flex items-center gap-1 text-sm font-bold">
                    <ArrowLeft size={16} /> Back
                 </button>

                 <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-lg border border-stone-200 dark:border-stone-700 overflow-hidden">
                     <div className="bg-green-700 p-6 text-white">
                         <h2 className="text-xl font-bold mb-2">{currentNode.label[language] || currentNode.label[Language.ENGLISH]}</h2>
                         <div className="flex items-center gap-2 text-green-100 text-xs">
                             <CheckCircle size={14} /> 
                             <span>Offline Answer Loaded</span>
                         </div>
                     </div>
                     
                     <div className="p-6 space-y-6">
                         <p className="text-stone-800 dark:text-stone-100 text-lg leading-relaxed font-medium">
                            {currentNode.answer.text[language] || currentNode.answer.text[Language.ENGLISH]}
                         </p>

                         {currentNode.answer.organic && (
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-100 dark:border-green-800">
                                <h4 className="flex items-center gap-2 font-bold text-green-800 dark:text-green-400 mb-2">
                                    <Leaf size={18} /> Organic / Low Cost
                                </h4>
                                <p className="text-stone-700 dark:text-stone-300 text-sm">
                                    {currentNode.answer.organic[language] || currentNode.answer.organic[Language.ENGLISH]}
                                </p>
                            </div>
                         )}

                         {currentNode.answer.chemical && (
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h4 className="flex items-center gap-2 font-bold text-blue-800 dark:text-blue-400 mb-2">
                                    <AlertTriangle size={18} /> Chemical Option
                                </h4>
                                <p className="text-stone-700 dark:text-stone-300 text-sm">
                                    {currentNode.answer.chemical[language] || currentNode.answer.chemical[Language.ENGLISH]}
                                </p>
                            </div>
                         )}

                         {currentNode.answer.safety && (
                             <div className="flex gap-3 items-start p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800">
                                 <ShieldAlert className="text-amber-600 dark:text-amber-400 flex-shrink-0" size={20} />
                                 <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                                     <strong>Safety First:</strong> {currentNode.answer.safety[language] || currentNode.answer.safety[Language.ENGLISH]}
                                 </p>
                             </div>
                         )}
                         
                         <div className="pt-4 border-t border-stone-100 dark:border-stone-700 flex items-center justify-between text-xs text-stone-400 dark:text-stone-500">
                             <span className="flex items-center gap-1">
                                 <Save size={12} /> Saved to offline history
                             </span>
                             <span>
                                 Sync pending...
                             </span>
                         </div>
                     </div>
                 </div>
                 
                 <div className="mt-8 text-center text-xs text-stone-400 dark:text-stone-500">
                     <p>Connect to the internet for detailed AI analysis and image scanning.</p>
                 </div>
            </div>
        ) : (
            <div className="animate-in fade-in zoom-in-95 duration-200">
                {currentPath.length > 0 && (
                     <button onClick={handleBack} className="mb-4 text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 flex items-center gap-1 text-sm font-bold">
                        <ArrowLeft size={16} /> Back
                     </button>
                )}
                
                <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-6">
                    {currentPath.length === 0 
                        ? (language === Language.HINDI ? "आप क्या जानना चाहते हैं?" : "What would you like to know?") 
                        : (language === Language.HINDI ? "एक विकल्प चुनें" : "Select an option")}
                </h2>

                <div className="grid grid-cols-1 gap-4">
                    {visibleOptions?.map((node) => (
                        <button
                            key={node.id}
                            onClick={() => handleSelect(node.id)}
                            className="bg-white dark:bg-stone-800 p-5 rounded-xl border border-stone-200 dark:border-stone-700 shadow-sm hover:border-green-500 dark:hover:border-green-600 hover:shadow-md hover:bg-green-50 dark:hover:bg-green-900/10 transition-all text-left flex items-center justify-between group"
                        >
                            <span className="font-bold text-stone-700 dark:text-stone-200 group-hover:text-green-800 dark:group-hover:text-green-400 text-lg">
                                {node.label[language] || node.label[Language.ENGLISH]}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-700 flex items-center justify-center text-stone-400 dark:text-stone-500 group-hover:bg-white dark:group-hover:bg-stone-600 group-hover:text-green-600 dark:group-hover:text-green-400">
                                <ChevronRight size={20} />
                            </div>
                        </button>
                    ))}
                </div>
                
                {currentPath.length === 0 && (
                    <div className="mt-12 flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 p-8 border-2 border-dashed border-stone-200 dark:border-stone-700 rounded-3xl">
                        <Sprout size={48} className="mb-4 opacity-20" />
                        <p className="text-sm text-center">
                            Browse categories to find answers without internet.
                        </p>
                    </div>
                )}
            </div>
        )}
      </div>
    </div>
  );
};

export default OfflineChatbot;
