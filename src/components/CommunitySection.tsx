
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DiscordIcon } from '@/components/icons/DiscordIcon';
import { TelegramIcon } from '@/components/icons/TelegramIcon';

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="mount-fuji absolute -bottom-40 right-0 opacity-5 scale-[2]"></div>
        <div className="wave-pattern text-forlivium-black/5 absolute bottom-0 left-0 right-0 wave"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-forlivium-black">Join Our </span>
            <span className="text-forlivium-red">Community</span>
          </h2>
          <p className="text-lg text-gray-700">
            Become part of our growing network of over 1,000 members who share a passion for 
            Web3 technology and Japanese culture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-[#5865F2]/10 border-[#5865F2]/20 hover:bg-[#5865F2]/15 transition-colors">
            <CardContent className="p-8 flex flex-col items-center">
              <DiscordIcon className="h-16 w-16 text-[#5865F2] mb-6" />
              <h3 className="text-2xl font-bold mb-2">Discord Community</h3>
              <p className="text-center text-gray-700 mb-6">
                Join discussions, participate in events, and get direct access to the team and other community members.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                <span className="bg-[#5865F2]/20 text-[#5865F2] text-sm px-3 py-1 rounded-full">Daily Discussions</span>
                <span className="bg-[#5865F2]/20 text-[#5865F2] text-sm px-3 py-1 rounded-full">800+ Members</span>
                <span className="bg-[#5865F2]/20 text-[#5865F2] text-sm px-3 py-1 rounded-full">Voice Channels</span>
              </div>
              <Button className="bg-[#5865F2] hover:bg-[#5865F2]/80 text-white w-full">
                Join Discord
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0088cc]/10 border-[#0088cc]/20 hover:bg-[#0088cc]/15 transition-colors">
            <CardContent className="p-8 flex flex-col items-center">
              <TelegramIcon className="h-16 w-16 text-[#0088cc] mb-6" />
              <h3 className="text-2xl font-bold mb-2">Telegram Group</h3>
              <p className="text-center text-gray-700 mb-6">
                Get instant updates, announcements, and connect with our global community on the go.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                <span className="bg-[#0088cc]/20 text-[#0088cc] text-sm px-3 py-1 rounded-full">News Updates</span>
                <span className="bg-[#0088cc]/20 text-[#0088cc] text-sm px-3 py-1 rounded-full">400+ Members</span>
                <span className="bg-[#0088cc]/20 text-[#0088cc] text-sm px-3 py-1 rounded-full">Live Alerts</span>
              </div>
              <Button className="bg-[#0088cc] hover:bg-[#0088cc]/80 text-white w-full">
                Join Telegram
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block rounded-full bg-forlivium-red/10 px-6 py-3 mb-6">
            <span className="text-forlivium-red font-medium">1000+ Community Members Worldwide</span>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-forlivium-red">800+</p>
              <p className="text-sm text-gray-600">Discord Members</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-forlivium-red">400+</p>
              <p className="text-sm text-gray-600">Telegram Members</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-forlivium-red">50+</p>
              <p className="text-sm text-gray-600">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-forlivium-red">5k+</p>
              <p className="text-sm text-gray-600">Messages/Month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
