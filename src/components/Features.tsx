import React from 'react';
import { MapPin, Utensils, Dumbbell, Clock, Target, Users, Zap, Trophy, Star } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Find Perfect Gyms',
      description: 'Our AI scans thousands of gyms to find the perfect match for your budget, location, and goals. No more wasting time on mediocre gyms.',
      details: [
        'Lightning-fast location-based search',
        'Budget-friendly filtering that saves you money',
        'Real user reviews from actual gym members',
        'Equipment & amenities comparison tool'
      ],
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-emerald-500 via-teal-500 to-green-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      buttonText: 'Find My Gym'
    },
    {
      icon: Utensils,
      title: 'Personalized Diet Plans',
      description: 'Get personalized nutrition plans that actually work! Based on your weight, budget, and goals - no more guessing what to eat.',
      details: [
        'Custom meal plans for your specific goals',
        'Smart grocery lists that fit your budget',
        'Local food availability consideration',
        'Perfect nutritional balance optimization'
      ],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      buttonText: 'Get My Diet Plan'
    },
    {
      icon: Dumbbell,
      title: 'Smart Workout Generator',
      description: 'Whether you have 20 minutes or 2 hours, at home or in the gym - our AI creates the perfect workout plan for maximum results.',
      details: [
        'Time-optimized routines that maximize gains',
        'Home or gym-based exercise options',
        'Experience level adaptation system',
        'Progressive difficulty scaling for growth'
      ],
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      bgGradient: 'from-orange-50 to-red-50',
      buttonText: 'Build My Workout'
    },
  ];

  const stats = [
    { icon: Users, value: '10K+', label: 'Transformations', color: 'from-emerald-500 to-teal-600' },
    { icon: MapPin, value: '500+', label: 'Partner Gyms', color: 'from-blue-500 to-indigo-600' },
    { icon: Target, value: '95%', label: 'Success Rate', color: 'from-orange-500 to-red-600' },
    { icon: Clock, value: '24/7', label: 'AI Support', color: 'from-purple-500 to-pink-600' },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-xl animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Zap className="h-5 w-5" />
            <span>Unleash Your Potential</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Our AI-powered platform provides personalized recommendations that will transform your body and life.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              {/* Image */}
              <div className="flex-1 relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="font-semibold text-gray-900">4.9/5</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Icon */}
                <div className={`absolute -top-8 -left-8 p-6 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
                    {feature.description}
                  </p>
                </div>

                {/* Feature Details */}
                <div className="space-y-4">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-4 group/item">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.gradient} group-hover/item:scale-125 transition-transform duration-300`} />
                      <span className="text-gray-700 font-medium text-lg group-hover/item:text-gray-900 transition-colors duration-300">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r ${feature.gradient} text-white font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg`}>
                  {feature.buttonText}
                  <Zap className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-32 pt-20 border-t-4 border-gradient-to-r from-emerald-500 to-blue-500">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Trophy className="h-5 w-5" />
              <span>Transformation Process</span>
            </div>
            
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How Our{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                AI Platform
              </span>
              {' '}Works
            </h3>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
              Simple, smart, and effective - get started in just 3 steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Tell Us Your Goals',
                description: 'Share your fitness dreams, experience level, time availability, and what motivates you.',
                icon: Users,
                color: 'from-emerald-500 to-teal-600',
              },
              {
                step: '02',
                title: 'AI Analyzes & Plans',
                description: 'Our intelligent AI processes your information and creates personalized recommendations.',
                icon: Target,
                color: 'from-blue-500 to-indigo-600',
              },
              {
                step: '03',
                title: 'Get Your Plan',
                description: 'Receive customized gym suggestions, diet plans, and workout routines instantly.',
                icon: Clock,
                color: 'from-orange-500 to-red-600',
              },
            ].map((step, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative mb-8">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed font-medium text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;