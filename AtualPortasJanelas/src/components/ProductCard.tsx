interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

const ProductCard = ({ image, title, description, category }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <span className="inline-block bg-secondary/20 text-accent-foreground font-heading text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {category}
        </span>
        <h3 className="font-heading font-bold text-lg text-card-foreground mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-primary text-primary-foreground font-heading font-semibold text-sm px-5 py-2 rounded-lg hover:brightness-110 transition-all"
        >
          Solicitar Orçamento
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
