import spidermanHero from "../assets/spiderman-hero.png";

export function Hero({ promoGame }) {
  const splitName = promoGame?.name?.split(" - ").at(-1);

  return (
    <div className="px-5 py-12">
      <div className="flex flex-col sm:flex-row items-end mx-auto max-w-3xl sm:max-h-[272px] bg-accent-timberwolf rounded-2xl">
        <section className="flex-auto flex flex-col gap-y-7 px-6 pt-11 pb-5 sm:w-1/2 sm:px-4 sm:py-5">
          <h2 className="text-4xl font-bold sm:text-2xl">{splitName}</h2>
          <p className="line-clamp-5 xs:line-clamp-4 sm:line-clamp-3 text-pretty">
            {promoGame?.description}
          </p>

          <section className="flex justify-center sm:justify-start gap-x-5 *:py-2.5 *:px-6 *:rounded-xl *:text-sm *:font-medium">
            <button className="bg-primary-royal-blue text-accent-antiflash-white">
              Buy now
            </button>

            <button className="ring-1 ring-inset ring-primary-royal-blue text-primary-royal-blue bg-accent-antiflash-white">
              Add to cart
            </button>
          </section>
        </section>

        <picture className="flex-auto self-center px-6 pt-5 pb-11 sm:w-1/2 sm:h-96 sm:px-4 sm:py-0 sm:self-end">
          <img
            src={spidermanHero}
            alt="Spiderman"
            className="w-full max-w-md h-full object-scale-down shadow-black drop-shadow-xl"
          />
        </picture>
      </div>
    </div>
  );
}
