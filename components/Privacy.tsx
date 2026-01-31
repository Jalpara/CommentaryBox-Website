import React from 'react';
import { GlassCard } from './GlassCard';
import { PageTransition } from './PageTransition';

export const Privacy: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-bannerBlue dark:text-white mb-8 transition-colors">Privacy Policy</h1>
          <GlassCard className="bg-white dark:bg-white/5 p-8 md:p-12 text-gray-600 dark:text-gray-300 space-y-6 leading-relaxed border-gray-200 dark:border-white/10 transition-colors">
            <p className="text-sm text-gray-400 dark:text-gray-500 mb-4 transition-colors">Last Updated: October 24, 2024</p>
            
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 transition-colors">1. Information We Collect</h3>
            <p>
              We collect information you provide directly to us, such as when you create an account, configure a widget, or contact customer support. This may include your name, email address, and streaming platform preferences.
            </p>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 transition-colors">2. How We Use Your Information</h3>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to develop new features, and to protect Commentary Box and our users.
            </p>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 transition-colors">3. Data Storage and Security</h3>
            <p>
              We use industry-standard security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 transition-colors">4. Cookies and Tracking</h3>
            <p>
              We use cookies and similar technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
};