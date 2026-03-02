import { Stats } from "@/src/types/stats";

export function per90(stat: number, minutes: number) {
  if (!minutes || minutes <= 0) return 0;
  return (stat / minutes) * 90;
}

export function normalize(value: number, max: number) {
  return Math.min((value / max) * 100, 100);
}

const WEIGHTS = {
  goals: 2.0,
  assists: 1.4,
  chances: 1.2,
  dribbles: 1.0,
  passes: 0.15,
};

const MAX = {
  ATT: 2.0,
  CRE: 6.5,
  TEC: 5.0,
  DRI: 4.5,
};

export function buildRadarStats(input: Stats) {
  const goals90 = per90(input.goals, input.minutes);
  const assists90 = per90(input.assists, input.minutes);
  const chances90 = per90(input.chances, input.minutes);
  const dribbles90 = per90(input.dribbles, input.minutes);
  const passes90 = per90(input.passes, input.minutes);

  const ATT = goals90 * WEIGHTS.goals + assists90 * WEIGHTS.assists;

  const CRE =
    chances90 * WEIGHTS.chances +
    dribbles90 * WEIGHTS.dribbles +
    passes90 * WEIGHTS.passes;

  const TEC = chances90 * WEIGHTS.chances + dribbles90 * WEIGHTS.dribbles;

  const DRI = dribbles90 * WEIGHTS.dribbles;

  return [
    { label: "ATT", value: normalize(ATT, MAX.ATT) },
    { label: "CRE", value: normalize(CRE, MAX.CRE) },
    { label: "TEC", value: normalize(TEC, MAX.TEC) },
    { label: "DRI", value: normalize(DRI, MAX.DRI) },
  ];
}
