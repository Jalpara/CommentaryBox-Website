import React from 'react';
import { GlassCard } from './GlassCard';
import { PageTransition } from './PageTransition';

export const Terms: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-bannerBlue dark:text-white mb-8 transition-colors">Terms of Service</h1>
          <GlassCard className="bg-white dark:bg-white/5 p-8 md:p-12 text-gray-600 dark:text-gray-300 space-y-6 leading-relaxed border-gray-200 dark:border-white/10 transition-colors">
            <p className="text-sm text-gray-400 dark:text-gray-500 mb-4 transition-colors">Last Updated: October 24, 2024</p>
            
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 transition-colors">1. Acceptance of Terms</h3>
            <p>
              By accessing and using Commentary Box ("the Service"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
            </p>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 transition-colors">2. Description of Service</h3>
            <p>
              Commentary Box provides real-time cricket data visualization widgets for broadcasters and streamers. We reserve the right to modify, suspend, or discontinue any part of the Service at any time.
            </p>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 transition-colors">3. User Obligations</h3>
            <p>
              You agree not to misuse the Service or help anyone else do so. You must not attempt to access the Service using a method other than the interface and the instructions that we provide.
            </p>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 transition-colors">4. Intellectual Property</h3>
            <p>
              The design, code, and content of the Service are protected by copyright and other intellectual property laws. The "Commentary Box" name and logo are trademarks of our company.
            </p>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 transition-colors">5. Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, Commentary Box shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
            </p>
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
};