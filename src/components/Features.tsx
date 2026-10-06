import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Mais vendas, no método",
    description:
      "Do primeiro anúncio à escala: título que converte, as palavras-chave certas, como o algoritmo te entrega mais e como virar visita em pedido. Cada aula termina numa ação prática.",
    image: image4,
  },
  {
    title: "As 5 plataformas, sem achismo",
    description:
      "Trilha própria pra Shopee, Shein, TikTok Shop, Kwai e Temu: taxas, motor de busca, promoções e as punições de cada uma — pra você não perder venda por detalhe.",
    image: image3,
  },
  {
    title: "IA pra operar a loja sozinho",
    description:
      "Use IA pra criar e otimizar anúncios, responder cliente, cuidar da reputação, prever estoque e ler suas métricas. Mais planilhas com fórmulas e o Kit do Seller.",
    image: image,
  },
];

const featureList: string[] = [
  "Fundamentos",
  "Anúncio & SEO",
  "Palavras-chave",
  "Algoritmo",
  "Tráfego & Lives",
  "Afiliados",
  "IA pra gerenciar a loja",
  "Planilhas",
  "Operar a loja",
  "Kit do Seller",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Tudo o que você precisa pra{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          vender todo dia
        </span>
      </h2>

      <p className="md:text-center text-lg text-muted-foreground max-w-2xl mx-auto">
        Nada de teoria solta. É o passo a passo que todo vendedor procura: montar a
        loja, fazer o anúncio aparecer, gerar tráfego e transformar visita em venda —
        e repetir isso toda semana, agora com a IA fazendo o trabalho pesado por você.
      </p>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt={title}
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
