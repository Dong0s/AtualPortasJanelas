import portaCorrer from "@/assets/produto-porta-correr.jpg";
import janelaAbrir from "@/assets/produto-janela-abrir.jpg";
import portaPivotante from "@/assets/produto-porta-pivotante.jpg";
import janelaCorrer from "@/assets/produto-janela-correr.jpg";
import portaSanfonada from "@/assets/produto-porta-sanfonada.jpg";
import janelaMaximar from "@/assets/produto-janela-maximar.jpg";

export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    image: portaCorrer,
    title: "Porta de Correr",
    description: "Porta de correr em alumínio com vidro temperado. Ideal para salas e varandas.",
    category: "Portas",
  },
  {
    id: 2,
    image: janelaAbrir,
    title: "Janela de Abrir",
    description: "Janela de abrir em alumínio com vidro duplo. Excelente vedação e isolamento.",
    category: "Janelas",
  },
  {
    id: 3,
    image: portaPivotante,
    title: "Porta Pivotante",
    description: "Porta pivotante com design moderno e sofisticado. Perfeita para entradas.",
    category: "Portas",
  },
  {
    id: 4,
    image: janelaCorrer,
    title: "Janela de Correr",
    description: "Janela de correr com bandeira fixa. Prática e funcional para diversos ambientes.",
    category: "Janelas",
  },
  {
    id: 5,
    image: portaSanfonada,
    title: "Porta Sanfonada",
    description: "Porta sanfonada articulada em alumínio e vidro. Integra ambientes com elegância.",
    category: "Portas",
  },
  {
    id: 6,
    image: janelaMaximar,
    title: "Janela Maxim-Ar",
    description: "Janela maxim-ar com abertura projetante. Permite ventilação mesmo em dias de chuva.",
    category: "Janelas",
  },
];
