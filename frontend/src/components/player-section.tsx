"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Player } from "@/src/types/player";
import { Stats } from "@/src/types/stats";
import { playersList } from "../data/playersList";

export default function PlayerSection() {
  /*---PLAYER SELECTION MENU---*/

  const [actualPlayer, setActualPlayer] = useState("");

  const selectedPlayer = playersList.find((p) => p.name === actualPlayer);

  const defaultPlayerImage = "/assets/icons/default-player-icon.svg";

  /*---INSERTION OF API DATAS---*/
  
  

  return (
    <div>
      <section>
        <div className="relative mx-auto w-fit my-4 z-0">
          <select
            value={actualPlayer}
            onChange={(e) => setActualPlayer(e.target.value)}
            className="appearance-none px-4 py-2 bg-blue-600 text-white rounded"
          >
            <option>Select a player</option>

            {playersList.map((player) => (
              <option key={player.id} value={player.id}>
                {player.name}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="player-card">
          <div className="player-pic">
            <h2>{selectedPlayer?.label}</h2>
            <h3 className="pb-4 text-center">{selectedPlayer?.position}</h3>
            <Image
              src={selectedPlayer?.image || defaultPlayerImage}
              alt={`${selectedPlayer?.name} picture`}
              width={180}
              height={180}
              className="object-cover"
            />
          </div>

          <div className="player-stats">
            <div className="goals flex items-center">
              <Image
                src="/assets/icons/goal-icon.svg"
                alt="Goal icon"
                width={20}
                height={20}
              />
              <p className="ml-2">Goals</p>
              <div className="results"></div>
            </div>

            <div className="minutes flex items-center">
              <Image
                src="/assets/icons/clock-icon.svg"
                alt="Clock icon"
                width={20}
                height={20}
              />
              <p className="ml-2">Minutes</p>
              <div className="results"></div>
            </div>

            <div className="assists flex items-center">
              <Image
                src="/assets/icons/assist-icon.svg"
                alt="Assist icon"
                width={20}
                height={20}
              />
              <p className="ml-2">Assists</p>
              <div className="results"></div>
            </div>

            <div className="chances flex items-center">
              <Image
                src="/assets/icons/big-chances-icon.svg"
                alt="Big chances icon"
                width={20}
                height={20}
              />
              <p className="ml-2">Chances</p>
              <div className="results"></div>
            </div>

            <div className="dribbles flex items-center">
              <Image
                src="/assets/icons/dribble-icon.svg"
                alt="Dribble icon"
                width={20}
                height={20}
              />
              <p className="ml-2">Dribbles</p>
              <div className="results"></div>
            </div>

            <div className="goals flex items-center">
              <Image
                src="/assets/icons/passes-icon.svg"
                alt="Passes icon"
                width={20}
                height={20}
              />
              <p className="ml-2">Passes</p>
              <div className="results"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
