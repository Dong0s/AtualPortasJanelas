interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

const ProductCard = ({ image, title, description, category }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-lg sm:rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="aspect-square overflow-hidden bg-muted flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <span className="inline-block bg-secondary/20 text-accent-foreground font-heading text-xs font-semibold px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3 w-fit">
          {category}
        </span>
        <h3 className="font-heading font-bold text-base sm:text-lg text-card-foreground mb-1">{title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 flex-grow">{description}</p>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto bg-primary text-primary-foreground font-heading font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:brightness-110 transition-all text-center w-full"
        >
          Solicitar Orçamento
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
