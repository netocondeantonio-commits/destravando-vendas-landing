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
import { Check, Store, Rocket, Users, Ship, Lock } from "lucide-react";
import { ReactNode } from "react";

interface Produto {
  title: string;
  icon: ReactNode;
  tag: string;
  price: string | null;
  pixPrice?: string;
  priceNote?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  withRef?: boolean;
  benefitList: string[];
}

const produtos: Produto[] = [
  {
    title: "Ponto de Coleta",
    icon: <Store className="w-6 h-6 text-primary" />,
    tag: "Renda recorrente",
    price: "299,90",
    pixPrice: "269,91",
    description:
      "Receba encomendas das transportadoras e marketplaces e fature todo mês — do seu comércio ou de casa.",
    buttonText: "Quero ser ponto de coleta",
    buttonLink: "https://pagamentos.liquix.tech/comprar?plano=ponto",
    withRef: true,
    benefitList: [
      "11 redes com link de cadastro",
      "Mensagens prontas pra captar",
      "Como escalar e juntar com venda",
      "Acesso vitalício + updates",
    ],
  },
  {
    title: "Afiliado Express",
    icon: <Rocket className="w-6 h-6 text-primary" />,
    tag: "Sem estoque",
    price: "49,90",
    pixPrice: "44,91",
    description:
      "Comece sem investir em produto: ganhe comissão indicando ofertas dos marketplaces.",
    buttonText: "Quero o Afiliado Express",
    buttonLink: "https://pagamentos.liquix.tech/comprar?plano=afiliado",
    withRef: true,
    benefitList: [
      "Programas e como se cadastrar",
      "Perfil de achadinhos que vende",
      "Roteiros de divulgação prontos",
      "Sua 1ª comissão passo a passo",
    ],
  },
  {
    title: "Seja nosso afiliado",
    icon: <Users className="w-6 h-6 text-primary" />,
    tag: "Ganhe 20%",
    price: null,
    priceNote: "Grátis pra entrar",
    description:
      "Já tem público? Indique o curso e ganhe 20% em cada venda — pago todo dia 05, até em Bitcoin.",
    buttonText: "Quero ganhar indicando",
    buttonLink: "https://pagamentos.liquix.tech/afiliados",
    benefitList: [
      "20% por venda (e multinível)",
      "Cupom e link próprios",
      "Painel com suas comissões",
      "Receba em Pix, Bitcoin ou USDT",
    ],
  },
];

const emBreve = [
  "Fornecedores na China (1688 / Alibaba)",
  "Desembaraço e Remessa Conforme",
  "IA que acha e negocia com fornecedor",
  "Logística e controle de qualidade",
];

export const MaisProdutos = () => {
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
    <section id="mais-produtos" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Mais formas de{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          faturar
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8 max-w-2xl mx-auto">
        Além do curso, empilhe fontes de renda em cima do mesmo movimento — com ou sem estoque.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {produtos.map((p) => (
          <Card key={p.title}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  {p.icon}
                  {p.title}
                </span>
                <Badge variant="secondary" className="text-sm text-primary">
                  {p.tag}
                </Badge>
              </CardTitle>
              <div>
                {p.price ? (
                  <>
                    <span className="text-3xl font-bold">R$ {p.price}</span>
                    <span className="text-muted-foreground"> · pagamento único</span>
                  </>
                ) : (
                  <span className="text-3xl font-bold">{p.priceNote}</span>
                )}
              </div>
              {p.pixPrice ? (
                <div className="text-sm font-semibold text-primary mt-1">
                  no Pix: R$ {p.pixPrice}{" "}
                  <span className="font-normal text-muted-foreground">(10% OFF)</span>
                </div>
              ) : null}
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <a
                href={p.withRef ? withRef(p.buttonLink) : p.buttonLink}
                target="_blank"
                rel="noreferrer noopener"
                className={`w-full ${buttonVariants()}`}
              >
                {p.buttonText}
              </a>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {p.benefitList.map((benefit) => (
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

      {/* Teaser "Em breve" — Importar da China (Premium) */}
      <Card className="mt-10 border-dashed bg-muted/30">
        <CardHeader>
          <CardTitle className="flex items-center justify-between flex-wrap gap-2">
            <span className="flex items-center gap-2">
              <Ship className="w-6 h-6 text-primary" />
              Importar da China
            </span>
            <Badge variant="secondary" className="text-sm text-primary">
              <Lock className="w-3 h-3 mr-1" /> Em breve · exclusivo Premium
            </Badge>
          </CardTitle>
          <CardDescription>
            Em produção pra quem quer margem de verdade comprando na fonte. Já incluso para alunos Premium quando sair.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-3">
            {emBreve.map((t) => (
              <span key={t} className="flex items-center text-muted-foreground">
                <Check className="text-primary/70 w-5 h-5 mr-2 shrink-0" /> {t}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
