import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactItems = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(00) 0000-0000",
    href: "tel:+550000000000",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(00) 00000-0000",
    href: "https://wa.me/5500000000000",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@atualportasejanelas.com.br",
    href: "mailto:contato@atualportasejanelas.com.br",
    color: "bg-secondary/20 text-accent-foreground",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua Exemplo, 123 - Centro, Cidade - Estado",
    href: "#",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Clock,
    label: "Horário de Funcionamento",
    value: "Seg-Sex: 8h às 18h | Sáb: 8h às 12h",
    href: "#",
    color: "bg-secondary/20 text-accent-foreground",
  },
];

const Contato = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <h1 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-2 sm:mb-3">
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Estamos prontos para atendê-lo. Escolha o melhor canal de comunicação.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 sm:gap-5 bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 transition-all active:translate-y-0"
              >
                <div className={`w-12 sm:w-14 h-12 sm:h-14 rounded-lg sm:rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                  <item.icon size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0">
                  <span className="font-heading font-bold text-card-foreground block text-sm sm:text-base">{item.label}</span>
                  <span className="text-muted-foreground text-xs sm:text-sm break-words">{item.value}</span>
                </div>
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center mt-10 sm:mt-12 md:mt-14">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-primary text-primary-foreground font-heading font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:brightness-110 transition-all shadow-[var(--shadow-elevated)] w-full sm:w-auto"
            >
              <MessageCircle size={20} className="sm:w-6 sm:h-6" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
