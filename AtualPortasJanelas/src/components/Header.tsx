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
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <DoorClosed size={24} className="text-secondary-foreground" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-bold text-primary-foreground text-lg tracking-tight">
              Atual
            </span>
            <span className="font-heading text-secondary text-xs font-semibold tracking-widest uppercase">
              Portas & Janelas
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading font-semibold text-sm tracking-wide transition-colors ${
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
            className="bg-secondary text-secondary-foreground font-heading font-bold text-sm px-5 py-2.5 rounded-lg hover:brightness-110 transition-all"
          >
            Solicite Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4 px-4">
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
            className="block mt-2 bg-secondary text-secondary-foreground font-heading font-bold text-sm px-5 py-2.5 rounded-lg text-center"
          >
            Solicite Orçamento
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
