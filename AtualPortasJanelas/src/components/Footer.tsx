import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="font-heading font-bold text-lg sm:text-xl mb-3 sm:mb-4">
              Atual <span className="text-secondary">Portas & Janelas</span>
            </h3>
            <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
              Qualidade e segurança em portas e janelas para sua residência ou comércio. Trabalhamos com as melhores marcas do mercado.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-xs sm:text-sm uppercase tracking-widest text-secondary mb-3 sm:mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-primary-foreground/70">
              <li><a href="/" className="hover:text-secondary transition-colors">Início</a></li>
              <li><a href="/produtos" className="hover:text-secondary transition-colors">Produtos</a></li>
              <li><a href="/contato" className="hover:text-secondary transition-colors">Contato</a></li>
            </ul>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-heading font-semibold text-xs sm:text-sm uppercase tracking-widest text-secondary mb-3 sm:mb-4">
              Contato
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-secondary flex-shrink-0 sm:w-4 sm:h-4" />
                <span className="break-words">(00) 0000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-secondary flex-shrink-0 sm:w-4 sm:h-4" />
                <span className="break-words">contato@atualportasejanelas.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-secondary flex-shrink-0 mt-0.5 sm:w-4 sm:h-4" />
                <span className="break-words">Rua Exemplo, 123 - Centro</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 sm:mt-10 pt-4 sm:pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Atual Portas e Janelas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
