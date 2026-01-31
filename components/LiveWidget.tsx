import React, { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';
import { MatchData } from '../types';
import { Circle } from 'lucide-react';

interface LiveWidgetProps {
  initialData: MatchData;
}

export const LiveWidget: React.FC<LiveWidgetProps> = ({ initialData }) => {
  const [data, setData] = useState<MatchData>(initialData);
  const [isLive, setIsLive] = useState(true);

  // Simulate subtle live data changes for effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLive(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto transform transition-all hover:scale-105 duration-500">
      {/* Broadcast Header */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-bannerBlue text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-appYellow z-10 shadow-lg flex items-center gap-2">
        <span className={`block w-2 h-2 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-red-900'}`}></span>
        Live Broadcast
      </div>

      <GlassCard variant="dark" className="text-white pt-8 overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-appLightBlue opacity-20 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-appYellow opacity-10 blur-2xl rounded-full -translate-x-5 translate-y-5"></div>

        {/* Score Header */}
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-racing">{data.teamHome}</h3>
            <p className="text-xs text-gray-300">Batting</p>
          </div>
          
          <div className="text-center flex flex-col items-center">
             <div className="bg-white/10 px-6 py-2 rounded-lg border border-white/10 backdrop-blur-md">
                <span className="text-5xl font-racing text-appYellow drop-shadow-md">
                  {data.scoreHome}/{data.wicketsHome}
                </span>
             </div>
             <p className="text-sm mt-2 font-mono text-appLightBlue">Overs: {data.oversHome} (20)</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold font-racing text-gray-400">{data.teamAway}</h3>
            <p className="text-xs text-gray-400">Bowling</p>
          </div>
        </div>

        {/* Batting Stats */}
        <div className="space-y-2 mb-4 relative z-10">
          <div className="grid grid-cols-12 text-xs text-gray-400 uppercase tracking-wider mb-1 px-2">
            <div className="col-span-5">Batter</div>
            <div className="col-span-2 text-center">R</div>
            <div className="col-span-2 text-center">B</div>
            <div className="col-span-1 text-center">4s</div>
            <div className="col-span-1 text-center">6s</div>
            <div className="col-span-1 text-right">SR</div>
          </div>
          
          {data.batters.map((batter) => (
            <div 
              key={batter.id} 
              className={`grid grid-cols-12 items-center p-2 rounded-lg ${batter.isOnStrike ? 'bg-bannerBlue/40 border border-appYellow/50' : 'bg-white/5'}`}
            >
              <div className="col-span-5 font-semibold flex items-center gap-2">
                {batter.name} 
                {batter.isOnStrike && <Circle size={8} fill="#F9EA32" className="text-appYellow" />}
              </div>
              <div className="col-span-2 text-center font-racing text-lg text-white">{batter.runs}</div>
              <div className="col-span-2 text-center text-gray-300">{batter.balls}</div>
              <div className="col-span-1 text-center text-appYellow">{batter.fours}</div>
              <div className="col-span-1 text-center text-appLightBlue">{batter.sixes}</div>
              <div className="col-span-1 text-right text-xs text-gray-300">{batter.strikeRate}</div>
            </div>
          ))}
        </div>

        {/* Bowler Stats */}
        <div className="mt-4 pt-3 border-t border-white/10 relative z-10">
          <div className="flex justify-between items-center text-sm">
             <div className="flex items-center gap-2">
                <span className="text-gray-400 text-xs uppercase">Bowling</span>
                <span className="font-bold">{data.bowler.name}</span>
             </div>
             <div className="flex gap-4 font-mono text-xs">
                <span><span className="text-gray-400">O:</span> {data.bowler.overs}</span>
                <span><span className="text-gray-400">W:</span> {data.bowler.wickets}</span>
                <span><span className="text-gray-400">R:</span> {data.bowler.runs}</span>
                <span className="text-appYellow"><span className="text-gray-400">ECO:</span> {data.bowler.economy}</span>
             </div>
          </div>
        </div>

        {/* Projected Score */}
        <div className="mt-4 flex justify-between items-center text-xs text-gray-400 font-sans border-t border-white/5 pt-2">
            <span>Projected Score: <strong className="text-white text-sm">{data.projectedScore}</strong></span>
            <span>CRR: <strong className="text-white text-sm">{(parseInt(data.scoreHome) / data.oversHome).toFixed(2)}</strong></span>
        </div>
      </GlassCard>
    </div>
  );
};