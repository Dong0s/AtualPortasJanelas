import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Wrench } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const features = [
  {
    icon: Shield,
    title: "Segurança",
    desc: "Produtos com alto padrão de segurança e resistência para sua família.",
  },
  {
    icon: Award,
    title: "Qualidade",
    desc: "Trabalhamos apenas com materiais de primeira linha e marcas reconhecidas.",
  },
  {
    icon: Wrench,
    title: "Instalação",
    desc: "Equipe especializada para instalação profissional e garantia de serviço.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <img
          src={heroBg}
          alt="Portas e janelas modernas"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block bg-secondary text-secondary-foreground font-heading font-bold text-sm px-4 py-1.5 rounded-full mb-6">
              Atual Portas & Janelas
            </span>
            <h1 className="font-heading font-black text-4xl md:text-6xl leading-tight mb-6" style={{ color: 'white' }}>
              Portas e Janelas que{" "}
              <span className="text-secondary">Transformam</span> Ambientes
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Encontre a solução perfeita em portas e janelas de alumínio para sua casa ou empresa. Qualidade, design e segurança.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/produtos"
                className="bg-secondary text-secondary-foreground font-heading font-bold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all flex items-center gap-2"
              >
                Ver Produtos <ArrowRight size={18} />
              </Link>
              <Link
                to="/contato"
                className="border-2 font-heading font-bold px-8 py-3.5 rounded-lg transition-all flex items-center gap-2 hover:bg-primary-foreground/10"
                style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Por que escolher a <span className="text-primary">Atual</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card rounded-xl p-8 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-5 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <f.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-card-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
              Nossos <span className="text-primary">Produtos</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Conheça nossa linha completa de portas e janelas em alumínio com acabamento premium.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all"
            >
              Ver Todos os Produtos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Solicite seu <span className="text-secondary">Orçamento Grátis</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Entre em contato conosco e receba um orçamento personalizado sem compromisso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground font-heading font-bold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all"
            >
              WhatsApp
            </a>
            <Link
              to="/contato"
              className="border-2 border-primary-foreground/30 text-primary-foreground font-heading font-bold px-8 py-3.5 rounded-lg hover:bg-primary-foreground/10 transition-all"
            >
              Mais Opções de Contato
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
