import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DoorClosed, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Início" },
    { to: "/produtos", label: "Produtos" },
    { to: "/contato", label: "Contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 sm:py-5 md:py-6 px-3 sm:px-4">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
            <DoorClosed size={22} className="text-secondary-foreground sm:w-6 sm:h-6" />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="font-heading font-bold text-primary-foreground text-base sm:text-lg md:text-xl tracking-tight truncate">
              Atual
            </span>
            <span className="font-heading text-secondary text-xs sm:text-xs font-semibold tracking-widest uppercase truncate">
              Portas & Janelas
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading font-semibold text-xs lg:text-sm tracking-wide transition-colors ${
                isActive(link.to)
                  ? "text-secondary"
                  : "text-primary-foreground/80 hover:text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-secondary-foreground font-heading font-bold text-xs lg:text-sm px-4 lg:px-5 py-2.5 lg:py-3 rounded-lg hover:brightness-110 transition-all whitespace-nowrap"
          >
            Solicite Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground flex-shrink-0"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 pb-3 px-3 sm:px-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 font-heading font-semibold text-sm ${
                isActive(link.to)
                  ? "text-secondary"
                  : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 bg-secondary text-secondary-foreground font-heading font-bold text-sm px-4 sm:px-5 py-2.5 rounded-lg text-center w-full"
          >
            Solicite Orçamento
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
