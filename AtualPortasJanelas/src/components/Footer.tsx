import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">
              Atual <span className="text-secondary">Portas & Janelas</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Qualidade e segurança em portas e janelas para sua residência ou comércio. Trabalhamos com as melhores marcas do mercado.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-secondary mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="/" className="hover:text-secondary transition-colors">Início</a></li>
              <li><a href="/produtos" className="hover:text-secondary transition-colors">Produtos</a></li>
              <li><a href="/contato" className="hover:text-secondary transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-secondary mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-secondary" />
                (00) 0000-0000
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-secondary" />
                contato@atualportasejanelas.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-secondary" />
                Rua Exemplo, 123 - Centro
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Atual Portas e Janelas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
