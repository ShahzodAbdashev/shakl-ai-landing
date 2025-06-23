import React from 'react';
import { Dumbbell, Heart, Zap, Trophy, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 p-4 rounded-xl shadow-xl hover:scale-110 transition-transform duration-300">
                <Dumbbell className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  FitAI
                </span>
                <div className="flex items-center space-x-1">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-400">AI Fitness</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed font-medium text-lg">
              Your AI-powered fitness platform for finding quality gyms, creating personalized diet plans, and generating effective workout routines that will transform your life.
            </p>
            
            <div className="flex items-center space-x-3 text-gray-300 mb-6">
              <span className="font-semibold">Made with</span>
              <Heart className="h-5 w-5 text-red-500 fill-current" />
              <span className="font-semibold">for fitness enthusiasts</span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Trophy, text: "10K+ Transformations" },
                { icon: Star, text: "4.9/5 Rating" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-emerald-500/30">
                  <stat.icon className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-gray-300">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium text-lg hover:scale-105 transform inline-block">
                  Features
                </a>
              </li>
              <li>
                <a href="#examples" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium text-lg hover:scale-105 transform inline-block">
                  Examples
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium text-lg hover:scale-105 transform inline-block">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium text-lg hover:scale-105 transform inline-block">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium text-lg hover:scale-105 transform inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium text-lg hover:scale-105 transform inline-block">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gradient-to-r from-emerald-500/30 to-blue-500/30 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="h-5 w-5 text-yellow-400" />
            <p className="text-gray-300 font-semibold text-lg">
              © 2025 FitAI. All rights reserved. 
            </p>
            <Zap className="h-5 w-5 text-yellow-400" />
          </div>
          <p className="text-emerald-400 font-bold text-xl">
            Empowering your fitness journey with AI technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;