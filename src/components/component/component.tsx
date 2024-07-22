"use client"
import { ChampionProps } from "@/types/champions.interface"
import RandomChampCard from "../RandomChampCard";
import ChampCard from "../ChampCard";
import { useEffect, useState } from "react";

export function Component() {
  const [champions, setChampions] = useState<ChampionProps[] | null>(null);
  const [flipAllCards, setFlipAllCards] = useState(true);

  useEffect(() => {
      fetch("/api/champions", {
        cache: "force-cache"
      }).then((res) => res.json())
        .then((data) => {
          setChampions(data.data);
        });
  }, []);

  const handleReset = () => {
    setFlipAllCards(!flipAllCards);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800">
      <header className="w-full p-4 text-center text-white bg-gray-900">
        <h1 className="text-2xl font-bold">Who&apos;s Who</h1>
      </header>
      <div className="flex flex-col md:flex-row w-full max-w-7xl p-2 md:p-4 justify-center">
        <aside className="min-w-60 flex-shrink-0 w-full md:w-1/4 p-4 bg-gray-700 text-white rounded-lg">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Regras</h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="bg-gray-600 px-4 py-2 rounded-lg">Se Divirta</li>
              <li className="bg-gray-600 px-4 py-2 rounded-lg">Passe o Pix</li>
            </ul>
          </div>
          <div className="mb-4">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 p-4 bg-primary text-primary-foreground rounded-lg w-full transition-colors hover:bg-primary/80"
            >
              <RefreshCwIcon className="h-5 w-5" />
              <span>Reiniciar</span>
            </button>
            <RandomChampCard/>
          </div>
          <footer className="mt-4 text-xs text-gray-400">© Baltz.fun 2024. Todos os direitos reservados.</footer>
        </aside>
        <main className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:p-2 md:gap-1">
          {champions ? champions.map((character: ChampionProps) => (
            <ChampCard key={character.name} character={character} isFlipped={flipAllCards} />
          ))
        : Array.from({ length: 24 }).map((_, index) => (
          <ChampCard key={index} character={null} isFlipped={flipAllCards} />
        ))}
        </main>
      </div>
    </div>
  )
}

function RefreshCwIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}
