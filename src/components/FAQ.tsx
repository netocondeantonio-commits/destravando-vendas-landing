import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Preciso ter CNPJ para começar?",
    answer:
      "Para afiliado, não precisa (basta CPF). Para vender como lojista, a maioria das plataformas pede CNPJ/MEI — e o curso mostra como abrir e organizar isso.",
    value: "item-1",
  },
  {
    question: "Funciona para quem nunca vendeu?",
    answer:
      "Sim. A primeira trilha é do zero, com uma vitória rápida logo no começo. Você avança no seu ritmo.",
    value: "item-2",
  },
  {
    question: "O conteúdo fica desatualizado?",
    answer:
      "Não. As plataformas mudam o tempo todo e o curso é atualizado toda semana com novas estratégias, dicas e ferramentas — sem pagar de novo.",
    value: "item-3",
  },
  {
    question: "Serve para afiliado (vender sem estoque)?",
    answer:
      "Sim. Tem uma trilha inteira de afiliados: como entrar nos programas, escolher produto, divulgar e bater a primeira comissão.",
    value: "item-4",
  },
  {
    question: "Como pago e quando libera o acesso?",
    answer:
      "Por Pix ou cartão. O acesso é liberado automaticamente assim que o pagamento é confirmado, no e-mail que você informar.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Perguntas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          frequentes
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Ainda com dúvida?{" "}
        <a
          rel="noreferrer noopener"
          href="#pricing"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Veja os planos
        </a>
      </h3>
    </section>
  );
};
