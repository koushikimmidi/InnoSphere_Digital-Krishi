
import { OfflineNode, Language } from './types';

export const OFFLINE_KNOWLEDGE_BASE: OfflineNode[] = [
  {
    id: "cat_crops",
    label: {
      [Language.ENGLISH]: "Crop Management",
      [Language.HINDI]: "फसल प्रबंधन",
      [Language.MARATHI]: "पीक व्यवस्थापन",
      [Language.TELUGU]: "పంట నిర్వహణ",
      [Language.TAMIL]: "பயிர் மேலாண்மை",
      [Language.KANNADA]: "ಬೆಳೆ ನಿರ್ವಹಣೆ",
      [Language.MALAYALAM]: "വിള പരിപാലനം"
    },
    children: [
      {
        id: "crop_paddy",
        label: {
          [Language.ENGLISH]: "Paddy (Rice)",
          [Language.HINDI]: "धान (चावल)",
          [Language.MARATHI]: "भात (तांदूळ)",
          [Language.TELUGU]: "వరి",
          [Language.TAMIL]: "நெல்",
          [Language.KANNADA]: "ಭತ್ತ",
          [Language.MALAYALAM]: "നെല്ല്"
        },
        children: [
          {
            id: "q_paddy_planting",
            label: {
              [Language.ENGLISH]: "Best time for planting?",
              [Language.HINDI]: "रोपण का सबसे अच्छा समय?",
              [Language.MARATHI]: "लागवडीसाठी सर्वोत्तम वेळ?",
              [Language.TELUGU]: "నాటడానికి ఉత్తమ సమయం?",
              [Language.TAMIL]: "நடவு செய்ய சிறந்த நேரம்?",
              [Language.KANNADA]: "ನಾಟಿ ಮಾಡಲು ಉತ್ತಮ ಸಮಯ?",
              [Language.MALAYALAM]: "നടാൻ പറ്റിയ സമയം?"
            },
            answer: {
              text: {
                [Language.ENGLISH]: "Kharif: June-July (with monsoon). Rabi: Nov-Dec. Ensure fields are leveled and have proper drainage.",
                [Language.HINDI]: "खरीफ: जून-जुलाई (मानसून के साथ)। रबी: नवंबर-दिसंबर। सुनिश्चित करें कि खेत समतल हों और उचित जल निकासी हो।",
                [Language.MARATHI]: "खरीप: जून-जुलै (पावसासह). रब्बी: नोव्हेंबर-डिसेंबर. शेत सपाट असल्याची आणि पाण्याचा निचरा योग्य असल्याची खात्री करा.",
                [Language.TELUGU]: "ఖరీఫ్: జూన్-జూలై (రుతుపవనాలతో). రబీ: నవంబర్-డిసెంబర్. పొలాలు చదునుగా ఉండేలా మరియు సరైన నీటి పారుదల ఉండేలా చూసుకోండి.",
                [Language.TAMIL]: "காரீஃப்: ஜூன்-ஜூலை (பருவமழையுடன்). ரபி: நவம்பர்-டிசம்பர். வயல்கள் சமமாகவும், சரியான வடிகால் வசதியுடனும் இருப்பதை உறுதி செய்யவும்.",
                [Language.KANNADA]: "ಖಾರಿಫ್: ಜೂನ್-ಜುಲೈ (ಮುಂಗಾರು ಜೊತೆ). ರಬಿ: ನವೆಂಬರ್-ಡಿಸೆಂಬರ್. ಹೊಲಗಳು ಸಮತಟ್ಟಾಗಿವೆಯೇ ಮತ್ತು ಸರಿಯಾದ ಒಳಚರಂಡಿ ಇದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
                [Language.MALAYALAM]: "ഖാരിഫ്: ജൂൺ-ജൂലൈ (മഴക്കാലത്ത്). റാബി: നവംബർ-ഡിസംബർ. വയലുകൾ നിരപ്പാക്കിയെന്നും ശരിയായ ഡ്രെയിനേജ് ഉണ്ടെന്നും ഉറപ്പാക്കുക."
              }
            }
          },
          {
            id: "q_paddy_blast",
            label: {
              [Language.ENGLISH]: "Treating Leaf Blast?",
              [Language.HINDI]: "लीफ़ ब्लास्ट का उपचार?",
              [Language.MARATHI]: "करपा रोगावर उपचार?",
              [Language.TELUGU]: "ఆకు మచ్చ తెగులు నివారణ?",
              [Language.TAMIL]: "இலை கருகல் நோய் சிகிச்சை?",
              [Language.KANNADA]: "ಎಲೆ ರೋಗ ಚಿಕಿತ್ಸೆ?",
              [Language.MALAYALAM]: "ഇല കരിച്ചിൽ രോഗം?"
            },
            answer: {
              text: {
                [Language.ENGLISH]: "Leaf Blast causes spindle-shaped spots on leaves.",
                [Language.HINDI]: "लीफ़ ब्लास्ट से पत्तियों पर धुरी के आकार के धब्बे पड़ जाते हैं।",
                [Language.MARATHI]: "करपा रोगामुळे पानांवर इलंबोळ्या आकाराचे डाग पडतात.",
                [Language.TELUGU]: "ఆకు మచ్చ తెగులు ఆకులపై కదురు ఆకారపు మచ్చలను కలిగిస్తుంది.",
                [Language.TAMIL]: "இலை கருகல் நோய் இலைகளில் சுழல் வடிவ புள்ளிகளை ஏற்படுத்துகிறது.",
                [Language.KANNADA]: "ಎಲೆ ರೋಗವು ಎಲೆಗಳ ಮೇಲೆ ಸ್ಪಿಂಡಲ್ ಆಕಾರದ ಕಲೆಗಳನ್ನು ಉಂಟುಮಾಡುತ್ತದೆ.",
                [Language.MALAYALAM]: "ഇല കരിച്ചിൽ രോഗം ഇലകളിൽ കറപ്പുള്ള പാടുകൾ ഉണ്ടാക്കുന്നു."
              },
              organic: {
                 [Language.ENGLISH]: "Spray Pseudomonas fluorescence @ 10g/liter water.",
                 [Language.HINDI]: "स्यूडोमोनास फ्लोरेसेंस @ 10 ग्राम/लीटर पानी का छिड़काव करें।",
                 [Language.MARATHI]: "स्यूडोमोनास फ्लोरेसेंस @ 10 ग्रॅम/लिटर पाण्यात फवारा.",
                 [Language.TELUGU]: "10 గ్రా/లీటర్ నీటిలో సూడోమోనాస్ ఫ్లోరోసెన్స్ పిచికారీ చేయండి.",
                 [Language.TAMIL]: "சூடோமோனாஸ் ஃப்ளோரசன்ஸ் @ 10 கிராம்/லிட்டர் தண்ணீரைத் தெளிக்கவும்.",
                 [Language.KANNADA]: "ಸ್ಯೂಡೋಮೊನಾಸ್ ಫ್ಲೋರೊಸೆನ್ಸ್ ಅನ್ನು 10 ಗ್ರಾಂ/ಲೀಟರ್ ನೀರಿಗೆ ಸಿಂಪಡಿಸಿ.",
                 [Language.MALAYALAM]: "സ്യൂഡോമോണസ് ഫ്ലൂറസെൻസ് @ 10 ഗ്രാം/ലിറ്റർ വെള്ളത്തിൽ തളിക്കുക."
              },
              chemical: {
                [Language.ENGLISH]: "Use Tricyclazole 75 WP @ 0.6g/liter water.",
                [Language.HINDI]: "ट्राईसाइक्लाज़ोल 75 WP @ 0.6 ग्राम/लीटर पानी का प्रयोग करें।",
                [Language.MARATHI]: " ट्रायसायಕ್लॅझोल 75 डब्ल्यूपी @ 0.6 ग्रॅम/लिटर वापरा.",
                [Language.TELUGU]: "ట్రైసైక్లజోల్ 75 WP @ 0.6g/లీటర్ నీటిని ఉపయోగించండి.",
                [Language.TAMIL]: "ட்ரைசைக்ளோசோல் 75 WP @ 0.6g/லிட்டர் தண்ணீரைப் பயன்படுத்தவும்.",
                [Language.KANNADA]: "ಟ್ರೈಸೈಕ್ಲಜೋಲ್ 75 WP @ 0.6g/ಲೀಟರ್ ನೀರನ್ನು ಬಳಸಿ.",
                [Language.MALAYALAM]: "ട്രൈസൈക്ലാസോൾ 75 WP @ 0.6g/ലിറ്റർ വെള്ളം ഉപയോഗിക്കുക."
              },
              safety: {
                [Language.ENGLISH]: "Wear mask while spraying chemicals.",
                [Language.HINDI]: "रसायनों का छिड़काव करते समय मास्क पहनें।",
                [Language.MARATHI]: "रसायने फवारताना मास्क वापरा.",
                [Language.TELUGU]: "రసాయనాలను పిచికారీ చేసేటప్పుడు మాస్క్ ధరించండి.",
                [Language.TAMIL]: "ரசாயனங்கள் தெளிக்கும் போது முகமூடி அணியுங்கள்.",
                [Language.KANNADA]: "ರಾಸಾಯನಿಕಗಳನ್ನು ಸಿಂಪಡಿಸುವಾಗ ಮಾಸ್ಕ್ ಧರಿಸಿ.",
                [Language.MALAYALAM]: "രാസവസ്തുക്കൾ തളിക്കുമ്പോൾ മാസ്ക് ധരിക്കുക."
              }
            }
          }
        ]
      },
      {
        id: "crop_wheat",
        label: {
            [Language.ENGLISH]: "Wheat",
            [Language.HINDI]: "गेहूं",
            [Language.MARATHI]: "गहू",
            [Language.TELUGU]: "గోధుమ",
            [Language.TAMIL]: "கோதுமை",
            [Language.KANNADA]: "ಗೋಧಿ",
            [Language.MALAYALAM]: "ഗോതമ്പ്"
        },
        children: [
            {
                id: "q_wheat_irrigation",
                label: {
                    [Language.ENGLISH]: "Irrigation Schedule?",
                    [Language.HINDI]: "सिंचाई अनुसूची?",
                    [Language.MARATHI]: "सिंचन वेळापत्रक?",
                    [Language.TELUGU]: "నీటిపారుదల షెడ్యూల్?",
                    [Language.TAMIL]: "நீர்ப்பாசன அட்டவணை?",
                    [Language.KANNADA]: "ನೀರಾವರಿ ವೇಳಾಪಟ್ಟಿ?",
                    [Language.MALAYALAM]: "ജലസേചന ഷെഡ്യൂൾ?"
                },
                answer: {
                    text: {
                        [Language.ENGLISH]: "Critical stage: CRI (21 days after sowing). Total 4-6 irrigations required.",
                        [Language.HINDI]: "महत्वपूर्ण चरण: CRI (बुवाई के 21 दिन बाद)। कुल 4-6 सिंचाई की आवश्यकता है।",
                        [Language.MARATHI]: "महत्वाचा टप्पा: CRI (पेरणीनंतर 21 दिवस). एकूण 4-6 सिंचन आवश्यक.",
                        [Language.TELUGU]: "కీలక దశ: CRI (విత్తిన 21 రోజుల తర్వాత). మొత్తం 4-6 నీటిపారుదల అవసరం.",
                        [Language.TAMIL]: "முக்கியமான நிலை: CRI (விதைத்த 21 நாட்களுக்குப் பிறகு). மொத்தம் 4-6 நீர்ப்பாசனம் தேவை.",
                        [Language.KANNADA]: "ನಿರ್ಣಾಯಕ ಹಂತ: CRI (ಬಿತ್ತನೆಯ 21 ದಿನಗಳ ನಂತರ). ಒಟ್ಟು 4-6 ನೀರಾವರಿ ಅಗತ್ಯವಿದೆ.",
                        [Language.MALAYALAM]: "പ്രധാന ഘട്ടം: CRI (വിതച്ച് 21 ദിവസത്തിന് ശേഷം). ആകെ 4-6 ജലസേചനം ആവശ്യമാണ്."
                    }
                }
            }
        ]
      }
    ]
  },
  {
    id: "cat_pests",
    label: {
      [Language.ENGLISH]: "Pest & Disease Control",
      [Language.HINDI]: "कीट और रोग नियंत्रण",
      [Language.MARATHI]: "कीड आणि रोग नियंत्रण",
      [Language.TELUGU]: "తెగులు మరియు వ్యాధి నియంత్రణ",
      [Language.TAMIL]: "பூச்சி மற்றும் நோய் கட்டுப்பாடு",
      [Language.KANNADA]: "ಕೀಟ ಮತ್ತು ರೋಗ ನಿಯಂತ್ರಣ",
      [Language.MALAYALAM]: "കീടങ്ങളും രോഗ നിയന്ത്രണവും"
    },
    children: [
      {
        id: "pest_bollworm",
        label: {
          [Language.ENGLISH]: "Pink Bollworm (Cotton)",
          [Language.HINDI]: "गुलाबी सुंडी (कपास)",
          [Language.MARATHI]: "गुलाबी बोंडअळी (कापूस)",
          [Language.TELUGU]: "గులాబీ రంగు పురుగు (పత్తి)",
          [Language.TAMIL]: "இளஞ்சிவப்பு காய்ப்புழு (பருத்தி)",
          [Language.KANNADA]: "ಗುಲಾಬಿ ಬೊಲ್ವರ್ಮ್ (ಹತ್ತಿ)",
          [Language.MALAYALAM]: "പിങ്ക് ബോൾവോം (പരുത്തി)"
        },
        children: [
            {
                id: "q_bollworm_control",
                label: {
                    [Language.ENGLISH]: "How to control?",
                    [Language.HINDI]: "नियंत्रण कैसे करें?",
                    [Language.MARATHI]: "नियंत्रण कसे करावे?",
                    [Language.TELUGU]: "నియంత్రించడం ఎలా?",
                    [Language.TAMIL]: "கட்டுப்படுத்துவது எப்படி?",
                    [Language.KANNADA]: "ನಿಯಂತ್ರಿಸುವುದು ಹೇಗೆ?",
                    [Language.MALAYALAM]: "എങ്ങനെ നിയന്ത്രിക്കാം?"
                },
                answer: {
                    text: {
                        [Language.ENGLISH]: "Install Pheromone traps @ 5/acre to monitor moth activity.",
                        [Language.HINDI]: "पतंगों की गतिविधि की निगरानी के लिए फेरोमोन ट्रैप @ 5/एकड़ स्थापित करें।",
                        [Language.MARATHI]: "पतंगांच्या हालचालीवर लक्ष ठेवण्यासाठी फेरोमोन सापळे @ 5/एकर लावा.",
                        [Language.TELUGU]: "మాత్ కార్యకలాపాలను పర్యవేక్షించడానికి ఎకరానికి 5 చొప్పున ఫెరోమోన్ ట్రాప్‌లను ఇన్‌స్టాల్ చేయండి.",
                        [Language.TAMIL]: "அந்துப்பூச்சி நடவடிக்கையை கண்காணிக்க ஒரு ஏக்கருக்கு 5 என்ற அளவில் பெரோமோன் பொறிகளை நிறுவவும்.",
                        [Language.KANNADA]: "ಪತಂಗಗಳ ಚಟುವಟಿಕೆಯನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲು ಎಕರೆಗೆ 5 ರಂತೆ ಫೆರೋಮೋನ್ ಬಲೆಗಳನ್ನು ಅಳವಡಿಸಿ.",
                        [Language.MALAYALAM]: "നിശാശലഭങ്ങളുടെ പ്രവർത്തനം നിരീക്ഷിക്കാൻ ഏക്കറിന് 5 എന്ന തോതിൽ ഫെറോമോൺ കെണികൾ സ്ഥാപിക്കുക."
                    },
                    organic: {
                        [Language.ENGLISH]: "Spray Neem Oil 1500 ppm @ 5ml/liter.",
                        [Language.HINDI]: "नीम का तेल 1500 पीपीएम @ 5 मिली/लीटर स्प्रे करें।",
                        [Language.MARATHI]: "निंबोळी तेल 1500 पीपीएम @ 5 मिली/लिटर फवारा.",
                        [Language.TELUGU]: "వేప నూనె 1500 ppm @ 5ml/లీటర్ పిచికారీ చేయండి.",
                        [Language.TAMIL]: "வேப்ப எண்ணெய் 1500 ppm @ 5ml/லிட்டர் தெளிக்கவும்.",
                        [Language.KANNADA]: "ಬೇವು ಎಣ್ಣೆ 1500 ppm @ 5ml/ಲೀಟರ್ ಸಿಂಪಡಿಸಿ.",
                        [Language.MALAYALAM]: "വേപ്പെണ്ണ 1500 ppm @ 5ml/ലിറ്റർ സ്പ്രേ ചെയ്യുക."
                    },
                    chemical: {
                        [Language.ENGLISH]: "Profenofos 50 EC @ 2ml/liter (Consult expert before use).",
                        [Language.HINDI]: "प्रोफेनोफॉस 50 ईसी @ 2 मिली/लीटर (उपयोग से पहले विशेषज्ञ से सलाह लें)।",
                        [Language.MARATHI]: "प्रोफेनोफॉस 50 ईसी @ 2 मिली/लिटर (वापरण्यापूर्वी तज्ञांचा सल्ला घ्या).",
                        [Language.TELUGU]: "ప్రొఫెనోఫోస్ 50 EC @ 2ml/లీటర్ (ఉపయోగించే ముందు నిపుణులను సంప్రదించండి).",
                        [Language.TAMIL]: "ப்ரோஃபெனோஃபோஸ் 50 EC @ 2ml/லிட்டர் (பயன்படுத்துவதற்கு முன் நிபுணரை அணுகவும்).",
                        [Language.KANNADA]: "ಪ್ರೊಫೆನೊಫೊಸ್ 50 EC @ 2ml/ಲೀಟರ್ (ಬಳಸುವ ಮೊದಲು ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ).",
                        [Language.MALAYALAM]: "പ്രൊഫെനോഫോസ് 50 EC @ 2ml/ലിറ്റർ (ഉപയോഗിക്കുന്നതിന് മുമ്പ് വിദഗ്ദ്ധനെ സമീപിക്കുക)."
                    },
                    safety: {
                        [Language.ENGLISH]: "Avoid spraying during flowering to protect bees.",
                        [Language.HINDI]: "मधुमक्खियों की रक्षा के लिए फूल आने के दौरान छिड़काव से बचें।",
                        [Language.MARATHI]: "मधमाश्यांचे संरक्षण करण्यासाठी फुलोऱ्याच्या काळात फवारणी टाळा.",
                        [Language.TELUGU]: "తేనెటీగలను రక్షించడానికి పుష్పించే సమయంలో పిచికారీ చేయవద్దు.",
                        [Language.TAMIL]: "தேனீக்களைப் பாதுகாக்க பூக்கும் போது தெளிப்பதைத் தவிர்க்கவும்.",
                        [Language.KANNADA]: "ಜೇನುನೊಣಗಳನ್ನು ರಕ್ಷಿಸಲು ಹೂಬಿಡುವ ಸಮಯದಲ್ಲಿ ಸಿಂಪಡಿಸುವುದನ್ನು ತಪ್ಪಿಸಿ.",
                        [Language.MALAYALAM]: "തേനീച്ചകളെ സംരക്ഷിക്കാൻ പൂവിടുന്ന സമയത്ത് തളിക്കുന്നത് ഒഴിവാക്കുക."
                    }
                }
            }
        ]
      }
    ]
  },
  {
    id: "cat_soil",
    label: {
      [Language.ENGLISH]: "Soil & Fertilizers",
      [Language.HINDI]: "मिट्टी और उर्वरक",
      [Language.MARATHI]: "माती आणि खते",
      [Language.TELUGU]: "నేల మరియు ఎరువులు",
      [Language.TAMIL]: "மண் மற்றும் உரங்கள்",
      [Language.KANNADA]: "ಮಣ್ಣು ಮತ್ತು ರಸಗೊಬ್ಬರಗಳು",
      [Language.MALAYALAM]: "മണ്ണും വളങ്ങളും"
    },
    children: [
      {
        id: "soil_organic",
        label: {
          [Language.ENGLISH]: "Organic Fertilizers",
          [Language.HINDI]: "जैविक उर्वरक",
          [Language.MARATHI]: "सेंद्रिय खते",
          [Language.TELUGU]: "సేంద్రీయ ఎరువులు",
          [Language.TAMIL]: "இயற்கை உரங்கள்",
          [Language.KANNADA]: "ಸಾವಯವ ಗೊಬ್ಬರಗಳು",
          [Language.MALAYALAM]: "ജൈവ വളങ്ങൾ"
        },
        children: [
            {
                id: "q_vermicompost",
                label: {
                    [Language.ENGLISH]: "Benefits of Vermicompost?",
                    [Language.HINDI]: "वर्मीकम्पोस्ट के लाभ?",
                    [Language.MARATHI]: "गांडूळ खताचे फायदे?",
                    [Language.TELUGU]: "వర్మీకంపోస్ట్ ప్రయోజనాలు?",
                    [Language.TAMIL]: "மண்புழு உரத்தின் நன்மைகள்?",
                    [Language.KANNADA]: "ವರ್ಮಿಕಾಂಪೋಸ್ಟ್ ಪ್ರಯೋಜನಗಳು?",
                    [Language.MALAYALAM]: "മ렁വളത്തിന്റെ ഗുണങ്ങൾ?"
                },
                answer: {
                    text: {
                        [Language.ENGLISH]: "Improves soil structure, water retention, and microbial activity. Apply 2 tons/acre before sowing.",
                        [Language.HINDI]: "मिट्टी की संरचना, जल प्रतिधारण और माइक्रोबियल गतिविधि में सुधार करता है। बुवाई से पहले 2 टन/एकड़ डालें।",
                        [Language.MARATHI]: "मातीची रचना, पाणी टिकवून ठेवण्याची क्षमता आणि सूक्ष्मजीव क्रिया सुधारते. पेरणीपूर्वी २ टन/एकर टाका.",
                        [Language.TELUGU]: "నేల నిర్మాణం, నీటి నిల్వ మరియు సూక్ష్మజీవుల కార్యకలాపాలను మెరుగుపరుస్తుంది. విత్తడానికి ముందు ఎకరానికి 2 టన్నులు వేయాలి.",
                        [Language.TAMIL]: "மண் அமைப்பு, நீர் தேக்கம் மற்றும் நுண்ணுயிர் செயல்பாட்டை மேம்படுத்துகிறது. விதைப்பதற்கு முன் ஏக்கருக்கு 2 டன் இடவும்.",
                        [Language.KANNADA]: "ಮಣ್ಣಿನ ರಚನೆ, ನೀರಿನ ಧಾರಣ ಮತ್ತು ಸೂಕ್ಷ್ಮಜೀವಿಗಳ ಚಟುವಟಿಕೆಯನ್ನು ಸುಧಾರಿಸುತ್ತದೆ. ಬಿತ್ತನೆಗೆ ಮೊದಲು ಎಕರೆಗೆ 2 ಟನ್ ಹಾಕಿ.",
                        [Language.MALAYALAM]: "മണ്ണിന്റെ ഘടന, ജലസംഭരണം, സൂക്ഷ്മാണുക്കളുടെ പ്രവർത്തനം എന്നിവ മെച്ചപ്പെടുത്തുന്നു. വിതയ്ക്കുന്നതിന് മുമ്പ് ഏക്കറിന് 2 ടൺ പ്രയോഗിക്കുക."
                    }
                }
            }
        ]
      },
      {
          id: "soil_testing",
          label: {
              [Language.ENGLISH]: "Soil Testing",
              [Language.HINDI]: "मिट्टी परीक्षण",
              [Language.MARATHI]: "माती परीक्षण",
              [Language.TELUGU]: "మట్టి పరీక్ష",
              [Language.TAMIL]: "மண் பரிசோதனை",
              [Language.KANNADA]: "ಮಣ್ಣು ಪರೀಕ್ಷೆ",
              [Language.MALAYALAM]: "മണ്ണ് പരിശോധന"
          },
          children: [
            {
                id: "q_how_to_sample",
                label: {
                    [Language.ENGLISH]: "How to take sample?",
                    [Language.HINDI]: "नमूना कैसे लें?",
                    [Language.MARATHI]: "नमुना कसा घ्यावा?",
                    [Language.TELUGU]: "నమూనా ఎలా తీసుకోవాలి?",
                    [Language.TAMIL]: "மாதிரி எடுப்பது எப்படி?",
                    [Language.KANNADA]: "ಮಾದರಿ ತೆಗೆಯುವುದು ಹೇಗೆ?",
                    [Language.MALAYALAM]: "സാമ്പിൾ എങ്ങനെ എടുക്കാം?"
                },
                answer: {
                    text: {
                        [Language.ENGLISH]: "Collect soil from 10-15 spots in a V-shape (6 inches deep). Mix them well, dry in shade, and take 500g for testing.",
                        [Language.HINDI]: "वी-आकार (6 इंच गहरा) में 10-15 स्थानों से मिट्टी एकत्र करें। उन्हें अच्छी तरह मिलाएं, छाया में सुखाएं और परीक्षण के लिए 500 ग्राम लें।",
                        [Language.MARATHI]: "व्ही-आकारात (६ इंच खोल) १०-१५ ठिकाणांवरून माती गोळा करा. चांगले मिसळा, सावलीत वाळवा आणि परीक्षणासाठी ५०० ग्रॅम घ्या.",
                        [Language.TELUGU]: "V-ఆకారంలో (6 అంగుళాల లోతు) 10-15 మచ్చల నుండి మట్టిని సేకరించండి. వాటిని బాగా కలపండి, నీడలో ఆరబెట్టండి మరియు పరీక్ష కోసం 500 గ్రా తీసుకోండి.",
                        [Language.TAMIL]: "வி-வடிவில் (6 அங்குல ஆழம்) 10-15 இடங்களில் மண்ணை சேகரிக்கவும். அவற்றை நன்றாக கலந்து, நிழலில் உலர்த்தி, சோதனைக்கு 500 கிராம் எடுக்கவும்.",
                        [Language.KANNADA]: "ವಿ-ಆಕಾರದಲ್ಲಿ (6 ಇಂಚು ಆಳ) 10-15 ಕಡೆಗಳಿಂದ ಮಣ್ಣನ್ನು ಸಂಗ್ರಹಿಸಿ. ಚೆನ್ನಾಗಿ ಮಿಶ್ರಣ ಮಾಡಿ, ನೆರಳಿನಲ್ಲಿ ಒಣಗಿಸಿ ಮತ್ತು ಪರೀಕ್ಷೆಗೆ 500 ಗ್ರಾಂ ತೆಗೆದುಕೊಳ್ಳಿ.",
                        [Language.MALAYALAM]: "വി-ആകൃതിയിൽ (6 ഇഞ്ച് ആഴത്തിൽ) 10-15 സ്ഥലങ്ങളിൽ നിന്ന് മണ്ണ് ശേഖരിക്കുക. നന്നായി ഇളക്കുക, തണലിൽ ഉണക്കുക, പരിശോധനയ്ക്കായി 500 ഗ്രാം എടുക്കുക."
                    }
                }
            }
          ]
      }
    ]
  },
  {
    id: "cat_govt",
    label: {
      [Language.ENGLISH]: "Govt Schemes",
      [Language.HINDI]: "सरकारी योजनाएं",
      [Language.MARATHI]: "सरकारी योजना",
      [Language.TELUGU]: "ప్రభుత్వ పథకాలు",
      [Language.TAMIL]: "அரசு திட்டங்கள்",
      [Language.KANNADA]: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
      [Language.MALAYALAM]: "സർക്കാർ പദ്ധതികൾ"
    },
    children: [
      {
        id: "scheme_pmkisan",
        label: {
            [Language.ENGLISH]: "PM-KISAN",
            [Language.HINDI]: "पीएम-किसान",
            [Language.MARATHI]: "पीएम-किसान",
            [Language.TELUGU]: "పిఎం-కిసాన్",
            [Language.TAMIL]: "பிஎம்-கிசான்",
            [Language.KANNADA]: "ಪಿಎಂ-ಕಿಸಾನ್",
            [Language.MALAYALAM]: "പിഎം-കിസാൻ"
        },
        children: [
            {
                id: "q_pmkisan_benefit",
                label: {
                    [Language.ENGLISH]: "What is the benefit?",
                    [Language.HINDI]: "लाभ क्या है?",
                    [Language.MARATHI]: "फायदा काय आहे?",
                    [Language.TELUGU]: "ప్రయోజనం ఏమిటి?",
                    [Language.TAMIL]: "என்ன பயன்?",
                    [Language.KANNADA]: "ಏನು ಪ್ರಯೋಜನ?",
                    [Language.MALAYALAM]: "എന്താണ് ഗുണം?"
                },
                answer: {
                    text: {
                        [Language.ENGLISH]: "Rs. 6000 per year in 3 installments of Rs. 2000 each directly to bank account.",
                        [Language.HINDI]: "प्रति वर्ष 6000 रुपये 2000 रुपये की 3 किस्तों में सीधे बैंक खाते में।",
                        [Language.MARATHI]: "दरवर्षी ६००० रुपये, प्रत्येकी २००० रुपयांच्या ३ हप्त्यांमध्ये थेट बँक खात्यात.",
                        [Language.TELUGU]: "నేరుగా బ్యాంక్ ఖాతాకు రూ. 2000 చొప్పున 3 వాయిదాలలో సంవత్సరానికి రూ. 6000.",
                        [Language.TAMIL]: "வருடத்திற்கு ரூ. 6000, தலா ரூ. 2000 வீதம் 3 தவணைகளில் நேரடியாக வங்கிக் கணக்கில்.",
                        [Language.KANNADA]: "ವರ್ಷಕ್ಕೆ ರೂ. 6000, ತಲಾ ರೂ. 2000 ರ 3 ಕಂತುಗಳಲ್ಲಿ ನೇರವಾಗಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ.",
                        [Language.MALAYALAM]: "പ്രതിവർഷം 6000 രൂപ, 2000 രൂപ വീതം 3 ഗഡുക്കളായി നേരിട്ട് ബാങ്ക് അക്കൗണ്ടിലേക്ക്."
                    }
                }
            }
        ]
      },
      {
          id: "scheme_kcc",
          label: {
              [Language.ENGLISH]: "Kisan Credit Card (KCC)",
              [Language.HINDI]: "किसान क्रेडिट कार्ड (KCC)",
              [Language.MARATHI]: "किसान क्रेडिट कार्ड (KCC)",
              [Language.TELUGU]: "కిసాన్ క్రెడిట్ కార్డ్ (KCC)",
              [Language.TAMIL]: "கிசான் கிரெடிட் கார்டு (KCC)",
              [Language.KANNADA]: "ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ (KCC)",
              [Language.MALAYALAM]: "കിസാൻ ക്രെഡിറ്റ് കാർഡ് (KCC)"
          },
          children: [
              {
                  id: "q_kcc_eligibility",
                  label: {
                      [Language.ENGLISH]: "Who can apply?",
                      [Language.HINDI]: "कौन आवेदन कर सकता है?",
                      [Language.MARATHI]: "कोण अर्ज करू शकते?",
                      [Language.TELUGU]: "ఎవరు దరఖాస్తు చేసుకోవచ్చు?",
                      [Language.TAMIL]: "யார் விண்ணப்பிக்கலாம்?",
                      [Language.KANNADA]: "ಯಾರು ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು?",
                      [Language.MALAYALAM]: "ആർക്കൊക്കെ അപേക്ഷിക്കാം?"
                  },
                  answer: {
                      text: {
                          [Language.ENGLISH]: "All farmers, tenant farmers, oral lessees, and sharecroppers are eligible.",
                          [Language.HINDI]: "सभी किसान, बटाईदार और मौखिक पट्टेदार पात्र हैं।",
                          [Language.MARATHI]: "सर्व शेतकरी, कुळ, आणि वाटेकरी पात्र आहेत.",
                          [Language.TELUGU]: "రైతులందరూ, కౌలు రైతులు అర్హులు.",
                          [Language.TAMIL]: "அனைத்து விவசாயிகள், குத்தகை விவசாயிகள் தகுதியுடையவர்கள்.",
                          [Language.KANNADA]: "ಎಲ್ಲಾ ರೈತರು, ಗೇಣಿದಾರರು ಅರ್ಹರು.",
                          [Language.MALAYALAM]: "എല്ലാ കർഷകർക്കും പാട്ടക്കൃഷിക്കാർക്കും അർഹതയുണ്ട്."
                      }
                  }
              }
          ]
      }
    ]
  }
];
