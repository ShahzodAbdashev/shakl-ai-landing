import React, { useState } from 'react';
import { Dumbbell, Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../App';

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { currentLanguage, setCurrentLanguage, t } = useLanguage();

  const languages = [
    { code: 'uz', name: 'O\'zbekcha', flag: '🇺🇿' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'kk', name: 'Қазақша', flag: '🇰🇿' },
  ];

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    setIsLanguageOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-semibold text-gray-900">
                FitAI
              </span>
              <div className="text-xs text-gray-500">
                {t('aiPoweredFitness')}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              {t('features')}
            </a>
            <a href="#examples" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              {t('examples')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              {t('about')}
            </a>
          </nav>

          {/* Desktop Auth Buttons and Language */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">
                  {languages.find(lang => lang.code === currentLanguage)?.flag}
                </span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[160px] z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 ${
                        currentLanguage === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-base">{language.flag}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onLoginClick}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              {t('login')}
            </button>
            <button
              onClick={onRegisterClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              {t('getStarted')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('features')}
              </a>
              <a
                href="#examples"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('examples')}
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </a>

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm font-medium text-gray-500 mb-3">Til / Language</div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                        currentLanguage === language.code 
                          ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-base">{language.flag}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    onLoginClick();
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                >
                  {t('login')}
                </button>
                <button
                  onClick={() => {
                    onRegisterClick();
                    setIsMenuOpen(false);
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
                >
                  {t('getStarted')}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;