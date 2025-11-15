'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react' 
import Link from 'next/link'
import Image from 'next/image'

type MenuItem = {
    id: string
    label: string
    href: string
}

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const menuItems: MenuItem[] = [
        { id: 'home', label: 'Home', href:'' },
        { id: 'ranking', label: 'Ranking', href:'' },
        { id: 'comparison', label: 'Comparison', href:'' }
    ];

    function openMenu(): void {
        setIsOpen(prevState => !prevState);
    }

    function closeMenu(): void {
        setIsOpen(false);
    }

    useEffect(function(){
        function pressBtn(keyboardButton: KeyboardEvent): void {
            if (keyboardButton.key === 'Escape') {
                setIsOpen(false);
            }
        }

        window.addEventListener('keydown', pressBtn);

        return function(){
            window.removeEventListener('keydown', pressBtn);
        };
    }, [isOpen]);

    return (
        <header className='flex flex-row header-bg'>
            <div className='flex'>
                <Image
                    src='/assets/logo.svg'
                    alt='Logo do site'
                    width={120}
                    height={120}
                    className='w-16 p-2'
                />
                
                <span className='flex items-center font-bold text-amber-50 text-lg pl-2'>
                    FutStats
                </span>
                
                <div className='md:hidden'>
                    <button
                        type='button'
                        onClick={openMenu}
                    >
                        {isOpen ? <X size={20}/> : <Menu size={20}/>}
                    </button>
                </div>

                <div 
                    className={`
                        flex flex-col gap-2
                        transition-all duration-200 ease-in-out
                        ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}
                    `}
                >
                    {menuItems.map(item => (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={closeMenu}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

            </div>
        </header>
    );
}
