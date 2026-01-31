import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { Trophy, Activity, Smartphone, Battery, Signal } from 'lucide-react';

// 1. Live Activity Visual
export const LiveActivityVisual = () => {
  return (
    <div className="w-full max-w-[320px] mx-auto bg-black rounded-[3rem] p-4 border-4 border-gray-800 shadow-2xl relative overflow-hidden">
        {/* Dynamic Island Area */}
        <div className="flex justify-center mb-6">
            <div className="h-7 w-28 bg-black rounded-full absolute top-2 border border-white/5"></div>
        </div>
        
        {/* Notification Content */}
        <div className="bg-[#1c1c1e] rounded-3xl p-5 mt-4 border border-white/5 shadow-lg relative overflow-hidden">
             {/* Glossy effect */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[8px] text-white font-bold">IN</div>
                    <span className="text-white text-sm font-bold">India</span>
                </div>
                <div className="bg-red-500/20 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse border border-red-500/20">
                    LIVE
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-white text-sm font-bold">Aus</span>
                    <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-[8px] text-black font-bold">AU</div>
                </div>
            </div>

            <div className="flex justify-between items-end mb-4">
                <div>
                    <span className="text-3xl font-racing text-white">184</span>
                    <span className="text-xl font-racing text-gray-400">/3</span>
                </div>
                <div className="text-right">
                    <div className="text-xs text-gray-400">Target: 245</div>
                    <div className="text-xs text-appYellow font-bold">Need 61 off 34</div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden flex">
                <div className="w-[75%] bg-gradient-to-r from-blue-500 to-appLightBlue"></div>
            </div>
            <div className="mt-2 text-[10px] text-gray-500 flex justify-between">
                <span>14.2 Overs</span>
                <span>CRR: 12.8</span>
            </div>
        </div>
    </div>
  );
};

// 2. Home Widgets Visual
export const HomeWidgetsVisual = () => {
  return (
    <div className="w-full h-64 relative flex items-center justify-center p-4">
        {/* Grid Background - Adaptive opacity */}
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 rounded-3xl opacity-50 transition-colors" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(100,100,100,0.1) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="grid grid-cols-2 gap-4 relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Small Widget */}
            <div className="w-32 h-32 bg-white dark:bg-white/10 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-2xl p-4 flex flex-col justify-between hover:scale-105 transition-transform shadow-lg">
                <div className="flex justify-between items-start">
                    <Trophy size={20} className="text-bannerBlue dark:text-appYellow" />
                    <span className="text-[10px] text-gray-500 dark:text-gray-300">IND v AUS</span>
                </div>
                <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white font-racing">WIN</div>
                    <div className="text-[10px] text-green-600 dark:text-green-400">by 24 runs</div>
                </div>
            </div>

            {/* Small Widget 2 */}
            <div className="w-32 h-32 bg-bannerBlue dark:bg-bannerBlue/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <span className="text-xl font-bold text-bannerBlue">V.K</span>
                </div>
                <div className="text-center">
                    <div className="text-xl font-bold text-white leading-none">82*</div>
                    <div className="text-[10px] text-blue-200">Runs</div>
                </div>
            </div>
        </div>
    </div>
  );
};

// 3. Deep Analytics Visual
const chartData = [
  { name: '1', score: 10 },
  { name: '2', score: 18 },
  { name: '3', score: 25 },
  { name: '4', score: 40 },
  { name: '5', score: 45 },
  { name: '6', score: 58 },
  { name: '7', score: 70 },
  { name: '8', score: 75 },
  { name: '9', score: 92 },
  { name: '10', score: 104 },
];

export const AnalyticsVisual = () => {
  return (
    <div className="w-full h-64 bg-white dark:bg-gray-900 rounded-3xl p-4 border border-gray-200 dark:border-gray-800 relative overflow-hidden group shadow-lg transition-colors">
        <div className="flex justify-between items-center mb-2 px-2">
            <h4 className="text-gray-900 dark:text-white text-sm font-bold flex items-center gap-2">
                <Activity size={14} className="text-bannerBlue dark:text-appLightBlue"/> Run Rate Analysis
            </h4>
            <div className="flex gap-1">
                 <div className="w-2 h-2 rounded-full bg-appYellow"></div>
                 <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            </div>
        </div>
        
        <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                    <defs>
                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F9EA32" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#F9EA32" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', borderRadius: '8px', color: '#fff' }}
                        itemStyle={{ color: '#F9EA32' }}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="score" 
                        stroke="#F9EA32" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorScore)" 
                        animationDuration={2000}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>

        {/* Hover Highlight */}
        <div className="absolute inset-0 bg-gradient-to-t from-bannerBlue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
};

// 4. Notification Visual
export const NotificationVisual = () => {
  return (
    <div className="w-full max-w-[300px] mx-auto space-y-3">
        {[1, 2].map((i) => (
             /* Adaptive Notification Style: Light mode = White/Frosted, Dark mode = Dark/Frosted */
             <div key={i} className={`bg-white/90 dark:bg-[#2c2c2e] rounded-2xl p-4 shadow-xl transform transition-transform border border-gray-100 dark:border-white/5 ${i===1 ? 'translate-x-4' : '-translate-x-4'}`}>
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-bannerBlue rounded-md flex items-center justify-center">
                            <span className="text-appYellow font-bold text-[10px]">CB</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase">Commentary Box</span>
                    </div>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500">Now</span>
                </div>
                <div className="pl-0">
                    <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">WICKET! 🏏</p>
                    <p className="text-sm text-gray-600 dark:text-gray-200 leading-snug">V. Kohli b P. Cummins 82(41). What a delivery!</p>
                </div>
            </div>
        ))}
    </div>
  );
};