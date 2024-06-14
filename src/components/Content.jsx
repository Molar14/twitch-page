import Game from "./Game"

export default function Content(){
    const FeedGames = [
        {
            Name: "Just Chatting",
            Image:"https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
            Viewers:"185.7K",
            Tags:["IRL(vida real)","Shooter"]
        }
    ]
    return <section className="bg-[#0E0E10]">
        <section >
        {FeedGames.map((game)=>{
            return (
                <Game 
                key={`Juego-${game.Name}`}
                Name={game.Name} 
                Image={game.Image} 
                title={game.Viewers} 
                Tags={game.Tags} 
                />
            )
        })}
        </section>
    </section>
}