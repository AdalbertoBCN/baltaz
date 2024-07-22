"use client"
import { ChampionProps } from '@/types/champions.interface';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip';

interface ChampProps {
    character: ChampionProps | null;
    isFlipped: boolean;
}

export default function ChampCard({ character, isFlipped }: ChampProps) {
    const [isFlippedCard, setIsFlippedCard] = useState(true);

    useEffect(() => {
        if (isFlippedCard == false) {
            setIsFlippedCard(true);
        }
    }, [isFlipped]);

    function handleFlip(){
        setIsFlippedCard(!isFlippedCard);
    }

    return (
        <ReactCardFlip isFlipped={isFlippedCard} flipDirection='vertical' containerClassName='select-none'>
            
            <div className="relative p-2" onClick={handleFlip}>
                {character ? (
                    <div key={character.name} className="p-2 rounded-lg cursor-pointer sele">
                        <Image src="/logoScreen.svg" alt={character.name} width={character.img.width} height={character.img.height} className="w-full h-auto aspect-video md:aspect-square object-cover rounded-lg md:hidden lg:hidden" />
                        <Image src="/logo.svg" alt={character.name} width={character.icon.width} height={character.icon.height} className="w-full h-auto aspect-video md:aspect-square object-cover rounded-lg hidden md:block" />
                        <p className="mt-2 text-center text-white">&nbsp;&nbsp;</p>
                    </div>
                ) : (
                    <div className='flex flex-col items-center gap-y-2 p-2'>
                        <div className="w-64 h-32 md:w-32 bg-gray-400 rounded-lg animate-pulse"></div>
                        <div className='w-20 h-4 bg-gray-400 animate-pulse'/>
                    </div>
                )}
            </div>

            <div className="relative p-2" onClick={handleFlip}>
                {character ? (
                    <div key={character.name} className="bg-gray-800 p-2 rounded-lg cursor-pointer">
                        <Image src={character.img.src} alt={character.name} width={character.img.width} height={character.img.height} className="w-full h-auto aspect-video md:aspect-square object-cover rounded-lg md:hidden lg:hidden" />
                        <Image src={character.icon.src} alt={character.name} width={character.icon.width} height={character.icon.height} className="w-full h-auto aspect-video md:aspect-square object-cover rounded-lg hidden md:block" />
                        <p className="mt-2 text-center text-white text-nowrap">{character.name}</p>
                    </div>
                ) : (
                    <div className='flex flex-col items-center gap-y-2 p-2'>
                        <div className="w-64 h-32 md:w-32 bg-gray-400 rounded-lg animate-pulse"></div>
                        <div className='w-20 h-4 bg-gray-400 animate-pulse'/>
                    </div>
                )}
            </div>
        </ReactCardFlip>
    )
}
