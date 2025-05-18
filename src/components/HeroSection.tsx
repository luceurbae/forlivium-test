
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cherry-blossom absolute top-1/4 left-1/4 opacity-20 float"></div>
        <div className="cherry-blossom absolute top-1/3 right-1/3 opacity-10 float" 
          style={{ animationDelay: '1s' }}></div>
        <div className="cherry-blossom absolute bottom-1/4 right-1/4 opacity-15 float"
          style={{ animationDelay: '2s' }}></div>
        
        {/* Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="wave-pattern text-forlivium-red/10 wave"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-forlivium-black">Welcome to</span>
              <span className="text-forlivium-red block mt-2">Forlivium</span>
            </h1>
            
            <p className="text-lg md:text-xl text-forlivium-black/80 max-w-lg">
              Join our thriving Web3 community with Japanese influence. 
              Connect with 1000+ blockchain enthusiasts and innovators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-forlivium-red hover:bg-forlivium-red/90 text-white">
                Join Discord
              </Button>
              <Button size="lg" variant="outline" className="border-forlivium-red text-forlivium-red hover:bg-forlivium-red/5">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative h-64 md:h-96">
            {/* Mount Fuji CSS Illustration */}
            <div className="mount-fuji absolute bottom-0 right-0 opacity-90"></div>
            
            {/* Web3 Icon */}
            <div className="web3-coin absolute top-10 right-20 spin-slow">
              フ
            </div>
            
            {/* Torii Gate */}
            <div className="torii-gate absolute bottom-0 left-10">
              <div className="top"></div>
              <div className="middle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
