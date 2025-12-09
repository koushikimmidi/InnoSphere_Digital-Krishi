
import { CropPrice } from '../types';

const API_KEY = "579b464db66ec23bdd000001097dd12c3b8641a04052d77f6a69712b";
const RESOURCE_ID = "9ef84268-d588-465a-a308-a864a43d0070";
const BASE_URL = "https://api.data.gov.in/resource/" + RESOURCE_ID;

export interface MandiRecord {
  state: string;
  district: string;
  market: string;
  commodity: string;
  variety: string;
  grade: string;
  arrival_date: string;
  min_price: string;
  max_price: string;
  modal_price: string;
}

// Helper to generate realistic mock data if API fails
const getMockDataForState = (state?: string): CropPrice[] => {
  // Comprehensive State-wise Data
  const stateSpecific: Record<string, any[]> = {
      "Punjab": [
          { crop: "Wheat", price: 2275, minPrice: 2200, maxPrice: 2350, trend: "stable", market: "Khanna Mandi" },
          { crop: "Paddy (Basmati)", price: 3500, minPrice: 3200, maxPrice: 3800, trend: "up", market: "Rajpura Mandi" },
          { crop: "Maize", price: 1850, minPrice: 1700, maxPrice: 1950, trend: "down", market: "Ludhiana" }
      ],
      "Haryana": [
          { crop: "Wheat", price: 2280, minPrice: 2250, maxPrice: 2300, trend: "stable", market: "Karnal" },
          { crop: "Mustard", price: 5400, minPrice: 5200, maxPrice: 5600, trend: "up", market: "Hisar" },
          { crop: "Cotton", price: 6800, minPrice: 6500, maxPrice: 7000, trend: "down", market: "Sirsa" }
      ],
      "Kerala": [
          { crop: "Coconut", price: 3200, minPrice: 3000, maxPrice: 3400, trend: "stable", market: "Kochi" },
          { crop: "Rubber", price: 17000, minPrice: 16500, maxPrice: 17500, trend: "up", market: "Kottayam" },
          { crop: "Black Pepper", price: 48000, minPrice: 47000, maxPrice: 49000, trend: "up", market: "Idukki" },
          { crop: "Banana (Nendran)", price: 4500, minPrice: 4200, maxPrice: 4800, trend: "down", market: "Thrissur" }
      ],
      "Maharashtra": [
          { crop: "Onion", price: 1200, minPrice: 1000, maxPrice: 1500, trend: "up", market: "Lasalgaon" },
          { crop: "Cotton", price: 7200, minPrice: 7000, maxPrice: 7500, trend: "down", market: "Wardha" },
          { crop: "Soybean", price: 4800, minPrice: 4700, maxPrice: 4950, trend: "up", market: "Amravati" },
          { crop: "Tur (Arhar)", price: 9500, minPrice: 9000, maxPrice: 10000, trend: "up", market: "Latur" }
      ],
      "Andhra Pradesh": [
           { crop: "Chilli (Red)", price: 14500, minPrice: 14000, maxPrice: 15200, trend: "up", market: "Guntur" },
           { crop: "Rice", price: 2900, minPrice: 2800, maxPrice: 3000, trend: "stable", market: "Vijayawada" },
           { crop: "Groundnut", price: 5800, minPrice: 5500, maxPrice: 6000, trend: "stable", market: "Anantapur" }
      ],
      "Telangana": [
          { crop: "Turmeric", price: 6800, minPrice: 6500, maxPrice: 7200, trend: "down", market: "Nizamabad" },
          { crop: "Cotton", price: 7100, minPrice: 6900, maxPrice: 7300, trend: "stable", market: "Warangal" },
          { crop: "Maize", price: 1900, minPrice: 1800, maxPrice: 2000, trend: "up", market: "Karimnagar" }
      ],
      "Karnataka": [
          { crop: "Coffee", price: 18000, minPrice: 17500, maxPrice: 18500, trend: "up", market: "Chikmagalur" },
          { crop: "Arecanut", price: 45000, minPrice: 44000, maxPrice: 46000, trend: "stable", market: "Shimoga" },
          { crop: "Ragi", price: 3200, minPrice: 3000, maxPrice: 3400, trend: "stable", market: "Mandya" },
          { crop: "Tomato", price: 1500, minPrice: 1000, maxPrice: 2000, trend: "down", market: "Kolar" }
      ],
      "Uttar Pradesh": [
          { crop: "Sugarcane", price: 350, minPrice: 340, maxPrice: 360, trend: "stable", market: "Meerut" },
          { crop: "Potato", price: 1200, minPrice: 1100, maxPrice: 1300, trend: "down", market: "Agra" },
          { crop: "Wheat", price: 2250, minPrice: 2200, maxPrice: 2300, trend: "stable", market: "Hardoi" }
      ],
      "Madhya Pradesh": [
          { crop: "Soybean", price: 4900, minPrice: 4800, maxPrice: 5000, trend: "up", market: "Ujjain" },
          { crop: "Wheat (Sharbati)", price: 3200, minPrice: 3000, maxPrice: 3500, trend: "up", market: "Sehore" },
          { crop: "Garlic", price: 8500, minPrice: 8000, maxPrice: 9000, trend: "up", market: "Mandsaur" },
          { crop: "Chana", price: 5400, minPrice: 5200, maxPrice: 5600, trend: "down", market: "Indore" }
      ],
      "Gujarat": [
          { crop: "Groundnut", price: 6200, minPrice: 6000, maxPrice: 6400, trend: "up", market: "Rajkot" },
          { crop: "Cotton", price: 7300, minPrice: 7100, maxPrice: 7500, trend: "stable", market: "Surendranagar" },
          { crop: "Cumin (Jeera)", price: 28000, minPrice: 27000, maxPrice: 29000, trend: "down", market: "Unjha" }
      ],
      "Rajasthan": [
          { crop: "Mustard", price: 5300, minPrice: 5100, maxPrice: 5500, trend: "stable", market: "Bharatpur" },
          { crop: "Bajra", price: 2100, minPrice: 2000, maxPrice: 2200, trend: "up", market: "Jaipur" },
          { crop: "Guar Seed", price: 5800, minPrice: 5600, maxPrice: 6000, trend: "down", market: "Jodhpur" }
      ],
      "Bihar": [
          { crop: "Maize", price: 2000, minPrice: 1900, maxPrice: 2100, trend: "up", market: "Khagaria" },
          { crop: "Rice", price: 2700, minPrice: 2600, maxPrice: 2800, trend: "stable", market: "Patna" },
          { crop: "Litchi", price: 6000, minPrice: 5500, maxPrice: 6500, trend: "stable", market: "Muzaffarpur" }
      ],
      "West Bengal": [
          { crop: "Rice", price: 2850, minPrice: 2750, maxPrice: 2950, trend: "stable", market: "Bardhaman" },
          { crop: "Jute", price: 5200, minPrice: 5000, maxPrice: 5400, trend: "up", market: "Hooghly" },
          { crop: "Potato", price: 1100, minPrice: 1000, maxPrice: 1200, trend: "down", market: "Medinipur" }
      ],
      "Odisha": [
          { crop: "Rice", price: 2750, minPrice: 2650, maxPrice: 2850, trend: "stable", market: "Cuttack" },
          { crop: "Brinjal", price: 1800, minPrice: 1600, maxPrice: 2000, trend: "up", market: "Bhubaneswar" }
      ],
      "Tamil Nadu": [
          { crop: "Rice (Ponni)", price: 3200, minPrice: 3000, maxPrice: 3400, trend: "up", market: "Thanjavur" },
          { crop: "Banana", price: 2500, minPrice: 2200, maxPrice: 2800, trend: "stable", market: "Trichy" },
          { crop: "Turmeric", price: 7000, minPrice: 6800, maxPrice: 7200, trend: "down", market: "Erode" }
      ]
  };

  const normalizedState = state ? state.trim().toLowerCase() : "";

  // Exact or partial match lookup to handle variations like "Tamilnadu" vs "Tamil Nadu"
  if (normalizedState && normalizedState !== "") {
      let key = Object.keys(stateSpecific).find(k => k.toLowerCase() === normalizedState);
      
      // If exact match fails, try matching without spaces (e.g. Tamilnadu vs Tamil Nadu)
      if (!key) {
          key = Object.keys(stateSpecific).find(k => k.toLowerCase().replace(/\s/g, '') === normalizedState.replace(/\s/g, ''));
      }

      if (key) {
          return stateSpecific[key].map((c: any) => ({ ...c, trend: c.trend || (Math.random() > 0.5 ? 'up' : 'down') }));
      }
  }

  // If "All India" (no state) or unknown state, return a diverse mix (Default)
  const mix = [
      ...stateSpecific["Maharashtra"].slice(0, 1),
      ...stateSpecific["Punjab"].slice(0, 1),
      ...stateSpecific["Kerala"].slice(0, 1),
      ...stateSpecific["Andhra Pradesh"].slice(0, 1),
      ...stateSpecific["Uttar Pradesh"].slice(0, 1),
      ...stateSpecific["Gujarat"].slice(0, 1),
      ...stateSpecific["West Bengal"].slice(0, 1),
      ...stateSpecific["Karnataka"].slice(0, 1),
  ];
  return mix.map((c: any) => ({ ...c, trend: c.trend || (Math.random() > 0.5 ? 'up' : 'down') }));
};

export const fetchMandiPrices = async (state?: string, district?: string): Promise<CropPrice[]> => {
  try {
    let url = `${BASE_URL}?api-key=${API_KEY}&format=json&limit=100`;
    const cleanState = state ? state.trim() : "";
    
    // Only append filter if state is provided and not empty
    if (cleanState !== "") {
      url += `&filters[state]=${encodeURIComponent(cleanState)}`;
    }
    
    if (district) {
       url += `&filters[district]=${encodeURIComponent(district)}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (data && data.records && data.records.length > 0) {
      let records: MandiRecord[] = data.records;

      // SAFETY NET: Client-side filtering
      // Sometimes the API might ignore the filter or return broad results.
      if (cleanState !== "") {
          const lowerState = cleanState.toLowerCase();
          const filtered = records.filter(r => r.state.toLowerCase().includes(lowerState));
          
          if (filtered.length > 0) {
              records = filtered;
          } else {
              // API returned data, but none matched our specific state filter. 
              console.warn(`No API records matched state '${cleanState}'. Switching to state-specific fallback.`);
              return getMockDataForState(cleanState);
          }
      }

      return records.map((record: MandiRecord) => ({
        crop: `${record.commodity} (${record.variety})`,
        price: parseFloat(record.modal_price) || 0,
        minPrice: parseFloat(record.min_price) || 0,
        maxPrice: parseFloat(record.max_price) || 0,
        trend: Math.random() > 0.5 ? 'up' : 'down',
        market: `${record.market}, ${record.state}`
      }));
    }
    
    // Fallback if API returns completely empty
    console.warn("Mandi API returned empty or failed. Using fallback data.");
    return getMockDataForState(cleanState);

  } catch (error) {
    console.error("Failed to fetch mandi prices", error);
    return getMockDataForState(state);
  }
};

// Helper to extract state from address string
export const detectStateFromAddress = (address: string): string | undefined => {
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Delhi", "Chandigarh"
  ];

  for (const state of indianStates) {
    if (address.toLowerCase().includes(state.toLowerCase())) {
      return state;
    }
  }
  return undefined;
};
