interface PlatformProps {
  name: string;
  cls: string;
}

const platforms: PlatformProps[] = [
  { name: "Shopee", cls: "text-[#ee4d2d]" },
  { name: "Shein", cls: "text-foreground" },
  { name: "TikTok Shop", cls: "text-[#fe2c55]" },
  { name: "Kwai", cls: "text-[#ffa100]" },
  { name: "Temu", cls: "text-[#fb7701]" },
];

export const Sponsors = () => {
  return (
    <section id="plataformas" className="container pt-6 pb-12">
      <h2 className="text-center text-sm font-semibold tracking-wide uppercase text-muted-foreground mb-7">
        Um método pra vender nos 5 maiores marketplaces
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-14">
        {platforms.map(({ name, cls }: PlatformProps) => (
          <span
            key={name}
            className={`text-2xl md:text-3xl font-extrabold tracking-tight opacity-75 hover:opacity-100 transition-opacity ${cls}`}
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
};
