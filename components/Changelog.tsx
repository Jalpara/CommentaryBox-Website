import React from 'react';
import { GlassCard } from './GlassCard';
import { CHANGELOG } from '../constants';
import { Clock } from 'lucide-react';
import { PageTransition } from './PageTransition';

export const Changelog: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-bannerBlue dark:text-white mb-4 font-sans transition-colors">Changelog</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            Track the latest updates, improvements, and fixes for Commentary Box.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 hidden md:block"></div>
          
          {CHANGELOG.map((log, index) => (
            <div key={index} className="relative md:pl-24">
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-6 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-appYellow border-4 border-white dark:border-slate-900 shadow-md z-10 transition-colors"></div>
              
              <GlassCard className="bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 hover:border-appYellow dark:hover:border-appYellow/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b border-gray-100 dark:border-white/10 pb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="bg-bannerBlue text-white px-3 py-1 rounded-full text-sm font-bold font-mono border border-transparent dark:border-white/10">
                      {log.version}
                    </span>
                    {index === 0 && (
                      <span className="bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide border border-green-200 dark:border-green-500/20">
                        Latest
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm gap-2">
                    <Clock size={16} />
                    {log.date}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {log.changes.map((change, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-appLightBlue dark:bg-appYellow flex-shrink-0"></span>
                      {change}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};