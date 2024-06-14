import Game from "./Game"

export default function Content(){
    const FeedGames = [
        {
            Name: "Just Chatting",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            Viewers:"185.7K",
            Tags:["IRL(vida real)","Shooter"]
        },
        {
            Name: "Rust",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
            Viewers:"185.7K",
            Tags:["Shooter en primer persona"]
        },
        {
            Name: "League of Legends",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
            Viewers:"185.7K",
            Tags:["Juego de rol","Estrategia"]
        },
        {
            Name: "Warzone",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
            Viewers:"185.7K",
            Tags:["Shooter en primer persona"]
        },
        {
            Name: "Valorant",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
            Viewers:"185.7K",
            Tags:["Shooter en primer persona"]
        },
        {
            Name: "Special Events",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
            Viewers:"185.7K",
            Tags:["IRL(vida real)"]
        },
        {
            Name: "Fornite",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
            Viewers:"185.7K",
            Tags:["Juego de rol","Shooter"]
        },
        {
            Name: "Kings League",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
            Viewers:"185.7K",
        },
        {
            Name: "Talk shows y podcasts",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/417752-285x380.jpg",
            Viewers:"185.7K",
            Tags:["IRL(vida real)"]
        },
        {
            Name: "Minecraft",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
            Viewers:"185.7K",
            Tags:["Simulacion"]
        },
        {
            Name: "Grand Theft Auto V",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg",
            Viewers:"185.7K",
            Tags:["Shooter en primer persona"]
        },
        {
            Name: "IRL",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/509672-285x380.jpg",
            Viewers:"185.7K",
            Tags:["IRL(vida real)"]
        },
        {
            Name: "EA Sports FC 24",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/143106037_IGDB-285x380.jpg",
            Viewers:"185.7K",
            Tags:["Simulacion","Deportes"]
        },
        {
            Name: "Tom Clancy's ...",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/460630_IGDB-285x380.jpg",
            Viewers:"185.7K",
            Tags:["Shooter en primer persona"]
        },
        {
            Name: "ELDEN RING",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg",
            Viewers:"185.7K",
            Tags:["Juego de rol"]
        },
        {
            Name: "Bodycam",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/1910993272_IGDB-285x380.jpg",
            Viewers:"185.7K",
            Tags:["Simulacion","Estrategia"]
        },
        
        
    ]
    return <section className="bg-[#0E0E10]">
        <section className="grid grid-cols-8 p-4 gap-1">
        {FeedGames.map((game)=>{
            return (
                <Game 
                key={`Juego-${game.Name}`}
                Name={game.Name} 
                Image={game.Image} 
                Viewers={game.Viewers} 
                Tags={game.Tags} 
                />
            )
        })}
        </section>
    </section>
}