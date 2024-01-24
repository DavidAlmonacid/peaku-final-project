import { CircledArrow } from "./Icons";

export function GameCard({ game }) {
  return (
    <article className="flex flex-col items-center w-fit">
      <figure className="relative aspect-[4/5] w-44 rounded-xl overflow-hidden">
        <img
          src={game.image_url}
          alt={game.name}
          className="h-full object-cover scale-150"
        />
        <figcaption className="absolute top-0 w-full h-full flex items-end bg-gradient-to-b from-white/0 via-accent-night/30 via-60% to-accent-night/90">
          <span className="text-accent-antiflash-white text-xs mx-2.5 mb-6 line-clamp-2 drop-shadow-lg">
            {game.name}
          </span>
        </figcaption>
      </figure>

      <button className="bg-gradient-to-r from-accent-slate-gray to-accent-night font-medium text-accent-antiflash-white flex justify-center items-center gap-x-2.5 w-[80%] py-2.5 rounded-xl -mt-3 z-10 text-sm">
        <span className="drop-shadow-lg">View details</span>
        <CircledArrow />
      </button>
    </article>
  );
}
