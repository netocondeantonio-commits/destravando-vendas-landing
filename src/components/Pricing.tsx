import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingProps {
  title: string;
  popular: number;
  price: number;
  pixPrice: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: 54,
    pixPrice: "48,60",
    description: "Pra começar: fundamentos + 1 plataforma.",
    buttonText: "Começar",
    buttonLink: "https://pagamentos.liquix.tech/comprar?plano=starter",
    benefitList: [
      "Fundamentos + Trilha principal",
      "1 plataforma à sua escolha",
      "Planilha de precificação",
      "Acesso vitalício",
      "Atualizações toda semana",
    ],
  },
  {
    title: "Pro",
    popular: 1,
    price: 112,
    pixPrice: "100,80",
    description: "O mais escolhido: tudo, nas 5 plataformas.",
    buttonText: "Quero o Pro",
    buttonLink: "https://pagamentos.liquix.tech/comprar?plano=pro",
    benefitList: [
      "As 5 plataformas",
      "Trilha de afiliados completa",
      "Todas as planilhas + Kit do Seller",
      "Otimizador de anúncio com IA",
      "Acesso vitalício + updates",
    ],
  },
  {
    title: "Premium",
    popular: 0,
    price: 227,
    pixPrice: "204,30",
    description: "Pro + mentoria e acompanhamento.",
    buttonText: "Quero o Premium",
    buttonLink: "https://pagamentos.liquix.tech/comprar?plano=premium",
    benefitList: [
      "Tudo do Pro",
      "Mentoria / grupo de suporte",
      "Estratégias em primeira mão",
      "Acompanhamento de resultados",
      "Acesso vitalício + updates",
    ],
  },
];

export const Pricing = () => {
  const ref = (() => {
    if (typeof window === "undefined") return null;
    const KEY = "dv_ref";
    const urlRef = new URLSearchParams(window.location.search).get("ref");
    try {
      if (urlRef) {
        localStorage.setItem(KEY, JSON.stringify({ c: urlRef, t: Date.now() }));
        return urlRef;
      }
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const o = JSON.parse(raw);
        if (o && o.c && Date.now() - o.t < 30 * 86400000) return o.c; // atribuição 30 dias
      }
    } catch (e) {}
    return urlRef;
  })();
  const withRef = (url: string) =>
    ref ? url + (url.includes("?") ? "&" : "?") + "ref=" + encodeURIComponent(ref) : url;
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Escolha como{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          começar
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Acesso imediato por Pix ou cartão. Conteúdo novo toda semana, sem pagar de novo. Preço de lançamento por tempo limitado.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === 1
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === 1 ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Mais escolhido
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">R$ {pricing.price}</span>
                <span className="text-muted-foreground"> · pagamento único</span>
              </div>
              <div className="text-sm font-semibold text-primary mt-1">
                no Pix: R$ {pricing.pixPrice}{" "}
                <span className="font-normal text-muted-foreground">(10% OFF)</span>
              </div>
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <a
                href={withRef(pricing.buttonLink)}
                target="_blank"
                rel="noreferrer noopener"
                className={`w-full ${buttonVariants()}`}
              >
                {pricing.buttonText}
              </a>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
