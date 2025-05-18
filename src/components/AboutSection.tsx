
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forlivium-red/20 to-transparent"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cherry-blossom absolute top-20 left-10 opacity-10 float"></div>
        <div className="cherry-blossom absolute bottom-40 right-20 opacity-10 float" 
          style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-forlivium-black">About </span>
            <span className="text-forlivium-red">Forlivium</span>
          </h2>
          <p className="text-lg text-gray-700">
            Forlivium is a Web3 community that blends blockchain innovation with Japanese cultural influences. 
            We bring together enthusiasts, developers, and investors to build the future of decentralized technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-forlivium-red/10 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-forlivium-red/10 flex items-center justify-center">
                <div className="cherry-blossom scale-75 opacity-60"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-forlivium-black">Japanese Influence</h3>
              <p className="text-gray-600">
                Our community embodies the precision and innovation of Japanese culture,
                applying these principles to blockchain development.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-forlivium-red/10 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-forlivium-red/10 flex items-center justify-center">
                <div className="web3-coin scale-50 opacity-60"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-forlivium-black">Web3 Innovation</h3>
              <p className="text-gray-600">
                We're at the forefront of blockchain technology, focusing on creating useful
                applications that drive real-world adoption.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-forlivium-red/10 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-forlivium-red/10 flex items-center justify-center">
                <div className="torii-gate scale-50 opacity-60"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-forlivium-black">Global Community</h3>
              <p className="text-gray-600">
                With over 1000 members worldwide, we've built a diverse ecosystem of blockchain
                enthusiasts sharing knowledge and opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
