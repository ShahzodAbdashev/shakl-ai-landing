import React from 'react';
import { MessageCircle, Sparkles, Zap, Trophy, Target } from 'lucide-react';
import { useLanguage } from '../App';

interface HeroProps {
  onStartChat: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartChat }) => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-slate-600/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-slate-500/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-slate-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Professional Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg text-sm font-medium mb-8 shadow-sm">
            <Zap className="h-4 w-4" />
            <span>{t('aiPoweredFitness')}</span>
            <Sparkles className="h-4 w-4" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            {t('transformYourFitness')}
            <br />
            <span className="text-blue-400">
              {t('fitnessJourney')}
            </span>
            <br />
            {t('withAI')}
          </h1>

          {/* Professional Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto font-normal">
            {t('aiFitnessAssistant')}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: Trophy, text: "10K+ " + t('transformations'), color: "bg-slate-700" },
              { icon: Target, text: "95% " + t('successRate'), color: "bg-slate-700" },
              { icon: Zap, text: t('instantResults'), color: "bg-slate-700" }
            ].map((stat, index) => (
              <div key={index} className={`flex items-center space-x-2 ${stat.color} px-4 py-2 rounded-lg text-white font-medium shadow-sm hover:bg-slate-600 transition-colors duration-300`}>
                <stat.icon className="h-4 w-4" />
                <span className="text-sm">{stat.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <button
              onClick={onStartChat}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5" />
                <span>{t('startTransformation')}</span>
                <Zap className="h-5 w-5" />
              </div>
            </button>
          </div>

          {/* Features Text */}
          <p className="text-gray-400 text-base font-normal mb-8">
            {t('noDownloads')}
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: "🏋️",
                title: t('findGyms'),
                subtitle: t('nearYou'),
                color: "bg-slate-700"
              },
              {
                icon: "🥗",
                title: t('getDietPlan'),
                subtitle: t('personalizedNutrition'),
                color: "bg-slate-700"
              },
              {
                icon: "💪",
                title: t('workoutPlan'),
                subtitle: t('homeOrGym'),
                color: "bg-slate-700"
              }
            ].map((card, index) => (
              <div key={index} className={`${card.color} p-6 rounded-lg text-white shadow-sm hover:bg-slate-600 transition-colors duration-300 cursor-pointer`}>
                <div className="text-2xl mb-3">{card.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-300 font-normal text-sm">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;