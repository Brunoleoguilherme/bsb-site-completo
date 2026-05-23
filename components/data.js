import {
  Trophy,
  Users,
  Globe2,
  Handshake,
  Megaphone,
  LineChart,
  ShieldCheck,
  Plane,
  HeartHandshake,
  Building2,
  Star,
  BarChart3,
  Award,
  Flag,
  Landmark,
  MapPin,
  GraduationCap,
  Dumbbell,
  Music,
  Radio,
  Goal,
} from 'lucide-react';

export const brand = {
  whatsapp: 'https://wa.me/5531999999999',
  email: 'mailto:contato@brasilsportsbusiness.com',
  instagram: 'https://www.instagram.com/brasilsports.business/',
};

export const nav = [
  ['Home', '/'],
  ['Sobre a BSB', '/sobre'],
  ['Eventos', '/eventos'],
  ['Marketing Esportivo', '/marketing'],
  ['Projetos', '/projetos'],
  ['Investidores', '/investidores'],
  ['Newsroom', '/newsroom'],
  ['Contato', '/contato'],
];

export const stats = [
  ['+10', 'anos de história', Trophy],
  ['+250', 'eventos realizados', Landmark],
  ['+1.5M', 'pessoas impactadas', Users],
  ['+300', 'parceiros e marcas', Handshake],
  ['+7', 'países conectados', Globe2],
];

export const services = [
  [
    'Marketing Esportivo',
    'Estratégias que conectam marcas, clubes, atletas, mídia e comunidades.',
    Handshake,
  ],
  [
    'Gestão de Patrocínios',
    'Criação de cotas, entregas, ROO, relatórios, ativações e relacionamento.',
    Trophy,
  ],
  [
    'Eventos & Experiências',
    'Fan zones, hospitality, tailgates, showcases, camps e experiências culturais.',
    Megaphone,
  ],
  [
    'Projetos Internacionais',
    'College football, flag football, intercâmbio esportivo e conexões globais.',
    Globe2,
  ],
  [
    'Consultoria Estratégica',
    'Planejamento, governança, inteligência comercial, expansão e inovação.',
    LineChart,
  ],
];

export const pillars = [
  [
    'Propriedades esportivas',
    'Criação, posicionamento e operação de eventos, ligas e plataformas esportivas.',
    Flag,
  ],
  [
    'Operação premium',
    'Produção, logística, fornecedores, credenciamento, experiência e entrega.',
    ShieldCheck,
  ],
  [
    'Patrocínio e receita',
    'Valuation, cotas, naming rights, ativações, relatórios e mensuração.',
    BarChart3,
  ],
  [
    'Relações internacionais',
    'Conexão com universidades, marcas, entidades, atletas e investidores.',
    Plane,
  ],
  [
    'Impacto social',
    'Projetos que unem esporte, educação, inclusão e transformação de comunidades.',
    HeartHandshake,
  ],
  [
    'Institucional',
    'Governo, clubes, federações, empresas, mídia e parceiros estratégicos.',
    Building2,
  ],
];

export const projects = [
  {
    slug: 'college-football-brasil',
    title: 'College Football Brasil',
    category: 'Evento Internacional',
    year: '2026',
    tag: 'Global Sports Platform',
    icon: Award,
    color: 'gold',
    image: '/assets/college-press.png',
    subtitle: 'O Brasil no mapa do college football mundial.',
    description:
      'Projeto internacional que conecta universidades, turismo, marcas, hospitalidade, mídia, fãs e o Brasil ao universo do college football norte-americano.',
  },

  {
    slug: 'brasil-flag-world-championship',
    title: 'Brasil Flag World Championship',
    category: 'Flag Football',
    year: '2026',
    tag: 'World Championship',
    icon: Flag,
    color: 'blue',
    image: '/images/brasil-flag-world.jpg',
    subtitle: 'O mundo do flag football tem um novo destino.',
    description:
      'Mundial de clubes de flag football criado para transformar o Brasil em centro global da modalidade.',
  },

  {
    slug: 'new-players-sports',
    title: 'New Players Sports',
    category: 'Athlete Pathway',
    year: '2025',
    tag: 'Talent to Opportunity',
    icon: GraduationCap,
    color: 'sky',
    image: '/images/new-players-showcase.jpg',
    subtitle:
      'Conectando talentos a oportunidades internacionais.',
    description:
      'Plataforma de desenvolvimento e conexão de atletas com oportunidades acadêmicas, esportivas e profissionais no exterior.',
  },

  {
  slug: 'touchdown-do-bem',
  title: 'Touchdown do Bem',
  category: 'Impacto Social',
  year: '2023',
  tag: 'Social Impact',
  icon: HeartHandshake,
  color: 'green',

  // NOVA FOTO
  image: '/images/touchdown-do-bem.jpg',

  subtitle:
    'Projeto social de flag football.',

  description:
    'Projeto social de flag football para crianças e adolescentes.',
},

  {
  slug: 'mgfl',
  title: 'MGFL Hinova',
  category: 'Liga Esportiva',
  year: '2021',
  tag: 'Football League',
  icon: Trophy,
  color: 'red',

  // NOVA FOTO
  image: '/images/mgfl.jpg',

  subtitle:
    'Liga estadual de futebol americano.',

  description:
    'Liga privada criada para elevar a experiência do futebol americano mineiro.',
},

  {
  slug: 'taca-brasil-fa',
  title: 'Taça Brasil FA',
  category: 'Competição Nacional',
  year: '2023',
  tag: 'National League',
  icon: Award,
  color: 'green',

  // NOVA FOTO
  image: '/images/taca-brasil.jpg',

  subtitle:
    'A Copa do Brasil do futebol americano.',

  description:
    'Competição nacional com grandes clubes brasileiros.',
},

  {
  slug: 'american-fun-fest',
  title: 'American Fun Fest',
  category: 'Festival',
  year: '2017 / 2019',
  tag: 'Festival',
  color: 'green',
  image: '/images/american-fun-fest-2.png',
  subtitle: 'Cultura americana, esporte, gastronomia e entretenimento.',
  description:
    'Festival realizado em parceria com o escritório da Embaixada dos Estados Unidos em Belo Horizonte, reunindo cultura americana, música, gastronomia e experiências esportivas.',
},

  {
  slug: 'world-fun-fest',
  title: 'World Fun Fest',
  category: 'Festival Cultural',
  year: '2019',
  tag: 'Festival Cultural',
  icon: Music,
  color: 'green',
  image: '/images/world-fun-fest.png',
  subtitle: 'O mundo se encontra em Belo Horizonte.',
  description:
    'Festival multicultural realizado em Belo Horizonte, reunindo música, gastronomia, lazer, entretenimento e experiências culturais.',
},

  {
  slug: 'brasil-fa-camp',
  title: 'Brasil FA Camp',
  category: 'Camp & Desenvolvimento',
  year: '2019 / 2020',
  tag: 'Camp & Desenvolvimento',
  color: 'green',
  image: '/images/brasil-fa-camp.png',
  subtitle: 'O maior camp de futebol americano da América Latina.',
  description:
    'Camp internacional realizado em Belo Horizonte reunindo atletas de diversos países da América Latina para desenvolvimento técnico, experiências internacionais e intercâmbio esportivo.',
},

  {
    slug: 'brasil-bowl',
    title: 'Brasil Bowl',
    category: 'Final Nacional',
    year: '2017',
    tag: 'Championship Game',
    icon: Goal,
    color: 'blue',
    image: '/images/brasil-bowl.jpg',
    subtitle:
      'A grande final do futebol americano brasileiro.',
    description:
      'Final nacional realizada na Arena Independência.',
  },

  {
    slug: 'game-of-dreams',
    title: 'Game of Dreams',
    category: 'Evento Beneficente',
    year: '2017',
    tag: 'Legends Experience',
    icon: Star,
    color: 'gold',
    image: '/images/game-of-dreams.png',
    subtitle:
      'Ronaldinho Gaúcho de volta a Belo Horizonte.',
    description:
      'Jogo beneficente no Mineirão com grandes nomes do esporte.',
  },

  {
    slug: 'rugby-day-minas-sevens',
    title: 'Rugby Day Minas Sevens',
    category: 'Rugby',
    year: '2018',
    tag: 'Multi-sport',
    icon: Radio,
    color: 'red',
    image: '/images/rugby-day.png',
    subtitle:
      'A BSB também transforma outros esportes.',
    description:
      'Evento de rugby em Belo Horizonte.',
  },

  {
  slug: 'mato-grosso-bowl',
  title: 'Mato Grosso Bowl',
  category: 'Evento Internacional',
  year: '2018',
  tag: 'Evento Internacional',
  color: 'green',
  image: '/images/mato-grosso-bowl.png',
  subtitle: 'Evento internacional na Arena Pantanal.',
  description:
    'Partida internacional realizada na Arena Pantanal reunindo Seleção Matogrossense e Seleção do Uruguai em um amistoso internacional com cobertura nacional.',
},

{
  slug: 'brasil-argentina-futebol-americano',
  title: 'Brasil x Argentina',
  subtitle: 'Clássico internacional de futebol americano.',
  category: 'Evento Internacional',
  year: '2017',
  image: '/images/brasil-argentina-2.jpg',
  color: 'green',
},

{
  slug: 'brasil-argentina-rugby',
  title: 'Brasil x Argentina Rugby',
  subtitle: 'Rugby internacional em Belo Horizonte.',
  category: 'Rugby Internacional',
  year: '2017',
  image: '/images/brasil-argentina-rugby.jpg',
  color: 'green',
},

{
  slug: 'festival-brasil-fa',
  title: 'Festival Brasil FA',
  subtitle: 'Festival nacional de futebol americano.',
  category: 'Festival Esportivo',
  year: '2019',
  image: '/images/festival-brasil-fa.jpg',
  color: 'green',
},

{
  slug: 'cemig-minas-bowl',
  title: 'Cemig Minas Bowl',
  subtitle: 'Final histórica do futebol americano mineiro.',
  category: 'Final Estadual',
  year: '2018',
  image: '/images/cemig-minas-bowl.jpg',
  color: 'green',
},

];

export const news = [
  [
    'College Football Brasil',
    'Projeto internacional posiciona o Brasil como destino global.',
  ],
  [
    'Brasil Flag World Championship',
    'O Brasil se prepara para receber clubes e atletas.',
  ],
  [
    'BSB Portfolio',
    'Cases históricos reforçam a atuação da BSB.',
  ],
  [
    'New Players Sports',
    'Showcases internacionais ampliam caminhos para atletas.',
  ],
];

export const partners = [
  'NFL',
  'NCAA',
  'Under Armour',
  'HanzBet',
  'ViradaBet',
  'Hinova',
  'Sesc',
  'ESPN',
  'USA Football',
  'Mapa do FABR',
  'Rede 98',
  'Belotur',
];

export const investorBullets = [
  'Propriedades esportivas com potencial de escala',
  'Experiências premium para marcas e patrocinadores',
  'Governança e mensuração de resultado',
  'Conexão com universidades e investidores globais',
  'Projetos com impacto social',
];

export const getProject = (slug) =>
  projects.find((p) => p.slug === slug);