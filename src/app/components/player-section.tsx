'use client'
import React, { useState, useEffect } from 'react';

type Player = {
    id: string
    label: string
    href: string
}

export default function PlayerSection(){
    
    const playersList: Player[] = [
        { id: 'rodrygo', label: 'Rodrygo', href:'' },
        { id: 'endrick', label: 'Endrick', href:'' },
        { id: 'estevao', label: 'Estevão', href:'' }
    ]

    return(
        <section>
            <button>
                Select a player
            </button>
        </section>
    )
}