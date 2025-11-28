'use client'
import React, { useState, useEffect } from 'react';
import { CircleChevronDown } from 'lucide-react'

type Player = {
    id: string
    label: string
    href: string
}

export default function PlayerSection(){

    const [isOpen, setIsOpen] = useState <boolean> (false)

    const playersList: Player[] = [
        { id: 'rodrygo', label: 'Rodrygo', href:'' },
        { id: 'endrick', label: 'Endrick', href:'' },
        { id: 'estevao', label: 'Estevão', href:'' }
    ]

    function openMenu(){
        setIsOpen(prevState => !prevState )
    }

    function closeMenu(){
        setIsOpen(false)
    }

    return(
        <section>
           <div className='relative mx-auto w-fit my-4 z-0'>
                <select className='appearance-none px-4 py-2 bg-blue-600 text-white rounded'>
                    <option value="">Select a player</option>
                    <option value="rodrygo" className='player-option'>Rodrygo</option>
                    <option value="endrick" className='player-option'>Endrick</option>
                    <option value="estevao" className='player-option'>Estevão</option>
                </select>
           </div>
        </section>
    )
}
 