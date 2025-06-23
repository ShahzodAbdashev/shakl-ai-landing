import React from 'react';
import { MessageSquare, Copy, MapPin, Utensils, Dumbbell, Zap, Star, Trophy } from 'lucide-react';
import { useLanguage } from '../App';

const ExamplePrompts: React.FC = () => {
  const { t } = useLanguage();

  const prompts = [
    {
      category: t('gymHunting'),
      icon: MapPin,
      text: t('showMeQuality'),
      color: 'bg-blue-600',
      bgColor: 'bg-blue-50',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
      emoji: '🏋️',
    },
    {
      category: t('dietPlanning'),
      icon: Utensils,
      text: t('createMealPlan'),
      color: 'bg-blue-600',
      bgColor: 'bg-blue-50',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      emoji: '🥗',
    },
    {
      category: t('workoutPlans'),
      icon: Dumbbell,
      text: t('have30Minutes'),
      color: 'bg-blue-600',
      bgColor: 'bg-blue-50',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400',
      emoji: '💪',
    },
  ];

  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <section id="examples" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gray-700/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-600/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gray-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            <span>{t('realUserExamples')}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            {t('seeTheAI')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-normal">
            {t('getInspired')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {prompts.map((prompt, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={prompt.image}
                  alt={prompt.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded ${prompt.color} text-white text-xs font-medium shadow-sm`}>
                  {prompt.category}
                </div>

                {/* Emoji */}
                <div className="absolute top-3 right-3 text-2xl">
                  {prompt.emoji}
                </div>

                {/* Icon */}
                <div className={`absolute bottom-3 right-3 p-3 rounded ${prompt.color} shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                  <prompt.icon className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {prompt.category}
                  </h3>
                  <button
                    onClick={() => handleCopyPrompt(prompt.text)}
                    className="opacity-0 group-hover:opacity-100 p-2 rounded hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    title="Copy this prompt"
                  >
                    <Copy className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4 font-normal text-sm">
                  "{prompt.text}"
                </p>

                <button className={`w-full py-3 px-4 rounded ${prompt.color} text-white font-medium text-sm hover:shadow-md transition-all duration-300 shadow-sm`}>
                  {t('tryThisPrompt')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Conversation Examples */}
        <div className="bg-white rounded-lg p-8 shadow-md mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium mb-4">
              <Trophy className="h-4 w-4" />
              <span>{t('realConversations')}</span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {t('actualAI')}
            </h3>
            <p className="text-lg text-gray-600 font-normal">
              {t('seeHowAI')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                user: t('beginner25'),
                ai: t('perfectComprehensive')
              },
              {
                user: t('findGymsDowntown'),
                ai: t('hereAre5')
              },
              {
                user: t('workNightShifts'),
                ai: t('noProblemFlexible')
              },
              {
                user: t('vegetarianDiet'),
                ai: t('highProteinVegetarian')
              }
            ].map((example, index) => (
              <div key={index} className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-medium text-xs">U</span>
                    </div>
                    <p className="text-blue-800 font-normal text-sm">"{example.user}"</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-gray-800 font-normal text-sm">{example.ai}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-blue-600 rounded-lg p-8 text-white shadow-md relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-6 left-6 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 rounded-full blur-xl animate-bounce"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <h3 className="text-2xl lg:text-3xl font-bold">
                  {t('startYourTransformation')}
                </h3>
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
              </div>
              
              <p className="text-lg text-white/95 mb-6 max-w-3xl mx-auto leading-relaxed font-normal">
                {t('joinFitnessRevolution')}
              </p>
              
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md shadow-sm">
                {t('startMyTransformation')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplePrompts;