import { create } from 'zustand';
import {FaGithub, FaRocket} from 'react-icons/fa6'
import { IconType } from 'react-icons';

// Tipagem dos links dinâmicos (ex: Play Online, Steam, GitHub)
export interface ActionLink {
  label: string;
  url: string;
  Icon: IconType; // Emoji ou nome de ícone
}

export interface Project {
  id: string;
  title: string;
  type: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  gallery: string[];
  links: ActionLink[];
}

interface ProjectStore {
  projects: Project[];
}

export const useProjectStore = create<ProjectStore>(() => ({
  projects: [
    { 
      id: 'portfolio', 
      title: 'Portfolio', 
      type: 'Portfolio',
      shortDescription: 'Meu portfolio pessoal estilo Bento',
      fullDescription: 'Esse site nasceu da necessidade de expressar que eu conseguia fazer um portfolio melhor que o meu antigo, eu aprendi e evolui muito e todos os meus projetos a partir desse vão refletir essa evolução.',
      coverImage: 'https://i.imgur.com/zGvwG6A.png', // Coloque suas imagens reais
      gallery: [
        'https://i.imgur.com/zGvwG6A.png',
       
      ],
      links: [
        { label: 'Visitar Site', url: '/', Icon: FaRocket },
       
      ]
    },{ 
      id: 'brainwave-io', 
      title: 'Brainwave.io', 
      type: 'Landing Page',
      shortDescription: 'Landing Page premium focada em micro-interações, tipografia fluida e alta conversão.',
      fullDescription: 'Desenvolvido como um Case Study de UI Engineering, este projeto traduz um design complexo e moderno para código pixel-perfect. Construído com React e o novo Tailwind CSS v4, o foco absoluto foi em UX: implementei uma Navbar sticky com efeito glassmorphism, scroll suave nativo, menus mobile animados e um layout em alvenaria (Masonry Grid) utilizando o Framer Motion para animações de entrada e efeitos espaciais de hover.',
      coverImage: 'https://awesomescreenshot.s3.amazonaws.com/image/7299947/59866895-4a3934be55880873687ce7be8ee737e4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20260416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T192333Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=6484eebb0ef34a1fe630e4a9615a278c8e77142a01b90fb0c7821af098d167e3', // Dica: Tire um print pegando o Hero principal e a Navbar
      gallery: [
        'https://awesomescreenshot.s3.amazonaws.com/image/7299947/59866895-4a3934be55880873687ce7be8ee737e4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20260416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T192333Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=6484eebb0ef34a1fe630e4a9615a278c8e77142a01b90fb0c7821af098d167e3', // Print da Hero Section
        'https://awesomescreenshot.s3.amazonaws.com/image/7299947/59866928-d458491f821f126845cc8fba9a2645f6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20260416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T192525Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=f92a695c197f01072b134f6d7b0df5e55ea1645c6004524240b0ecd4fe03a09d', 
        'https://awesomescreenshot.s3.amazonaws.com/image/7299947/59866934-fb1b451d9bd9fc5c18884747b58b1458.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20260416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T192535Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=52fb4e8b67ac2f363d3172023f1e198761a1d14a40044a18001b9840b7e6128c' ,
        'https://awesomescreenshot.s3.amazonaws.com/image/7299947/59866935-fd24224f7e6f3b6eb3a0a06561960fe1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20260416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T192549Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=4d3b8a7989e2801e93be089a5ffb8ea2a6fcd26323ab1eb750809f3f97e81305' ,
        'https://awesomescreenshot.s3.amazonaws.com/image/7299947/59866939-3d6a2fcb3ca4cedce70d72d112b2ec96.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20260416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T192558Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=7bb27557880353e0277a9dc53f3d8ec3ab6ca9d2b474632d6f722357bd18de0d' ,
        'https://awesomescreenshot.s3.amazonaws.com/image/7299947/59866944-d008eb4ab1bcbed514998eea2b54ac96.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20260416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260416T192612Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=ccdc1f9e68a36bd0836c7bac4544861d87d56b6071d100253b1ae6911aa7e330' ,
      ],
      links: [
        { label: 'Visitar Site', url: 'https://brainwave-io-five.vercel.app/', Icon: FaRocket },
        { label: 'Projeto no GitHub', url: 'https://github.com/ValcineiJr/Brainwave.io', Icon: FaGithub }
      ]
    },

  ],
}));