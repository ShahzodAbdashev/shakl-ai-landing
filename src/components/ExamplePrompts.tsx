import React from 'react';
import { MessageSquare, Copy, MapPin, Utensils, Dumbbell, Zap, Star, Trophy } from 'lucide-react';

const ExamplePrompts: React.FC = () => {
  const prompts = [
    {
      category: 'GYM HUNTING',
      icon: MapPin,
      text: 'Show me quality gyms near Angren under $50/month with Olympic weights and parking.',
      gradient: 'from-emerald-500 via-teal-500 to-green-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
      emoji: '🏋️',
    },
    {
      category: 'DIET PLANNING',
      icon: Utensils,
      text: 'Create a meal plan for 75kg person with $100/month budget for muscle building.',
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      emoji: '🥗',
    },
    {
      category: 'WORKOUT PLANS',
      icon: Dumbbell,
      text: 'I have 30 minutes daily, intermediate level, need effective home workouts for fat burning.',
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      bgGradient: 'from-orange-50 to-red-50',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400',
      emoji: '💪',
    },
  ];

  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <section id="examples" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Zap className="h-5 w-5" />
            <span>Real User Examples</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            See the{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Magic
            </span>
            {' '}in Action
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Get inspired by these effective prompts and see how our AI transforms lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {prompts.map((prompt, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={prompt.image}
                  alt={prompt.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${prompt.gradient} text-white text-sm font-semibold shadow-lg`}>
                  {prompt.category}
                </div>

                {/* Emoji */}
                <div className="absolute top-4 right-4 text-3xl">
                  {prompt.emoji}
                </div>

                {/* Icon */}
                <div className={`absolute bottom-4 right-4 p-4 rounded-xl bg-gradient-to-r ${prompt.gradient} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <prompt.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {prompt.category}
                  </h3>
                  <button
                    onClick={() => handleCopyPrompt(prompt.text)}
                    className="opacity-0 group-hover:opacity-100 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                    title="Copy this prompt"
                  >
                    <Copy className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 font-medium text-lg">
                  "{prompt.text}"
                </p>

                <button className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r ${prompt.gradient} text-white font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg`}>
                  Try This Prompt
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Conversation Examples */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 shadow-xl mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Trophy className="h-5 w-5" />
              <span>Real Conversations</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Actual{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                AI Conversations
              </span>
            </h3>
            <p className="text-xl text-gray-600 font-medium">
              See how our AI handles real user questions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                user: "I'm a beginner, 25 years old, want to lose 10kg in 3 months and get fit.",
                ai: "Perfect! I'll create a comprehensive plan with cardio workouts, strength training schedule, and a calorie-deficit meal plan that will help you achieve your goals."
              },
              {
                user: "Find gyms in downtown with swimming pools under $80/month.",
                ai: "Here are 5 quality gyms in your area with swimming pools, membership costs, amenities, and user reviews to help you make the best choice."
              },
              {
                user: "I work night shifts, need a flexible workout routine that fits my schedule.",
                ai: "No problem! I'll design a flexible schedule that works with your sleep pattern, including home workouts and 24/7 gym recommendations."
              },
              {
                user: "Vegetarian diet plan for muscle building, $120 budget.",
                ai: "Here's a high-protein vegetarian meal plan with shopping lists, prep tips, and supplement recommendations for effective muscle building."
              }
            ].map((example, index) => (
              <div key={index} className="space-y-4">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border-2 border-emerald-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-sm">U</span>
                    </div>
                    <p className="text-emerald-800 font-medium text-lg">"{example.user}"</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-blue-800 font-medium text-lg">{example.ai}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 rounded-2xl p-12 text-white shadow-xl relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400/20 rounded-full blur-xl animate-bounce"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Star className="h-8 w-8 text-yellow-400 fill-current" />
                <h3 className="text-3xl lg:text-4xl font-bold">
                  Start Your Transformation
                </h3>
                <Star className="h-8 w-8 text-yellow-400 fill-current" />
              </div>
              
              <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                Join the fitness revolution! Create an account to save your goals, track your progress, and get personalized recommendations that evolve with your transformation.
              </p>
              
              <button className="bg-white text-emerald-600 px-12 py-4 rounded-xl font-bold text-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg">
                Start My Transformation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplePrompts;