import React from 'react';
import { GlassCard } from './GlassCard';
import { PageTransition } from './PageTransition';

export const BrandGuidelines: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-bannerBlue dark:text-white mb-4 font-sans transition-colors">Brand Guidelines</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            Our visual identity defines the Commentary Box experience. These guidelines ensure consistency across all our live widgets and platforms.
          </p>
        </div>

        <div className="grid gap-12">
          {/* Logo Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2 transition-colors">
              <span className="w-8 h-1 bg-appYellow rounded-full"></span> Logo Construction
            </h2>
            <GlassCard className="bg-white dark:bg-white/5 p-12 flex flex-col md:flex-row items-center justify-around gap-12 border-gray-200 dark:border-white/10 transition-colors">
              <div className="text-center">
                  <div className="text-8xl font-racing italic text-gray-900 dark:text-white tracking-tighter mb-4 transition-colors">
                    <span className="text-appYellow">C</span>B
                  </div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">Dark Mode Logo</p>
              </div>
              <div className="text-center bg-gray-100 dark:bg-white p-8 rounded-3xl">
                  <div className="text-8xl font-racing italic text-bannerBlue tracking-tighter mb-4">
                    <span className="text-appYellow">C</span>B
                  </div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Light Mode Logo</p>
              </div>
            </GlassCard>
          </section>

          {/* Color Palette */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2 transition-colors">
              <span className="w-8 h-1 bg-appYellow rounded-full"></span> Color Palette
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* App Yellow */}
              <div className="group">
                  <div className="h-40 rounded-t-2xl bg-appYellow shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                  </div>
                  <div className="bg-white dark:bg-white/5 p-6 rounded-b-2xl border border-gray-200 dark:border-white/10 shadow-sm transition-colors">
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white">Electric Yellow</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-mono text-sm mb-2">#F9EA32</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Used for highlights, accents, and call-to-actions.</p>
                  </div>
              </div>
              
              {/* Banner Blue */}
              <div className="group">
                  <div className="h-40 rounded-t-2xl bg-bannerBlue shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                  </div>
                  <div className="bg-white dark:bg-white/5 p-6 rounded-b-2xl border border-gray-200 dark:border-white/10 shadow-sm transition-colors">
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white">Broadcast Blue</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-mono text-sm mb-2">#4658D6</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Primary brand color. Used for backgrounds and headers.</p>
                  </div>
              </div>

              {/* App Light Blue */}
              <div className="group">
                  <div className="h-40 rounded-t-2xl bg-appLightBlue shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                  </div>
                  <div className="bg-white dark:bg-white/5 p-6 rounded-b-2xl border border-gray-200 dark:border-white/10 shadow-sm transition-colors">
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white">Sky Cyan</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-mono text-sm mb-2">#00BFFF</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Secondary accent for stats and data visualization.</p>
                  </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2 transition-colors">
              <span className="w-8 h-1 bg-appYellow rounded-full"></span> Typography
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 transition-colors">
                  <div className="mb-4 pb-4 border-b border-gray-200 dark:border-white/10">
                    <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-2">Display Font</h3>
                    <p className="text-4xl font-racing text-bannerBlue dark:text-appYellow transition-colors">Racing Sans One</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-racing text-3xl text-gray-800 dark:text-white transition-colors">The quick brown fox jumps over the lazy dog.</p>
                    <p className="font-racing text-xl text-gray-400">1234567890</p>
                  </div>
              </GlassCard>

              <GlassCard className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 transition-colors">
                  <div className="mb-4 pb-4 border-b border-gray-200 dark:border-white/10">
                    <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-2">Body Font</h3>
                    <p className="text-4xl font-sans font-bold text-bannerBlue dark:text-appLightBlue transition-colors">Rubik</p>
                  </div>
                  <div className="space-y-4">
                    <p className="font-sans font-light text-2xl text-gray-800 dark:text-white transition-colors">Light 300</p>
                    <p className="font-sans font-normal text-2xl text-gray-800 dark:text-white transition-colors">Regular 400</p>
                    <p className="font-sans font-bold text-2xl text-gray-800 dark:text-white transition-colors">Bold 700</p>
                  </div>
              </GlassCard>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};