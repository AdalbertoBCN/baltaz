"use client"
import { ChampionProps } from '@/types/champions.interface';
import { RefreshCcw } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function RandomChampCard() {
    const [champions, setChampions] = React.useState<ChampionProps[] | null>(null);
    const [currentChampionIndex, setCurrentChampionIndex] = React.useState<number | null>(null);

    React.useEffect(() => {
        fetch("/api/champions", {
            cache: "force-cache"
        }).then((res) => res.json())
            .then((data) => {
                setChampions(data.data);
                
                setCurrentChampionIndex(Math.floor(Math.random() * data.data.length));
            });
    }, []);

    const handleCardClick = () => {
        if (champions && champions.length > 0) {
            
            const newIndex = Math.floor(Math.random() * champions.length);
            setCurrentChampionIndex(newIndex);
        }
    };

    return (
        <>
            {champions && currentChampionIndex !== null ? (
                <div className="mt-4 flex justify-between gap-2 p-4 items-center bg-gray-600 group hover:bg-gray-500 cursor-pointer rounded-lg" onClick={handleCardClick}>
                    <div className='flex gap-2 items-center'>
                        <Image src={champions[currentChampionIndex].icon.src} alt={champions[currentChampionIndex].name} width={champions[currentChampionIndex].icon.width} height={champions[currentChampionIndex].icon.height} className="size-full max-w-12 rounded-full" />
                        <span className="">{champions[currentChampionIndex].name}</span>
                    </div>
                    <RefreshCcw className="w-max group-hover:rotate-90 transition-transform" />
                </div>
            )
                : (
                    <div className="mt-4 flex justify-between gap-2 p-4 items-center bg-gray-600 rounded-lg">
                        <div className='size-12 rounded-full animate-pulse bg-zinc-400'/>
                        <div className='w-20 h-3 bg-zinc-400 animate-pulse'/>
                        <div className='size-5 ml-auto bg-zinc-400 rounded-full animate-pulse'/>
                    </div>

                )
            }
        </>
    );
}
