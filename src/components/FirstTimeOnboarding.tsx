import React, { useState, useEffect, useRef } from 'react';
import { UserProfile, FarmDetails, CropHistory, Language } from '../types';
import { TRANSLATIONS, VOICE_PROMPTS, VOICE_KEYWORDS } from '../constants';
import { MapPin, Sprout, Tractor, Plus, Trash2, Check, Loader2, Navigation, ChevronDown, Ruler, Layers, X, Edit3, Calendar, FlaskConical, Scale, Droplets, Minus, CloudRain, Waves, Disc, Circle, CloudDrizzle, Info, Snowflake, Sun, ThermometerSun, ArrowLeft, Globe, Mic, MicOff, Volume2 } from 'lucide-react';
import { authService } from '../services/authService';

interface FirstTimeOnboardingProps {
  user: UserProfile;
  onComplete: (user: UserProfile) => void;
  onClose?: () => void;
  onBack?: () => void;
  onLanguageChange?: (lang: Language) => void;
}

// --- Custom Select Component ---
interface SelectOption {
  value: string;
  label: string;
  icon?: React.ElementType;
  iconColor?: string; // Add color support
  iconBg?: string;    // Add background color support
}

interface CustomSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  icon?: React.ElementType;
  className?: string;
  placeholder?: string;
  onFocus?: () => void; // Add focus handler
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, value, onChange, icon: Icon, className, placeholder, onFocus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(o => o.value === value);
  const SelectedIcon = selectedOption?.icon;

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen && onFocus) onFocus();
  };

  return (
    <div className={`relative ${className} ${isOpen