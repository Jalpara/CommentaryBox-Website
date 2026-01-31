import { MatchData } from './types';

export const MOCK_MATCH_DATA: MatchData = {
  teamHome: "IND",
  teamAway: "AUS",
  scoreHome: "184",
  wicketsHome: 3,
  oversHome: 14.2,
  projectedScore: 245,
  batters: [
    {
      id: 1,
      name: "V. Kohli",
      runs: 82,
      balls: 41,
      fours: 6,
      sixes: 4,
      strikeRate: 200.00,
      isOnStrike: true
    },
    {
      id: 2,
      name: "S. Yadav",
      runs: 34,
      balls: 18,
      fours: 3,
      sixes: 2,
      strikeRate: 188.88,
      isOnStrike: false
    }
  ],
  bowler: {
    id: 101,
    name: "P. Cummins",
    overs: 3.2,
    maidens: 0,
    runs: 28,
    wickets: 1,
    economy: 8.40
  }
};

export const ASSETS = {
  heroBg: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop",
  // Placeholder for phone screenshots
  screenshot1: "https://placehold.co/300x600/4658D6/FFFFFF/png?text=Live+Activities",
  screenshot2: "https://placehold.co/300x600/F9EA32/4658D6/png?text=Home+Widgets",
  screenshot3: "https://placehold.co/300x600/00BFFF/FFFFFF/png?text=Match+Stats",
  // Team Images
  team1: "https://placehold.co/150x150/4658D6/FFFFFF?text=Dev",
  team2: "https://placehold.co/150x150/F9EA32/4658D6?text=Design",
  team3: "https://placehold.co/150x150/00BFFF/FFFFFF?text=Product",
  team4: "https://placehold.co/150x150/FF5733/FFFFFF?text=Marketing",
  team5: "https://placehold.co/150x150/33FF57/000000?text=Data",
  team6: "https://placehold.co/150x150/3357FF/FFFFFF?text=Content"
};

export const FEATURES = [
  {
    title: "Live Activities",
    description: "Follow the match directly from your lock screen with real-time updates.",
    icon: "Smartphone", // Lucide icon name
    image: ASSETS.screenshot1
  },
  {
    title: "Home Screen Widgets",
    description: "Pin your favorite teams and matches to your home screen for instant access.",
    icon: "Layout",
    image: ASSETS.screenshot2
  },
  {
    title: "Deep Analytics",
    description: "Wagon wheels, worm charts, and player comparisons right in your pocket.",
    icon: "BarChart2",
    image: ASSETS.screenshot3
  },
  {
    title: "Push Notifications",
    description: "Get notified for every wicket, milestone, and result instantly.",
    icon: "Bell", // Lucide icon name
    image: ASSETS.screenshot1 // Reusing for demo
  }
];

// --- EDIT TEAM MEMBERS HERE ---
export const TEAM_MEMBERS = [
  {
    name: "Alex Dev",
    role: "Lead Developer",
    image: ASSETS.team1,
    github: "#",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Sam Design",
    role: "UI/UX Designer",
    image: ASSETS.team2,
    dribbble: "#",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Jordan Product",
    role: "Product Manager",
    image: ASSETS.team3,
    linkedin: "#",
    twitter: "#",
    github: "#"
  },
  {
    name: "Casey Marketing",
    role: "Head of Growth",
    image: ASSETS.team4,
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Riley Data",
    role: "Data Scientist",
    image: ASSETS.team5,
    github: "#",
    linkedin: "#"
  },
  {
    name: "Morgan Content",
    role: "Content Strategist",
    image: ASSETS.team6,
    twitter: "#",
    linkedin: "#"
  }
];

export const CHANGELOG = [
  {
    version: "v2.1.0",
    date: "October 24, 2024",
    changes: [
      "Added support for iOS 17 Live Activities.",
      "New 'Worm Chart' widget for home screen.",
      "Performance improvements for background updates."
    ]
  },
  {
    version: "v2.0.0",
    date: "September 15, 2024",
    changes: [
      "Major UI overhaul with glassmorphic design system.",
      "Added dark mode support.",
      "Fixed issue with scorecard caching."
    ]
  },
  {
    version: "v1.5.2",
    date: "August 1, 2024",
    changes: [
      "Initial release of Android Widgets.",
      "Bug fixes for notification delivery."
    ]
  }
];