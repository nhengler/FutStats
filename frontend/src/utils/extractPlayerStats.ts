import { PlayerResponseDto } from "../../../backend/src/api-football/dto/get-players.response.dto";

export function extractRadarInputs(playerData: PlayerResponseDto) {
  const goals = Number(playerData?.goals ?? 0);
  const assists = Number(playerData?.assists ?? 0);
  const minutes = Number(playerData?.minutes ?? 0);
  const passes = Number(playerData?.passes ?? 0);
  const chances = Number(playerData?.chances ?? 0);
  const dribbles = Number(playerData?.dribbles ?? 0);

  return { goals, assists, minutes, passes, chances, dribbles };
}
