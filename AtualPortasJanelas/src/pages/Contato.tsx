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

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-3">
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Estamos prontos para atendê-lo. Escolha o melhor canal de comunicação.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-5">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-5 bg-card rounded-xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                  <item.icon size={28} />
                </div>
                <div>
                  <span className="font-heading font-bold text-card-foreground block">{item.label}</span>
                  <span className="text-muted-foreground text-sm">{item.value}</span>
                </div>
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center mt-14">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading font-bold text-lg px-10 py-4 rounded-xl hover:brightness-110 transition-all shadow-[var(--shadow-elevated)]"
            >
              <MessageCircle size={24} />
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
