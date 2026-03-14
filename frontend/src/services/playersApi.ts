import { Stats } from "../types/stats";

export async function fetchPlayerStats(params: {
  id: number;
  team: number;
  season: number;
}) {
  const searchParams = new URLSearchParams();

  searchParams.set("id", String(params.id)); // query string (URL) is ALWAYS text
  searchParams.set("team", String(params.team)); // query string (URL) is ALWAYS text
  searchParams.set("season", String(params.season)); // query string (URL) is ALWAYS text

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/players?${searchParams.toString()}`
  );

  console.log("params enviados:", params);

  if (!response.ok) {
    throw new Error(`Erro ao buscar stats: ${response.status}`);
  }

  const data = await response.json();

  const statistics = Array.isArray(data) ? data [0] : data;

  return {
    goals: statistics.goals ?? 0,
    assists: statistics.assists ?? 0,
    passes: statistics.passes ?? 0,
    dribbles: statistics.dribbles ?? 0,
    chances: statistics.chances ?? 0,
    minutes: statistics.minutes ?? 0,
  };
}
