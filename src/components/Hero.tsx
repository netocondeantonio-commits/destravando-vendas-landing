import { buttonVariants } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container py-20 md:py-28 text-center max-w-4xl mx-auto space-y-6">
      <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 rounded-full px-3 py-1">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        Conteúdo novo toda semana
      </div>

      <main className="text-5xl md:text-6xl font-bold leading-[1.1]">
        <h1 className="inline">
          Transforme sua loja numa{" "}
          <span className="inline bg-gradient-to-r from-[#15d6b6] to-[#0e8c7f] text-transparent bg-clip-text">
            máquina de vendas
          </span>
        </h1>
      </main>

      <p className="text-xl text-muted-foreground mx-auto max-w-2xl">
        O que todo vendedor quer é o mesmo:{" "}
        <strong className="text-foreground">vender todo dia</strong>. Aqui está o
        método completo pra você sair do zero e escalar nos 5 maiores marketplaces
        — Shopee, Shein, TikTok Shop, Kwai e Temu — com anúncio que vende, tráfego,
        afiliados e IA pra operar a loja.
      </p>

      <div className="space-y-4 md:space-y-0 md:space-x-4">
        <a href="#pricing" className={`w-full md:w-auto px-8 ${buttonVariants()}`}>
          Quero vender mais
        </a>
        <a
          rel="noreferrer noopener"
          href="#features"
          className={`w-full md:w-auto px-8 ${buttonVariants({ variant: "outline" })}`}
        >
          Ver o que você recebe
        </a>
      </div>

      <p className="text-sm text-muted-foreground pt-2">
        Grátis:{" "}
        <a
          href="/calculadora.html"
          className="text-primary font-semibold underline underline-offset-2"
        >
          Calculadora de Lucro do Seller
        </a>{" "}
        — veja quanto sobra em cada marketplace.
      </p>

      <div className="shadow"></div>
    </section>
  );
};
