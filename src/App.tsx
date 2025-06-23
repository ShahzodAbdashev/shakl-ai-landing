import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ExamplePrompts from './components/ExamplePrompts';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleLoginClick = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  const handleStartChat = () => {
    // For now, we'll show the register modal
    // In a real app, this would start the chat interface
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
      />
      
      <main>
        <Hero onStartChat={handleStartChat} />
        <Features />
        <ExamplePrompts />
      </main>

      <Footer />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={handleCloseModal}
        initialMode={authMode}
      />
    </div>
  );
}

export default App;