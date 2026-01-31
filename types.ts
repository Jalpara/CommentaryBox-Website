export interface Batter {
  id: number;
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  isOnStrike: boolean;
}

export interface Bowler {
  id: number;
  name: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
}

export interface MatchData {
  teamHome: string;
  teamAway: string;
  scoreHome: string;
  wicketsHome: number;
  oversHome: number;
  batters: Batter[];
  bowler: Bowler;
  projectedScore: number;
  requiredRate?: number;
}
