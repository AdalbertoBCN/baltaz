import { ChampionProps } from "@/types/champions.interface";

export function GET() {
    return Response.json({
        data: <ChampionProps[]>[
            { 
                name: "Fizz", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Fizz.png", width: 120, height: 120 },
            },
            { 
                name: "Shen", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Shen.png", width: 120, height: 120 },
            },
            { 
                name: "Twisted Fate", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/TwistedFate.png", width: 120, height: 120 },
            },
            { 
                name: "Lillia", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Lillia.png", width: 120, height: 120 },
            },
            { 
                name: "Hecarim", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Hecarim.png", width: 120, height: 120 },
            },
            { 
                name: "Miss Fortune", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/MissFortune.png", width: 120, height: 120 },
            },
            { 
                name: "Sona", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Sona.png", width: 120, height: 120 },
            },
            { 
                name: "Ziggs", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Ziggs.png", width: 120, height: 120 },
            },
            { 
                name: "Gangplank", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Gangplank.png", width: 120, height: 120 },
            },
            { 
                name: "Yuumi", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Yuumi.png", width: 120, height: 120 },
            },
            { 
                name: "Nilah", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nilah_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Nilah.png", width: 120, height: 120 },
            },
            { 
                name: "Tristana", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Tristana.png", width: 120, height: 120 },
            },
            { 
                name: "Lux", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Lux.png", width: 120, height: 120 },
            },
            { 
                name: "Karthus", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Karthus.png", width: 120, height: 120 },
            },
            { 
                name: "Akali", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Akali.png", width: 120, height: 120 },
            },
            { 
                name: "Akshan", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Akshan.png", width: 120, height: 120 },
            },
            { 
                name: "Jarvan IV", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/JarvanIV.png", width: 120, height: 120 },
            },
            { 
                name: "Thresh", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Thresh.png", width: 120, height: 120 },
            },
            { 
                name: "Tahm Kench", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/TahmKench.png", width: 120, height: 120 },
            },
            { 
                name: "Kennen", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Kennen.png", width: 120, height: 120 },
            },
            { 
                name: "Rumble", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Rumble.png", width: 120, height: 120 },
            },
            { 
                name: "Senna", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Senna.png", width: 120, height: 120 },
            },
            { 
                name: "Ezreal", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Ezreal.png", width: 120, height: 120 },
            },
            { 
                name: "Poppy", 
                img: { src: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg", width: 1215, height: 717 },
                icon: { src: "https://ddragon.leagueoflegends.com/cdn/14.14.1/img/champion/Poppy.png", width: 120, height: 120 },
            },
        ],
    });
}
