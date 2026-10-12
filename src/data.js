export const profile = {
  name: 'Marius Delvigne',
  title: 'Développeur full-stack junior',
  intro:
    "Diplômé en informatique de gestion orientation développement d'application. Je conçois des applications web et mobiles avec C# .NET et React.",
  location: 'Mons, Belgique',
  email: 'marius.delvigne@gmail.com',
  github: 'https://github.com/mariusdelvigne',
  linkedin: 'https://www.linkedin.com/in/marius-delvigne-662438310/',
  cvFile: '/public/CV_Delvigne_Marius.pdf',
};

export const skills = {
  'Langages & frameworks': ['C# (.NET)', 'JavaScript / TypeScript', 'React', 'React Native', 'Expo', 'Angular', 'Python', 'C/C++', 'HTML'],
  'Outils & DevOps': ['Git', 'Docker', 'Keycloak (SSO)', 'Jira', 'Trello'],
  'Bases de données & conception': ['MySQL', 'UML'],
};

export const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'Niveau moyen' },
  { name: 'Néerlandais', level: 'Niveau de base' },
];

export const education = [
  { title: 'Bachelier en informatique de gestion – développement d’application', place: 'HELHA, Mons', period: '2022-2026' },
  { title: "Obtention du CESS et d'un diplôme de Technicien en Informatiue", place: "Athénée Royale de Péruwelz", period:'2022' },
];

export const experience = [
  {
    title: 'Stage de fin d’études – développeur',
    place: 'Ingenum, Mons',
    period: 'Février – juin 2026',
    text: 'Application de réservation d’espace de travail : backend C# .NET, frontend React JS et application mobile React Native.',
  },
  {
    title: 'Stage de technicen en Informatique',
    place: 'NEO-IT, Saint-Ghislain',
    period: '2 fois 5 semaine (mars 2021 & mars 2022)',
    text: 'Implémentation de système informatique dans des entreprises, installation réseaux, support informatique.'
  }
];

export const projects = [
  {
    id: 'reservation-espace-travail',
    title: 'Application de réservation d’espace de travail',
    context: 'Stage chez Ingenum',
    summary: "Réservez un bureau ou une salle depuis le web ou l'application mobile.",
    description:
      'Application complète réalisée pendant mon stage de fin d’études : une API en C# .NET, une interface web en React JS et une application mobile en React Native.',
    stack: ['C# .NET', 'React JS', 'React Native'],
    github: '',
    demo: '',
  },
  // Copie ce bloc pour ajouter tes autres projets
  {
    id: 'projet-exemple',
    title: 'Titre de ton projet',
    context: 'Projet personnel / scolaire',
    summary: 'Une phrase qui explique ce que fait le projet.',
    description: 'Décris le problème résolu, ton rôle et ce que tu as appris.',
    stack: ['React', 'Node.js'],
    github: 'https://github.com/ton-pseudo/ton-projet',
    demo: '',
  },
];
