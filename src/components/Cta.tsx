import { buttonVariants } from "./ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Comece a vender nas{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              5 plataformas
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Um método, todas as ferramentas e conteúdo novo toda semana. Sua
            próxima venda começa agora.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a
            href="#pricing"
            className={`w-full md:mr-4 md:w-auto px-8 ${buttonVariants()}`}
          >
            Ver planos e começar
          </a>
        </div>
      </div>
    </section>
  );
};
