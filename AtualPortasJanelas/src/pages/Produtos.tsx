import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = ["Todos", "Portas", "Janelas"];

const Produtos = () => {
  const [filter, setFilter] = useState("Todos");

  const filtered = filter === "Todos" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-3">
              Nossos <span className="text-primary">Produtos</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore nossa linha completa de portas e janelas com qualidade e design.
            </p>
          </div>

          {/* Filter */}
          <div className="flex justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-heading font-semibold text-sm px-6 py-2.5 rounded-full transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Produtos;
