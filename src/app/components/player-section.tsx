'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type Player = {
    id: string
    name: string
    image: string
    label: string
    stats: {
        goals: number
        assists: number
        passes: number
        dribbles: number
        bigChances: number
        minutes: number
    }
}

export default function PlayerSection(){

    const playersList: Player[] = [
        { 
            id: 'rodrygo', 
            label: 'Rodrygo', 
            name: 'Rodrygo', 
            image: '/assets/Rodrygo.png', 
            stats: {
                goals: 0,
                assists: 0,
                passes: 0,
                dribbles: 0,
                bigChances: 0,
                minutes: 0
            }
        },

        {
            id: 'endrick', 
            label: 'Endrick', 
            name: 'Endrick', 
            image: '/assets/Endrick.png',
            stats: {
                goals: 0,
                assists: 0,
                passes: 0,
                dribbles: 0,
                bigChances: 0,
                minutes: 0
            }
        },

        { 
            id: 'estevao', 
            label: 'Estevão', 
            name: 'Estevão', 
            image: '/assets/Estevao.png',
            stats: {
                goals: 0,
                assists: 0,
                passes: 0,
                dribbles: 0,
                bigChances: 0,
                minutes: 0
            }
        }
    ]

    const [actualPlayer, setActualPlayer] = useState ('')

    const selectedPlayer = playersList.find(p => p.id === actualPlayer)

    return(
        <div>
            <section>
                <div className='relative mx-auto w-fit my-4 z-0'>
                    
                    <select value={actualPlayer} onChange={(e) => setActualPlayer(e.target.value)}
                        className='appearance-none px-4 py-2 bg-blue-600 text-white rounded'>
                        
                        <option>Select a player</option>
                        
                        {playersList.map(player => (
                            <option key = {player.id} value = {player.id}>
                                {player.name}
                            </option>
                        ))}
                    </select>
                
                </div>
            
            </section>

            <section className='flex justify-center'>
                <div className='player-card'>
                    <div className='player-pic'>
                        <h2>{selectedPlayer?.label}</h2>
                        <Image
                            src={selectedPlayer?.image}
                            alt={`${selectedPlayer?.name} picture`}
                            width={180}
                            height={180}
                            className='object-cover'
                        />
                    </div>

                    <div className='player-stats'>
                        <div className='goals flex items-center'>  
                            <Image
                                src='/assets/goal-icon.svg'
                                alt='Goal icon'
                                width={20}
                                height={20}
                            />
                            <p className='ml-2'>Goals</p>
                        </div>

                        <div className='big-chances flex items-center'>  
                            <Image
                                src='/assets/clock-icon.svg'
                                alt='Goal icon'
                                width={20}
                                height={20}
                            />
                            <p className='ml-2'>Minutes</p>
                        </div> 

                        <div className='assists flex items-center'>  
                            <Image
                                src='/assets/assist-icon.svg'
                                alt='Assist icon'
                                width={20}
                                height={20}
                            />
                            <p className='ml-2'>Assists</p>
                        </div>

                        <div className='big-chances flex items-center'>  
                            <Image
                                src='/assets/big-chances-icon.svg'
                                alt='Big chances icon'
                                width={20}
                                height={20}
                            />
                            <p className='ml-2'>Chances</p>
                        </div>
                        

                        <div className='dribbles flex items-center'>  
                            <Image
                                src='/assets/dribble-icon.svg'
                                alt='Dribble icon'
                                width={20}
                                height={20}
                            />
                            <p className='ml-2'>Dribbles</p>
                        </div>

                        <div className='goals flex items-center'>  
                            <Image
                                src='/assets/passes-icon.svg'
                                alt='Goal icon'
                                width={20}
                                height={20}
                            />
                            <p className='ml-2'>Passes</p>
                        </div>    
                    </div>
                </div>
            </section>
        </div>
    )
}
 