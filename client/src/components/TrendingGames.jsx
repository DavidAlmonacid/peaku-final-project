import { GameCard } from "./GameCard";

export function TrendingGames({ games }) {
  return (
    <section className="max-w-[832px] mx-auto px-4 bg-accent-timberwolf rounded-3xl py-9">
      <h2 className="text-2xl font-medium mb-7">Trending games</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-x-8 gap-y-12 w-fit">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
