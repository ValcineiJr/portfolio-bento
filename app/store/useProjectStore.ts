import { create } from 'zustand';

// Tipagem dos links dinâmicos (ex: Play Online, Steam, GitHub)
export interface ActionLink {
  label: string;
  url: string;
  icon: string; // Emoji ou nome de ícone
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
      type: 'Web App',
      shortDescription: 'Meu portfolio pessoal estilo Bento',
      fullDescription: 'Esse site nasceu da necessidade de expressar que eu conseguia fazer um portfolio melhor que o meu antigo, eu aprendi e evolui muito e todos os meus projetos a partir desse vão refletir essa evolução.',
      coverImage: 'https://i.imgur.com/zGvwG6A.png', // Coloque suas imagens reais
      gallery: [
        'https://i.imgur.com/zGvwG6A.png',
       
      ],
      links: [
        { label: 'Visitar Site', url: '/', icon: '🌐' },
       
      ]
    },

  ],
}));