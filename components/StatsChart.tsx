import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { GlassCard } from './GlassCard';

const data = [
  { name: '1-6', runs: 45 },
  { name: '7-12', runs: 38 },
  { name: '13-16', runs: 42 },
  { name: '17-20', runs: 59 },
];

export const StatsChart: React.FC = () => {
  return (
    <GlassCard variant="light" className="h-full min-h-[300px] flex flex-col justify-between">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-bannerBlue mb-1">Phase Analysis</h3>
        <p className="text-sm text-gray-500">Run scoring by over phases</p>
      </div>

      <div className="flex-grow w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#4658D6', fontSize: 12 }} 
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#6B7280', fontSize: 12 }} 
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                borderRadius: '8px',
                border: '1px solid #F9EA32',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            />
            <Bar dataKey="runs" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 3 ? '#F9EA32' : '#4658D6'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 flex items-center justify-between text-xs text-gray-500 border-t border-gray-200 pt-3">
         <span>Slog Overs (17-20)</span>
         <span className="font-bold text-bannerBlue">+59 Runs</span>
      </div>
    </GlassCard>
  );
};