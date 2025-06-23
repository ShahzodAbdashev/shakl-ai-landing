import React from 'react';
import { MessageCircle, Sparkles, Zap, Trophy, Target } from 'lucide-react';

interface HeroProps {
  onStartChat: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartChat }) => {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Professional Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <Zap className="h-5 w-5" />
            <span>AI-POWERED FITNESS PLATFORM</span>
            <Sparkles className="h-5 w-5" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            Transform Your
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Fitness Journey
            </span>
            <br />
            with AI
          </h1>

          {/* Professional Subtitle */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
            Your AI fitness assistant finds perfect gyms, creates personalized diets, and builds effective workout plans in seconds.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { icon: Trophy, text: "10K+ Transformations", color: "from-yellow-400 to-orange-500" },
              { icon: Target, text: "95% Success Rate", color: "from-emerald-400 to-blue-500" },
              { icon: Zap, text: "Instant Results", color: "from-purple-400 to-pink-500" }
            ].map((stat, index) => (
              <div key={index} className={`flex items-center space-x-2 bg-gradient-to-r ${stat.color} px-4 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300`}>
                <stat.icon className="h-5 w-5" />
                <span className="text-sm">{stat.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <button
              onClick={onStartChat}
              className="group relative bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-12 py-6 rounded-xl font-bold text-xl hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg"
            >
              <div className="relative flex items-center space-x-4">
                <MessageCircle className="h-6 w-6" />
                <span>Start Your Transformation</span>
                <Zap className="h-6 w-6" />
              </div>
            </button>
          </div>

          {/* Features Text */}
          <p className="text-white/80 text-lg font-medium mb-8">
            No downloads • No confusion • Just results
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: "🏋️",
                title: "Find Gyms",
                subtitle: "Near you, under budget",
                color: "from-emerald-500 to-teal-600"
              },
              {
                icon: "🥗",
                title: "Get Diet Plan",
                subtitle: "Personalized nutrition",
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: "💪",
                title: "Workout Plan",
                subtitle: "Home or gym routines",
                color: "from-orange-500 to-red-600"
              }
            ].map((card, index) => (
              <div key={index} className={`bg-gradient-to-br ${card.color} p-6 rounded-xl text-white shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer`}>
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-xl mb-2">{card.title}</h3>
                <p className="text-white/90 font-medium">{card.subtitle}</p>
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