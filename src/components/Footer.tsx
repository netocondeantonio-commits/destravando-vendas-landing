import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
        <div className="col-span-full md:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center gap-2"
          >
            <LogoIcon />
            Destravando as Vendas
          </a>
          <p className="opacity-60 mt-3 max-w-xs text-sm">
            Curso de seller para Shopee, Shein, TikTok Shop, Kwai e Temu. Do
            básico ao avançado, atualizado toda semana.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Curso</h3>
          <a href="#features" className="opacity-60 hover:opacity-100">O que você recebe</a>
          <a href="#pricing" className="opacity-60 hover:opacity-100">Planos</a>
          <a href="#faq" className="opacity-60 hover:opacity-100">Dúvidas</a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Acesso</h3>
          <a
            rel="noreferrer noopener"
            href="https://cursos.liquix.tech/login"
            target="_blank"
            className="opacity-60 hover:opacity-100"
          >
            Entrar no curso
          </a>
          <a href="#pricing" className="opacity-60 hover:opacity-100">Matricular</a>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3 className="opacity-60 text-sm">
          &copy; 2026 Destravando as Vendas. Resultados variam conforme esforço,
          produto e mercado. Não há garantia de renda.
        </h3>
      </section>
    </footer>
  );
};
