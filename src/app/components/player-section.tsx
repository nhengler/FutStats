'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type Player = {
    id: string
    name: string
    image: string
    label: string
    href: string
}

export default function PlayerSection(){

    const playersList: Player[] = [
        { id: 'rodrygo', label: 'Rodrygo', name: 'Rodrygo', image: '/assets/Rodrygo.png', href:'' },
        { id: 'endrick', label: 'Endrick', name: 'Endrick', image: '/assets/Endrick.png', href:'' },
        { id: 'estevao', label: 'Estevão', name: 'Estevão', image: '/assets/Estevao.png', href:'' }
    ]

    const [actualPlayer, selectedPlayer] = useState ('')

    return(
        <div>
            <section>
                <div className='relative mx-auto w-fit my-4 z-0'>
                    <select value={actualPlayer} onChange={(e) => selectedPlayer(e.target.value)}
                    className='appearance-none px-4 py-2 bg-blue-600 text-white rounded'>
                        <option value="">Select a player</option>
                        <option value="Rodrygo" className='player-option'>Rodrygo</option>
                        <option value="Endrick" className='player-option'>Endrick</option>
                        <option value="Estevao" className='player-option'>Estevão</option>
                    </select>
                </div>
            </section>

            <section className='flex justify-center'>
                <div className='player-card'>
                    <div className='player-pic'>
                        <h2>Estevão</h2>
                        <Image
                            src='/assets/Estevao.png'
                            alt='Estevão picture'
                            width={180}
                            height={180}
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
 