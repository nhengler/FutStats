"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import { RadarData } from "../types/radarData";

interface Props {
  data: RadarData[];
}

export default function PlayerRadar({ data }: Props) {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="attribute" />
          <Radar
            dataKey="value"
            stroke="#22c55e"
            fill="#22c55e"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
