import React, { useEffect, useState, useRef } from 'react';
import { Language, UserProfile, WeatherData, AppNotification, CropPrice, ViewState, ActiveCropCycle } from '../types';
import { TRANSLATIONS, SOIL_DATA, MOCK_CROPS } from '../constants';
import { fetchWeather } from '../services/weatherService';
import { fetchMandiPrices, detectStateFromAddress } from '../services/mandiService';
import { CloudRain, Sun, Droplets, Bug, AlertTriangle, CheckCircle, Wind, Calendar, Bell, X, TrendingUp, TrendingDown, Minus, ArrowRight, Activity, Sprout, Clock, AlertCircle, ShoppingCart, HelpCircle, Moon } from 'lucide-react';

interface DashboardProps {
  user: UserProfile;
  language: Language;
  onProfileClick: () => void;
  notifications: AppNotification[];
  addNotification: (notification: AppNotification) => void;
  setView: (view: ViewState) => void;
  onLogout: () => void;
  onUpdateUser: (user: UserProfile) => void;
  isDarkMode?: boolean;
  toggleTheme?: () => void;
  onStartTour?: () => void;
}

// Moved outside component to prevent re-creation on every render
const StatusCard = ({ title, status, icon: Icon, value, subValue, t }: any) => {
    let bgClass = "bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm border-stone-100 dark:border-stone-700";
    let iconBgClass = "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400";
    let statusTextClass = "text-green-700 dark:text-green-400";
    let statusText = t.safe;
    let StatusIcon = CheckCircle;
    let cardGradient = "from-white/60 to-stone-50/60 dark:from-stone-800/60 dark:to-stone-900/60";

    if (status === 'warning') {
      iconBgClass = "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400";
      statusTextClass = "text-amber-700 dark:text-amber-400";
      statusText = t.alert;
      StatusIcon = AlertTriangle;
      bgClass = "bg-amber-50/60 dark:bg-amber-900/20 border-amber-100 dark:border-amber-800";
      cardGradient = "from-amber-50/60 to-white/60 dark:from-stone-800/60 dark:to-stone-900/60";
    } else if (status === 'alert') {
      iconBgClass = "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";
      statusTextClass = "text-red-700 dark:text-red-400";
      statusText = t.actionRequired;
      StatusIcon = AlertTriangle;
      bgClass = "bg-red-50/60 dark:bg-red-900/20 border-red-100 dark:border-red-800";
      cardGradient = "from-red-50/60 to-white/60 dark:from-stone-800/60 dark:to-stone-900/60";
    } else {
        // Good status
        bgClass = "bg-white/70 dark:bg-stone-800/70 border-emerald-100 dark:border-emerald-800/50";
        cardGradient = "from-white/70 to-emerald-50/30 dark:from-stone-800/70 dark:to-stone-900/70";
    }

    return (
      <div className={`p-5 rounded-3xl border shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden bg-gradient-to-br ${cardGradient} ${bgClass} backdrop-blur-md`}>
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-2xl ${iconBgClass} transition-colors shadow-sm`}>
             <Icon size={24} strokeWidth={2.5} />
          </div>
          <div className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-white/50 dark:bg-stone-900/50 backdrop-blur-sm shadow-sm ${statusTextClass}`}>
            <StatusIcon size={12} />
            <span>{statusText}</span>
          </div>
        </div>
        <h3 className="text-stone-500 dark:text-stone-400 text-sm font-bold uppercase tracking-wider mb-1">{title}</h3>
        <p className="text-2xl font-extrabold text-stone-800 dark:text-stone-100">{value}</p>
        {subValue && <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-medium">{subValue}</p>}
      </div>
    );
};

const Dashboard: React.FC<DashboardProps> = ({ user, language, onProfileClick, notifications, addNotification, setView, onLogout, onUpdateUser, isDarkMode, toggleTheme, onStartTour }) => {
  const t = TRANSLATIONS[language];
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecastView, setForecastView] = useState<'hourly' | 'daily'>('hourly');
  
  const [showNotifications, setShowNotifications] = useState(false);
  const hasSentWeatherNotification = useRef(false);

  const [marketPrices, setMarketPrices] = useState<CropPrice[]>([]);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const calculateItemsToShow = () => {
        const width = window.innerWidth;
        if (width >= 1536) setItemsToShow(5);
        else if (width >= 1280) setItemsToShow(4);
        else if (width >= 1024) setItemsToShow(3);
        else if (width >= 768) setItemsToShow(2);
        else setItemsToShow(1);
    };

    calculateItemsToShow();
    window.addEventListener('resize', calculateItemsToShow);
    return () => window.removeEventListener('resize', calculateItemsToShow);
  }, []);

  useEffect(() => {
    fetchWeather(user.location.lat, user.location.lng).then(setWeather);

    const getMarketData = async () => {
        const address = user.farmDetails?.location.address || user.location.city || "";
        const state = detectStateFromAddress(address); 
        const prices = await fetchMandiPrices(state || "");
        
        if (prices.length > 0) {
            setMarketPrices(prices); 
        } else {
            setMarketPrices(MOCK_CROPS);
        }
    };
    getMarketData();
  }, [user.location]);
  
  useEffect(() => {
    if (weather && weather.daily && weather.daily.length > 0 && !hasSentWeatherNotification.current) {
        const todayForecast = weather.daily[0];
        hasSentWeatherNotification.current = true;

        const weatherNotification: AppNotification = {
            id: 'daily-weather-report',
            title: "Morning Weather Report",
            time: "Today, 05:00 AM",
            isUnread: true,
            content: (
                <div className="space-y-3 mt-2">
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-2xl ${weather.isRainy ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'}`}>
                            {weather.isRainy ? <CloudRain size={28} /> : <Sun size={28} />}
                        </div>
                        <div>
                            <div className="flex items-end gap-2">
                                <span className="text-3xl font-bold text-stone-800">{Math.round(todayForecast.maxTemp)}°</span>
                                <span className="text-lg text-stone-400 font-bold mb-1">/ {Math.round(todayForecast.minTemp)}°</span>
                            </div>
                            <p className="text-sm font-medium text-stone-500">{todayForecast.condition}</p>
                        </div>
                    </div>
                    <div className="text-xs text-stone-400 text-center pt-1 italic">
                        "Good morning! Plan your farm activities accordingly."
                    </div>
                </div>
            )
        };
        addNotification(weatherNotification);
    }
  }, [weather, addNotification]);

  const soilStatus = user.soilHealthCard ? 'good' : 'alert';
  const pestStatus = weather?.humidity && weather.humidity > 80 ? 'warning' : 'good';
  const weatherStatus = weather?.isRainy ? 'warning' : 'good';

  const activeCrops = user.activeCrops || [];
  const hasSoilCard = !!user.soilHealthCard;
  const showLiveMonitoring = hasSoilCard && activeCrops.length > 0;

  const getCropStatus = (crop: ActiveCropCycle) => {
      const startDate = new Date(crop.startDate);
      const today = new Date();
      const diffTime = today.getTime() - startDate.getTime();
      const dayNumber = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
      
      const totalDays = crop.durationDays || 120;
      const progress = Math.min(100, Math.round((dayNumber / totalDays) * 100));
      
      let currentStage = "Germination"; 
      const sortedEvents = [...(crop.timeline || [])].sort((a, b) => a.day - b.day);
      
      for (const event of sortedEvents) {
          if (event.day <= dayNumber && event.stage) {
              currentStage = event.stage;
          }
      }
      
      const nextTask = sortedEvents.find(e => e.day >= dayNumber);
      
      return { dayNumber, totalDays, progress, currentStage, nextTask };
  };

  const getComplianceStatus = (crop: ActiveCropCycle, currentDay: number) => {
      const daysMap = new Map<number, number>();
      
      (crop.timeline || []).forEach(event => {
          const start = event.day;
          const end = event.endDay || event.day;
          for (let d = start; d <= end; d++) {
              daysMap.set(d, (daysMap.get(d) || 0) + 1);
          }
      });

      for (let d = 1; d <= currentDay; d++) {
          const expectedCount = daysMap.get(d) || 0;
          if (expectedCount === 0) continue;
          const completedForDay = (crop.progress || []).filter(p => p.day === d).length;
          if (completedForDay < expectedCount) return 'red';
      }
      return 'green';
  };

  return (
    <div className="h-full overflow-y-auto pb-24 md:pb-0 relative custom-scrollbar">
      {/* Header */}
      <div className="bg-white/70 dark:bg-stone-900/70 backdrop-blur-md border-b border-stone-200/50 dark:border-stone-700/50 sticky top-0 z-40 shadow-sm transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
            <div>
                <h1 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-stone-500 dark:from-stone-100 dark:to-stone-400">{t.dashboard}</h1>
                <p className="text-stone-500 dark:text-stone-400 text-xs md:text-sm font-medium">{new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
            </div>
             
             <div className="flex items-center gap-3">
                 <button onClick={() => setView('profile')} className="md:hidden w-9 h-9 rounded-full overflow-hidden border border-stone-200 dark:border-stone-600 shadow-sm active:scale-95 transition-transform">
                    <img src={`https://ui-avatars.com/api/?name=${user.name}&background=166534&color=fff`} alt="Profile" className="w-full h-full object-cover" />
                 </button>

                 {onStartTour && (
                    <button onClick={onStartTour} className="p-2.5 rounded-full hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-500 dark:text-stone-400 transition-all" title="Take a Tour">
                        <HelpCircle size={22} />
                    </button>
                 )}

                 {toggleTheme && (
                    <button onClick={toggleTheme} className={`p-2.5 rounded-full transition-all duration-200 ${isDarkMode ? 'bg-stone-700 text-yellow-400' : 'hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-500 dark:text-stone-400'}`}>
                        {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
                    </button>
                 )}

                 <div className="relative">
                    <button onClick={() => setShowNotifications(!showNotifications)} className={`p-2.5 rounded-full transition-all duration-200 relative ${showNotifications ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-500 dark:text-stone-400'}`}>
                        <Bell size={22} />
                        {notifications.length > 0 && <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-stone-800 rounded-full"></span>}
                    </button>

                    {showNotifications && (
                        <>
                            <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)}></div>
                            <div className="absolute right-0 top-full mt-3 w-80 sm:w-96 bg-white dark:bg-stone-800 rounded-2xl shadow-xl border border-stone-200 dark:border-stone-700 overflow-hidden z-50 animate-in fade-in zoom-in-95 origin-top-right">
                                <div className="p-4 border-b border-stone-100 dark:border-stone-700 flex justify-between items-center bg-stone-50/50 dark:bg-stone-700/30">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-stone-800 dark:text-stone-100">Notifications</h3>
                                        <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold rounded-full">{notifications.length} New</span>
                                    </div>
                                    <button onClick={() => setShowNotifications(false)} className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-1 rounded-full hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors">
                                        <X size={16} />
                                    </button>
                                </div>
                                <div className="max-h-[400px] overflow-y-auto">
                                    {notifications.length > 0 ? (
                                        notifications.map((notif) => (
                                            <div key={notif.id} className="p-4 border-b border-stone-50 dark:border-stone-700 hover:bg-stone-50/50 dark:hover:bg-stone-700/50 transition-colors">
                                                <div className="flex justify-between items-center mb-1">
                                                    <h4 className="font-bold text-sm text-stone-800 dark:text-stone-200 flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                                        {notif.title}
                                                    </h4>
                                                    <span className="text-[10px] text-stone-400 font-medium bg-stone-100 dark:bg-stone-700 px-2 py-0.5 rounded-full">{notif.time}</span>
                                                </div>
                                                <div className="text-stone-600 dark:text-stone-400">{notif.content}</div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="p-8 text-center text-stone-400 flex flex-col items-center gap-2">
                                            <Bell size={24} className="opacity-20" />
                                            <span className="text-sm">No new notifications</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                 </div>
             </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
        <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-stone-700 to-stone-500 dark:from-stone-200 dark:to-stone-400">
                {t.welcome}, <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">{user.name}</span>!
            </h2>
            <p className="text-stone-500 dark:text-stone-400 font-medium">Here's what's happening on your farm today.</p>
        </div>

        {weather && (weather.hourly?.length > 0 || weather.daily?.length > 0) && (
            <div className={`rounded-[2rem] p-6 md:p-8 relative overflow-hidden shadow-xl transition-all border border-white/10 text-white backdrop-blur-md
                ${weather.isRainy 
                    ? 'bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-900' 
                    : (weather.condition.toLowerCase().includes('clear') || weather.condition.toLowerCase().includes('sunny'))
                        ? 'bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-400' 
                        : 'bg-gradient-to-br from-blue-400 via-sky-400 to-cyan-400'
                }`}>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                    {weather.isRainy ? <CloudRain size={180} /> : <Sun size={180} />}
                </div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold border border-white/20 flex items-center gap-1">
                                <Clock size={12} /> Live Forecast
                            </span>
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold border border-white/20 flex items-center gap-1">
                                {user.location.city}
                            </span>
                        </div>
                        <h2 className="text-6xl md:text-7xl font-bold mb-2 tracking-tighter drop-shadow-sm">{Math.round(weather.temperature)}°</h2>
                        <p className="text-lg md:text-xl font-medium opacity-90 flex items-center gap-2">
                            {weather.condition} 
                            <span className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></span> 
                            H: {Math.round(weather.daily[0]?.maxTemp || 0)}° L: {Math.round(weather.daily[0]?.minTemp || 0)}°
                        </p>
                    </div>

                    <div className="w-full md:w-auto">
                        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar md:justify-end">
                            {weather.hourly.slice(0, 5).map((hour, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 min-w-[80px]">
                                    <span className="text-xs font-bold opacity-80">{new Date(hour.time).toLocaleTimeString([], { hour: 'numeric', hour12: true })}</span>
                                    {hour.precipitationProbability > 30 ? <CloudRain size={20} /> : <Sun size={20} />}
                                    <span className="text-lg font-bold">{Math.round(hour.temperature)}°</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )}

        <div>
            <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
                <span className="p-1.5 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg shadow-md shadow-green-200/50 dark:shadow-none">
                   <Activity size={16} strokeWidth={2.5} />
                </span>
                Farm Health
                <span className="h-px flex-1 bg-gradient-to-r from-stone-200 to-transparent dark:from-stone-700 dark:to-transparent"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <StatusCard title={t.weather} status={weatherStatus} icon={weather?.isRainy ? CloudRain : Sun} value={weather ? `${weather.temperature}°C` : "--"} subValue={weather ? `${weather.condition}` : "Loading..."} t={t} />
                <StatusCard title={t.soilHealth} status={soilStatus} icon={Droplets} value={user.soilHealthCard ? `pH: ${SOIL_DATA.pH}` : "No Report"} subValue={user.soilHealthCard ? "Analysis Ready" : "Upload Card"} t={t} />
                <StatusCard title={t.pestRisk} status={pestStatus} icon={Bug} value={weather ? `Humidity: ${weather.humidity}%` : "--"} subValue={pestStatus === 'good' ? "Low Risk" : "High Risk"} t={t} />
                
                <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-5 rounded-3xl border border-indigo-500/50 shadow-lg text-white relative overflow-hidden group" title="Earn points by using organic fertilizers and saving water">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                        <Droplets size={80} />
                    </div>
                    
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md text-white shadow-sm border border-white/20">
                            <Droplets size={22} strokeWidth={2.5} />
                        </div>
                        <span className="text-[10px] font-bold bg-amber-400 text-amber-950 px-2.5 py-1 rounded-full border border-amber-300 shadow-sm">Gold Tier</span>
                    </div>
                    <h3 className="text-indigo-200 text-xs font-bold uppercase tracking-wider mb-1 relative z-10">{t.sustainability}</h3>
                    <div className="flex items-end gap-2 mb-3 relative z-10">
                        <span className="text-3xl font-extrabold text-white">750</span>
                        <span className="text-sm text-indigo-200 font-bold mb-1.5 opacity-80">/ 1000 pts</span>
                    </div>
                    <div className="w-full bg-black/20 rounded-full h-2.5 overflow-hidden relative z-10">
                        <div className="bg-amber-400 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(251,191,36,0.6)]" style={{width: '75%'}}></div>
                    </div>
                </div>
            </div>
        </div>

        {showLiveMonitoring && (
            <div className="mb-4 animate-in slide-in-from-top-5 duration-500">
                <div className="flex items-center gap-2 mb-4">
                     <span className="p-1.5 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg shadow-md shadow-blue-200/50 dark:shadow-none">
                        <Activity size={16} strokeWidth={2.5} />
                     </span>
                     <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100">Live Crop Monitoring</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeCrops.map((crop) => {
                        const status = getCropStatus(crop);
                        const compliance = getComplianceStatus(crop, status.dayNumber);
                        
                        return (
                            <div key={crop.id} className="bg-white/80 dark:bg-stone-800/80 backdrop-blur-md rounded-3xl p-6 border border-stone-100 dark:border-stone-700 shadow-sm hover:border-green-300 dark:hover:border-green-600 transition-all group relative overflow-hidden">
                                 {/* Decorative BG */}
                                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                                 
                                 <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-stone-800 dark:text-stone-100">{crop.cropName}</h4>
                                            <div className="flex items-center gap-2 mt-1">
                                                 <p className="text-sm font-bold text-green-600 dark:text-green-400 flex items-center gap-1">
                                                    <Sprout size={14} /> {status.currentStage}
                                                 </p>
                                                 <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wide ${compliance === 'green' ? 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700' : 'bg-red-50 text-red-600 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700'}`}>
                                                     {compliance === 'green' ? <CheckCircle size={10} /> : <AlertCircle size={10} />}
                                                     {compliance === 'green' ? 'On Track' : 'Attention'}
                                                 </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-3xl font-bold text-stone-800 dark:text-stone-100">Day {status.dayNumber}</span>
                                            <span className="text-xs text-stone-400 block font-bold uppercase tracking-wider">of {status.totalDays}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="w-full bg-stone-100 dark:bg-stone-700 rounded-full h-3 mb-6 overflow-hidden shadow-inner">
                                        <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-full rounded-full transition-all duration-1000 relative shadow-md" style={{width: `${status.progress}%`}}>
                                             <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                                        </div>
                                    </div>

                                    <div className="bg-stone-50/50 dark:bg-stone-700/30 rounded-2xl p-4 border border-stone-100 dark:border-stone-700 flex gap-4 items-center backdrop-blur-sm">
                                        <div className={`p-2.5 rounded-xl flex-shrink-0 ${status.nextTask ? 'bg-white dark:bg-stone-600 text-green-600 dark:text-green-400 shadow-sm' : 'bg-stone-200 dark:bg-stone-600 text-stone-400'}`}>
                                            <Clock size={20} />
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="text-[10px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider truncate">
                                                {status.nextTask?.day === status.dayNumber ? "Today's Activity" : "Up Next"}
                                            </p>
                                            <p className="text-sm font-bold text-stone-700 dark:text-stone-200 truncate">
                                                {status.nextTask ? status.nextTask.activity : "No upcoming tasks"}
                                            </p>
                                        </div>
                                    </div>
                                    
                                     <button onClick={() => setView('recommendations')} className="mt-4 w-full py-3 text-xs font-bold text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 rounded-xl border border-transparent hover:border-green-100 dark:hover:border-green-800 transition-colors flex items-center justify-center gap-1">
                                        View Detailed Timeline <ArrowRight size={14} />
                                     </button>
                                 </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )}
        
        <div>
            <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-4 flex items-center gap-2">
                <span className="p-1.5 bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-lg shadow-md shadow-amber-200/50 dark:shadow-none">
                   <ShoppingCart size={16} strokeWidth={2.5} />
                </span>
                {t.market}
                <span className="h-px flex-1 bg-gradient-to-r from-stone-200 to-transparent dark:from-stone-700 dark:to-transparent"></span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                 {marketPrices.slice(0, itemsToShow).map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm border border-stone-100 dark:border-stone-700 shadow-sm hover:shadow-lg hover:border-green-300 dark:hover:border-green-600 transition-all flex flex-col justify-between h-full group hover:-translate-y-1">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-xs font-bold text-stone-400 uppercase tracking-wider truncate max-w-[80px]">{item.market.split(',')[0]}</p>
                                <div className={`flex items-center ${item.trend === 'up' ? 'text-green-600' : item.trend === 'down' ? 'text-red-500' : 'text-stone-400'}`}>
                                    {item.trend === 'up' && <TrendingUp size={14} />}
                                    {item.trend === 'down' && <TrendingDown size={14} />}
                                    {item.trend === 'stable' && <Minus size={14} />}
                                </div>
                            </div>
                            <h4 className="font-bold text-stone-800 dark:text-stone-100 mb-1 line-clamp-1 group-hover:text-green-700 transition-colors" title={item.crop}>{item.crop}</h4>
                            <p className="text-xl font-bold text-stone-900 dark:text-stone-50">₹{item.price}</p>
                        </div>
                        <div className="mt-3 pt-3 border-t border-stone-50 dark:border-stone-700 flex items-center justify-between text-xs text-stone-400">
                             <span className="flex items-center gap-1"><Calendar size={12} /> Today</span>
                             <span className="font-medium text-stone-500 dark:text-stone-400">/ Qt</span>
                        </div>
                    </div>
                 ))}
                 
                 <div onClick={() => setView('mandi')} className="bg-white/50 dark:bg-stone-800/50 backdrop-blur-sm rounded-2xl p-5 shadow-inner border border-stone-200 dark:border-stone-700 border-dashed flex flex-col items-center justify-center cursor-pointer hover:border-green-500 dark:hover:border-green-600 hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-all group h-full min-h-[140px]">
                    <div className="w-12 h-12 bg-white dark:bg-stone-700 rounded-full flex items-center justify-center text-stone-400 group-hover:text-green-600 dark:group-hover:text-green-400 mb-3 group-hover:scale-110 transition-transform shadow-sm group-hover:shadow-md">
                        <ArrowRight size={24} />
                    </div>
                    <span className="font-bold text-stone-600 dark:text-stone-300 group-hover:text-green-700 dark:group-hover:text-green-400 text-sm">View All Rates</span>
                 </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;