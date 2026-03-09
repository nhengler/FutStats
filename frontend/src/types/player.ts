import { Stats } from "./stats";

export type Player = {
  id: number;
  name: string;
  team: number;
  teamName: string;
  image: string;
  position: string;
  label: string;
  season: number;
  stats: Stats;
};
