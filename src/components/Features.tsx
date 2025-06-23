import React from 'react';
import { MapPin, Utensils, Dumbbell, Clock, Target, Users, Zap, Trophy, Star } from 'lucide-react';
import { useLanguage } from '../App';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: MapPin,
      title: t('findPerfectGyms'),
      description: t('gymDescription'),
      details: [
        t('lightningFast'),
        t('budgetFriendly'),
        t('realReviews'),
        t('equipmentComparison')
      ],
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-blue-600',
      bgColor: 'bg-blue-50',
      buttonText: t('findMyGym')
    },
    {
      icon: Utensils,
      title: t('personalizedDietPlans'),
      description: t('dietDescription'),
      details: [
        t('customMealPlans'),
        t('smartGroceryLists'),
        t('localFoodAvailability'),
        t('perfectNutritionalBalance')
      ],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-blue-600',
      bgColor: 'bg-blue-50',
      buttonText: t('getMyDietPlan')
    },
    {
      icon: Dumbbell,
      title: t('smartWorkoutGenerator'),
      description: t('workoutDescription'),
      details: [
        t('timeOptimized'),
        t('homeOrGymOptions'),
        t('experienceLevelAdaptation'),
        t('progressiveDifficulty')
      ],
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-blue-600',
      bgColor: 'bg-blue-50',
      buttonText: t('buildMyWorkout')
    },
  ];

  const stats = [
    { icon: Users, value: '10K+', label: t('transformations'), color: 'bg-blue-600' },
    { icon: MapPin, value: '500+', label: t('partnerGyms'), color: 'bg-blue-600' },
    { icon: Target, value: '95%', label: t('successRate'), color: 'bg-blue-600' },
    { icon: Clock, value: '24/7', label: t('aiSupport'), color: 'bg-blue-600' },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-300/20 rounded-full blur-xl animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            <span>{t('unleashYourPotential')}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t('everythingYouNeed')}{' '}
            <span className="text-blue-600">
              {t('succeed')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-normal">
            {t('aiPlatformProvides')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className={`inline-flex p-4 rounded-lg ${stat.color} mb-4 group-hover:scale-105 transition-all duration-300 shadow-sm`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-normal text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
            >
              {/* Image */}
              <div className="flex-1 relative group">
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Floating Stats */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-sm">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-medium text-gray-900 text-sm">4.9/5</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Icon */}
                <div className={`absolute -top-6 -left-6 p-4 rounded-lg ${feature.color} shadow-md group-hover:scale-105 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Feature Details */}
                <div className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3 group/item">
                      <div className={`w-2 h-2 rounded-full ${feature.color} group-hover/item:scale-125 transition-transform duration-300`} />
                      <span className="text-gray-700 font-normal text-base group-hover/item:text-gray-900 transition-colors duration-300">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`inline-flex items-center px-6 py-3 rounded-lg ${feature.color} text-white font-medium text-base hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 shadow-sm`}>
                  {feature.buttonText}
                  <Zap className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium mb-6">
              <Trophy className="h-4 w-4" />
              <span>{t('transformationProcess')}</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('howOurAI')}
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
              {t('simpleSmart')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: t('tellUsYourGoals'),
                description: t('goalsDescription'),
                icon: Users,
                color: 'bg-blue-600',
              },
              {
                step: '02',
                title: t('aiAnalyzes'),
                description: t('analyzesDescription'),
                icon: Target,
                color: 'bg-blue-600',
              },
              {
                step: '03',
                title: t('getYourPlan'),
                description: t('planDescription'),
                icon: Clock,
                color: 'bg-blue-600',
              },
            ].map((step, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto ${step.color} rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-sm`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed font-normal text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;