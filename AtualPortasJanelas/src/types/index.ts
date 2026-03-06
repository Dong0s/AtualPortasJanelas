// Tipos compartilhados da aplicação
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}
