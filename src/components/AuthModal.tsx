import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, Chrome } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Form submitted:', { mode, formData });
    onClose();
  };

  const handleGoogleSignIn = () => {
    // Handle Google Sign-in logic here
    console.log('Google Sign-in clicked');
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md mx-4 animate-in zoom-in-95 duration-300 shadow-2xl border-4 border-gradient-to-r from-emerald-500 to-blue-500">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {mode === 'login' ? '🔥 WELCOME BACK!' : '💪 JOIN THE REVOLUTION!'}
            </h2>
            <p className="text-gray-600 font-medium mt-1">
              {mode === 'login' ? 'Ready to crush your goals?' : 'Start your transformation today!'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 group"
          >
            <X className="h-6 w-6 text-gray-500 group-hover:text-gray-700" />
          </button>
        </div>

        {/* Google Sign-in Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center space-x-3 bg-white border-2 border-gray-300 hover:border-emerald-500 text-gray-700 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg mb-6 group"
        >
          <Chrome className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
          <span>Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500 font-medium">or continue with email</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {mode === 'register' && (
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                💪 Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 font-medium text-lg"
                  placeholder="Enter your champion name"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
              📧 Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-500" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 font-medium text-lg"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">
              🔒 Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-14 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 font-medium text-lg"
                placeholder="Create a strong password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded hover:bg-gray-100 transition-colors duration-200"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 text-white py-4 rounded-xl font-black text-xl hover:from-emerald-600 hover:via-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-lg"
          >
            {mode === 'login' ? '🚀 LET\'S GO!' : '💪 START TRANSFORMATION!'}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 font-medium">
            {mode === 'login' ? "New to the fitness revolution? " : 'Already crushing your goals? '}
            <button
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              className="text-emerald-600 hover:text-emerald-700 font-bold transition-colors duration-200 underline"
            >
              {mode === 'login' ? 'Join now!' : 'Sign in here!'}
            </button>
          </p>
        </div>

        {/* Motivational Footer */}
        <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl text-center">
          <p className="text-sm font-bold text-gray-700">
            🏆 Join 10,000+ people already transforming their lives!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;