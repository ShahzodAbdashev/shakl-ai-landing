import React from 'react';
import { Dumbbell, Heart, Zap, Trophy, Star } from 'lucide-react';
import { useLanguage } from '../App';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gray-700/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-600/20 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-3 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">
                  FitAI
                </span>
                <div className="flex items-center space-x-1">
                  <Zap className="h-3 w-3 text-yellow-400" />
                  <span className="text-xs font-medium text-gray-400">AI Fitness</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed font-normal text-sm">
              {t('aiPoweredFitnessPlatform')}
            </p>
            
            <div className="flex items-center space-x-2 text-gray-300 mb-4">
              <span className="font-medium text-sm">{t('madeWith')}</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span className="font-medium text-sm">{t('forFitnessEnthusiasts')}</span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Trophy, text: "10K+ " + t('transformations') },
                { icon: Star, text: "4.9/5 " + t('rating') }
              ].map((stat, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded border border-gray-700">
                  <stat.icon className="h-3 w-3 text-blue-400" />
                  <span className="text-xs font-medium text-gray-300">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-normal text-sm hover:scale-105 transform inline-block">
                  {t('features')}
                </a>
              </li>
              <li>
                <a href="#examples" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-normal text-sm hover:scale-105 transform inline-block">
                  {t('examples')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-normal text-sm hover:scale-105 transform inline-block">
                  {t('about')}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              {t('support')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-normal text-sm hover:scale-105 transform inline-block">
                  {t('helpCenter')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-normal text-sm hover:scale-105 transform inline-block">
                  {t('privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-normal text-sm hover:scale-105 transform inline-block">
                  {t('termsOfService')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Zap className="h-4 w-4 text-yellow-400" />
            <p className="text-gray-300 font-medium text-sm">
              © 2025 FitAI. {t('allRightsReserved')}
            </p>
            <Zap className="h-4 w-4 text-yellow-400" />
          </div>
          <p className="text-blue-400 font-semibold text-base">
            {t('empoweringFitness')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;