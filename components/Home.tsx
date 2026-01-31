import React from 'react';
import { LiveWidget } from './LiveWidget';
import { GlassCard } from './GlassCard';
import { PageTransition } from './PageTransition';
import { MOCK_MATCH_DATA, ASSETS, TEAM_MEMBERS } from '../constants';
import { LiveActivityVisual, HomeWidgetsVisual, AnalyticsVisual, NotificationVisual } from './FeatureVisuals';
import * as Icons from 'lucide-react';

// FAQ Data
const FAQS = [
  {
    q: "Do I need to pay for the app?",
    a: "The basic app is free to download and use! We offer a 'Super Fan' subscription for advanced analytics and unlimited home screen widgets."
  },
  {
    q: "Does it drain battery?",
    a: "We use iOS and Android's native Live Activities API which is highly optimized for battery life, updating only when score packets change."
  },
  {
    q: "Where does the data come from?",
    a: "We partner with top-tier cricket data providers to ensure sub-second latency, faster than most TV broadcasts."
  },
  {
    q: "Can I use it for local matches?",
    a: "Currently, we support all International, League (IPL, BBL), and major Domestic matches. Local club support is coming in v3.0."
  }
];

// Testimonials Data
const TESTIMONIALS = [
  {
    name: "Rahul S.",
    role: "Die-hard Fan",
    text: "The Live Activities on lock screen changed my life. I can work and keep track of the score without unlocking my phone every minute.",
    stars: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Cricket Analyst",
    text: "The wagon wheels and worm charts are incredibly detailed. It's like having a broadcast production suite in my pocket.",
    stars: 5
  },
  {
    name: "M. Patel",
    role: "Casual Viewer",
    text: "Simple, beautiful, and fast. The dark mode widgets look stunning on my setup. Highly recommended!",
    stars: 4
  }
];

// Helper to determine icon based on role
const getRoleIcon = (role: string) => {
  if (role.includes('Developer')) return Icons.Code2;
  if (role.includes('Designer')) return Icons.Palette;
  if (role.includes('Data')) return Icons.Database;
  if (role.includes('Product')) return Icons.Briefcase;
  if (role.includes('Marketing') || role.includes('Growth')) return Icons.TrendingUp;
  if (role.includes('Content')) return Icons.PenTool;
  return Icons.Sparkles;
};

export const Home: React.FC = () => {
  // Feature mapping to visuals
  const featuresList = [
      {
        title: "Live Activities",
        description: "Follow the match directly from your lock screen with real-time updates.",
        icon: "Smartphone",
        Visual: LiveActivityVisual
      },
      {
        title: "Home Screen Widgets",
        description: "Pin your favorite teams and matches to your home screen for instant access.",
        icon: "Layout",
        Visual: HomeWidgetsVisual
      },
      {
        title: "Deep Analytics",
        description: "Wagon wheels, worm charts, and player comparisons right in your pocket.",
        icon: "BarChart2",
        Visual: AnalyticsVisual
      },
      {
        title: "Push Notifications",
        description: "Get notified for every wicket, milestone, and result instantly.",
        icon: "Bell",
        Visual: NotificationVisual
      }
  ];

  return (
    <PageTransition>
      {/* HERO SECTION - Always Dark Theme usually looks best for Hero, but let's make bg responsive */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-bannerBlue dark:bg-darkBg transition-colors duration-500">
        
        {/* Background Image / Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-10 pointer-events-none">
          <div 
             className="w-full h-full bg-cover bg-center mix-blend-overlay"
             style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
          ></div>
           {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-bannerBlue dark:from-darkBg via-transparent to-bannerBlue dark:to-darkBg"></div>
        </div>
        
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-appYellow rounded-full mix-blend-screen filter blur-[100px] opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-appLightBlue dark:bg-bannerBlue rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl lg:text-7xl font-bold font-sans mb-6 leading-tight">
              Cricket on your
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-appYellow to-white">
                Lock Screen.
              </span> 
            </h1>
            <p className="text-xl text-blue-100 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 font-light">
              Experience the game like never before with Commentary Box. Live Activities, interactive widgets, and deep stats for iOS and Android.
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               {/* iOS Button */}
               <button className="bg-white text-black px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform shadow-xl group hover:bg-appYellow border border-transparent">
                 <Icons.Apple size={28} className="group-hover:text-black transition-colors" />
                 <div className="text-left">
                   <div className="text-[10px] uppercase font-bold tracking-wider leading-none text-gray-600 group-hover:text-black transition-colors">Download on the</div>
                   <div className="text-xl font-bold leading-none mt-1 font-sans">App Store</div>
                 </div>
               </button>

               {/* Android Button - Updated for better contrast */}
               <button className="bg-black/90 text-white border border-white/10 px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform shadow-xl group hover:bg-white hover:text-black hover:border-transparent">
                 <Icons.Smartphone size={28} className="text-gray-300 group-hover:text-black transition-colors" /> 
                 <div className="text-left">
                   <div className="text-[10px] uppercase font-bold tracking-wider leading-none text-gray-400 group-hover:text-black transition-colors">Get it on</div>
                   <div className="text-xl font-bold leading-none mt-1 font-sans text-white group-hover:text-black transition-colors">Google Play</div>
                 </div>
               </button>
            </div>
          </div>

          {/* Right Content - App Showcase */}
          <div className="relative flex justify-center">
             {/* Phone Frame Simulation */}
             <div className="relative z-10 w-[300px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
               {/* Dynamic Island */}
               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-24 bg-black rounded-b-2xl z-20"></div>
               
               {/* Content inside phone */}
               <div className="bg-gradient-to-b from-gray-900 to-bannerBlue h-full p-4 pt-12 overflow-hidden">
                  <div className="mb-4">
                    <p className="text-white/50 text-center text-xs mb-2">Lock Screen</p>
                    {/* Compact Live Activity */}
                    <div className="bg-black/40 backdrop-blur-md rounded-3xl p-4 border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-bold">IND</span>
                        <span className="text-red-500 text-xs animate-pulse">LIVE</span>
                        <span className="text-white font-bold">AUS</span>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-2xl font-racing text-appYellow">184/3</span>
                        <span className="text-xs text-gray-400">14.2 ov</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Reuse existing widget component scaling it down */}
                  <div className="transform scale-90 origin-top">
                    <LiveWidget initialData={MOCK_MATCH_DATA} />
                  </div>
               </div>
             </div>
             
             {/* Decorative glow */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[600px] bg-appYellow/20 dark:bg-bannerBlue/20 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <Icons.ChevronDown size={32} />
        </div>
      </section>

      {/* FEATURES SHOWCASE */}
      <section id="features" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-500">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-appLightBlue font-bold tracking-widest uppercase text-sm mb-3">App Features</h2>
             <h3 className="text-4xl font-bold text-gray-900 dark:text-white font-sans transition-colors">Your stadium, your rules.</h3>
          </div>

          <div className="space-y-24">
            {featuresList.map((feature, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = (Icons as any)[feature.icon] || Icons.Zap;
              const VisualComponent = feature.Visual;
              
              return (
                <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                  {/* Text Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 dark:bg-white/5 text-bannerBlue dark:text-appLightBlue mb-6 border border-blue-100 dark:border-white/5">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">{feature.title}</h3>
                    <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed font-light transition-colors">{feature.description}</p>
                  </div>

                  {/* Visual Content (Component based now) */}
                  <div className="flex-1 w-full flex justify-center">
                    <div className="relative group w-full max-w-md">
                        <div className={`absolute inset-0 bg-gradient-to-tr ${isEven ? 'from-appYellow/20 to-orange-500/20' : 'from-appLightBlue/20 to-bannerBlue/20'} rounded-[3rem] transform rotate-3 scale-95 opacity-50 group-hover:rotate-6 transition-transform duration-500 blur-xl`}></div>
                        <div className="relative z-10">
                            <VisualComponent />
                        </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

       {/* TESTIMONIALS SECTION */}
       <section className="py-24 bg-bannerBlue dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
         <div className="absolute inset-0 opacity-10 dark:opacity-5" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, #F9EA32 1px, transparent 1px)`, backgroundSize: '40px 40px'}}></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-appYellow font-bold tracking-widest uppercase text-sm mb-3">Wall of Love</h2>
              <h3 className="text-4xl font-bold text-white font-sans">Trusted by thousands of fans</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <GlassCard key={i} className="border-white/10 dark:border-white/5 hover:border-appYellow/50 transition-colors bg-white/10 dark:bg-white/5">
                   <div className="flex gap-1 mb-4">
                     {[...Array(5)].map((_, si) => (
                       <Icons.Star key={si} size={16} className={`${si < t.stars ? 'text-appYellow fill-current' : 'text-blue-200 dark:text-gray-700'}`} />
                     ))}
                   </div>
                   <p className="text-blue-50 dark:text-gray-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-appYellow to-orange-500 flex items-center justify-center font-bold text-black text-xs">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{t.name}</div>
                        <div className="text-xs text-blue-200 dark:text-gray-500 uppercase tracking-wider">{t.role}</div>
                      </div>
                   </div>
                </GlassCard>
              ))}
            </div>
         </div>
       </section>

      {/* TEAM SECTION (Redesigned) */}
      <section className="py-24 relative overflow-hidden bg-gray-50 dark:bg-slate-900 transition-colors duration-500">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-bannerBlue/5 dark:bg-bannerBlue/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-bannerBlue dark:text-appYellow font-bold tracking-widest uppercase text-sm mb-3">The Squad</h2>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white font-sans transition-colors">Meet the Builders</h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate cricket fans and engineers building the future of match tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TEAM_MEMBERS.map((member, idx) => {
              const RoleIcon = getRoleIcon(member.role);
              return (
                <div key={idx} className="group relative">
                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-appYellow to-bannerBlue rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500"></div>
                    
                    <GlassCard className="relative h-full flex flex-col items-center text-center p-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-transparent dark:border-transparent hover:-translate-y-1 transition-all duration-300">
                      
                      {/* Image Container with Dynamic Role Badge */}
                      <div className="relative w-32 h-32 mb-6">
                        <div className="absolute inset-0 bg-appYellow rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover rounded-full border-4 border-gray-100 dark:border-gray-700 shadow-xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:border-appYellow" 
                        />
                        <div className="absolute bottom-0 right-0 bg-bannerBlue text-white p-2 rounded-full shadow-lg z-20 border-2 border-white dark:border-slate-800 transform translate-x-1 translate-y-1">
                           <RoleIcon size={14} />
                        </div>
                      </div>

                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-bannerBlue dark:group-hover:text-appYellow transition-colors">{member.name}</h4>
                      <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">{member.role}</p>
                      
                      {/* Social Links with individual colors on hover */}
                      <div className="mt-auto w-full pt-6 border-t border-gray-100 dark:border-white/5 flex justify-center gap-5">
                         {(member as any).github && (
                           <a href={(member as any).github} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-110">
                             <Icons.Github size={20}/>
                           </a>
                         )}
                         {(member as any).dribbble && (
                           <a href={(member as any).dribbble} className="text-gray-400 hover:text-pink-500 transition-all transform hover:scale-110">
                             <Icons.Dribbble size={20}/>
                           </a>
                         )}
                         {(member as any).twitter && (
                           <a href={(member as any).twitter} className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110">
                             <Icons.Twitter size={20}/>
                           </a>
                         )}
                         {(member as any).linkedin && (
                           <a href={(member as any).linkedin} className="text-gray-400 hover:text-blue-700 transition-all transform hover:scale-110">
                             <Icons.Linkedin size={20}/>
                           </a>
                         )}
                      </div>
                    </GlassCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-16">
             <h2 className="text-appLightBlue font-bold tracking-widest uppercase text-sm mb-3">FAQ</h2>
             <h3 className="text-4xl font-bold text-bannerBlue dark:text-white font-sans transition-colors">Common Questions</h3>
           </div>
           
           <div className="space-y-4">
             {FAQS.map((faq, i) => (
               <div key={i} className="group bg-gray-50 dark:bg-white/5 rounded-2xl p-6 hover:bg-white dark:hover:bg-white/10 transition-all border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md">
                 <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2 flex items-start gap-3 group-hover:text-bannerBlue dark:group-hover:text-appYellow transition-colors">
                   <Icons.HelpCircle className="text-appYellow shrink-0 mt-1 transition-colors" size={20} />
                   {faq.q}
                 </h4>
                 <p className="text-gray-600 dark:text-gray-400 pl-8 leading-relaxed transition-colors">{faq.a}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* FEEDBACK FORM */}
      <section className="py-24 bg-bannerBlue relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-appYellow rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-appLightBlue rounded-full blur-3xl opacity-10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12">
               <div className="text-white">
                  <h3 className="text-3xl font-bold font-sans mb-4">We value your feedback</h3>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    Commentary Box is built by fans, for fans. Found a bug? Have a feature request? Let us know and help us shape the future of cricket analytics.
                  </p>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center gap-3"><div className="p-2 bg-white/10 rounded-lg"><Icons.Mail size={16} className="text-appYellow"/></div> support@commentarybox.com</li>
                    <li className="flex items-center gap-3"><div className="p-2 bg-white/10 rounded-lg"><Icons.MessageCircle size={16} className="text-appYellow"/></div> Join our Discord</li>
                  </ul>
               </div>

               <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Name</label>
                    <input type="text" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-appYellow transition-colors placeholder-white/30" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-appYellow transition-colors placeholder-white/30" placeholder="Tell us what you think..."></textarea>
                  </div>
                  <button className="w-full bg-appYellow text-bannerBlue font-bold py-3 rounded-lg hover:bg-white transition-colors shadow-lg shadow-appYellow/20">
                    Send Feedback
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-appLightBlue dark:text-appYellow font-bold tracking-widest uppercase text-sm mb-3">Go Pro</h2>
            <h3 className="text-4xl font-bold text-bannerBlue dark:text-white font-sans transition-colors">Unlock Premium Stats</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
             {/* Free Tier */}
             <div className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-gray-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-all flex flex-col hover:border-bannerBlue dark:hover:border-white/20">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fan</h4>
                <div className="text-4xl font-bold text-bannerBlue dark:text-appLightBlue mb-6">Free</div>
                <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400"><Icons.Check size={18} className="text-green-500 dark:text-green-400"/> Live Scores</li>
                   <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400"><Icons.Check size={18} className="text-green-500 dark:text-green-400"/> Basic Lock Screen Widget</li>
                   <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400"><Icons.Check size={18} className="text-green-500 dark:text-green-400"/> Match Notifications</li>
                </ul>
                <button className="w-full py-3 rounded-xl border border-bannerBlue/20 dark:border-white/20 text-bannerBlue dark:text-white font-bold hover:bg-bannerBlue hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Download App</button>
             </div>

             {/* Pro Tier */}
             <div className="bg-bannerBlue dark:bg-gradient-to-b dark:from-bannerBlue dark:to-blue-900 rounded-2xl p-8 border border-bannerBlue dark:border-blue-500/30 shadow-2xl relative flex flex-col transform md:scale-105">
                <div className="absolute top-0 right-0 bg-appYellow text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">BEST VALUE</div>
                <h4 className="text-xl font-bold text-white mb-2">Super Fan</h4>
                <div className="text-4xl font-bold text-white mb-6">$2.99<span className="text-lg text-blue-200 font-normal">/mo</span></div>
                <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex items-center gap-3 text-white"><Icons.Check size={18} className="text-appYellow"/> Everything in Fan</li>
                   <li className="flex items-center gap-3 text-white"><Icons.Check size={18} className="text-appYellow"/> Advanced Analytics</li>
                   <li className="flex items-center gap-3 text-white"><Icons.Check size={18} className="text-appYellow"/> Live Activities</li>
                   <li className="flex items-center gap-3 text-white"><Icons.Check size={18} className="text-appYellow"/> Multiple Widgets</li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-appYellow text-bannerBlue font-bold hover:bg-white transition-colors shadow-lg shadow-appYellow/20">Start Free Trial</button>
             </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};