import { heroMarqueeRowOne, heroMarqueeRowTwo } from "@/mocks/homeMedia";

type MarqueeRowProps = {
  images: string[];
  direction: "left" | "right";
};

function MarqueeRow({ images, direction }: MarqueeRowProps) {
  const loop = [...images, ...images];

  return (
    <div className="marquee-wrap overflow-hidden">
      <div
        className={`flex w-max gap-4 ${
          direction === "left" ? "marquee-track-left" : "marquee-track-right"
        }`}
      >
        {loop.map((src, index) => (
          <figure
            key={`${src}-${index}`}
            className="h-[130px] w-[220px] shrink-0 overflow-hidden rounded-lg border border-background-200 bg-background-100 md:h-[168px] md:w-[280px]"
          >
            <img
              src={src}
              alt="TeleRay virtual care and medical imaging in use"
              title="TeleRay platform in clinical use"
              className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function ImageMarquee() {
  return (
    <section className="bg-background-100/70 py-10 md:py-14" aria-label="Platform gallery">
      <div className="flex flex-col gap-4">
        <MarqueeRow images={heroMarqueeRowOne} direction="left" />
        <MarqueeRow images={heroMarqueeRowTwo} direction="right" />
      </div>
    </section>
  );
}