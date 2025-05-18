
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ConnectSection = () => {
  return (
    <section id="connect" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forlivium-red/20 to-transparent"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cherry-blossom absolute top-40 left-1/3 opacity-10 float" 
          style={{ animationDelay: '0.5s' }}></div>
        <div className="cherry-blossom absolute bottom-20 right-1/3 opacity-10 float" 
          style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-forlivium-black">Connect With </span>
              <span className="text-forlivium-red">Forlivium</span>
            </h2>
            <p className="text-lg text-gray-700">
              Subscribe to our newsletter to stay updated with the latest news and events from our community.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="border-forlivium-red/20 focus:border-forlivium-red focus:ring-forlivium-red/20"
              />
              <Button className="bg-forlivium-red hover:bg-forlivium-red/90 text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 text-center">
              By subscribing, you agree to receive updates from Forlivium. You can unsubscribe at any time.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-forlivium-black">Get Involved</h3>
              <p className="text-gray-700">
                Forlivium is a community-driven project. We welcome contributors of all backgrounds and skill levels.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 mr-2 mt-1 bg-forlivium-red rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Join our development discussions</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 mr-2 mt-1 bg-forlivium-red rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Participate in community governance</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 mr-2 mt-1 bg-forlivium-red rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700">Attend our virtual and in-person events</span>
                </li>
              </ul>
              <Button variant="outline" className="border-forlivium-red text-forlivium-red hover:bg-forlivium-red/5">
                Learn More
              </Button>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-forlivium-black">Community Resources</h3>
              <p className="text-gray-700">
                Explore our collection of resources to better understand Web3 and our community.
              </p>
              <div className="space-y-4">
                <a href="#" className="block p-4 rounded-lg border border-gray-200 hover:border-forlivium-red/20 hover:bg-forlivium-red/5 transition-colors">
                  <h4 className="font-bold text-forlivium-black">Documentation</h4>
                  <p className="text-sm text-gray-600">Technical guides and resources</p>
                </a>
                <a href="#" className="block p-4 rounded-lg border border-gray-200 hover:border-forlivium-red/20 hover:bg-forlivium-red/5 transition-colors">
                  <h4 className="font-bold text-forlivium-black">FAQ</h4>
                  <p className="text-sm text-gray-600">Common questions answered</p>
                </a>
                <a href="#" className="block p-4 rounded-lg border border-gray-200 hover:border-forlivium-red/20 hover:bg-forlivium-red/5 transition-colors">
                  <h4 className="font-bold text-forlivium-black">Blog</h4>
                  <p className="text-sm text-gray-600">Latest news and articles</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
