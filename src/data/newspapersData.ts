export interface Newspaper {
  id: string
  title: string
  subtitle: string
  era: string
  image: string
}

export const newspapers: Newspaper[] = [
  {
    id: 'segunda-guerra',
    title: 'Segunda Guerra Mundial',
    subtitle: 'O maior conflito da história: frentes globais, eventos decisivos e as consequências que mudaram o mundo',
    era: '1939–1945',
    image: '/images/jornal-1.jpg',
  },
  {
    id: 'primeira-guerra',
    title: 'Primeira Guerra Mundial',
    subtitle: 'A Grande Guerra: alianças, trincheiras e consequências de 1914 a 1918',
    era: '1914–1918',
    image: '/images/jornal-10.jpg',
  },
  {
    id: 'ditadura-militar',
    title: 'Ditadura Militar',
    subtitle: 'Autoritarismo, censura, repressão, resistência e o retorno da democracia no Brasil (1964–1985)',
    era: 'Brasil, 1964–1985',
    image: '/images/hero-mockup.png',
  },
  {
    id: 'roma-antiga',
    title: 'Roma Antiga',
    subtitle: 'República, Império, conquistas e o legado de uma das maiores civilizações da história',
    era: 'Antiguidade',
    image: '/images/hero-mockup.png',
  },
  {
    id: 'idade-media',
    title: 'Idade Média',
    subtitle: 'Feudalismo, Igreja, cavaleiros, cidades e as transformações da Europa medieval',
    era: 'Séc. V–XV',
    image: '/images/hero-mockup.png',
  },
  {
    id: 'revolucao-francesa',
    title: 'Revolução Francesa',
    subtitle: 'A queda do Antigo Regime, a luta por liberdade, igualdade e fraternidade e as transformações de 1789',
    era: '1789',
    image: '/images/hero-mockup.png',
  },
  {
    id: 'escravidao-abolicao',
    title: 'Escravidão e Abolição no Brasil',
    subtitle: 'Da chegada dos africanos à luta pela liberdade: resistência, cultura e o fim da escravidão',
    era: 'Brasil, Séc. XVI–XIX',
    image: '/images/hero-mockup.png',
  },
]

export interface Bonus {
  id: string
  title: string
  description: string
  image: string
  badge: string
}

export const bonuses: Bonus[] = [
  {
    id: 'indice-mestre',
    title: 'Índice Mestre dos 500 Jornais de Biologia',
    description: 'Encontre rapidamente qualquer jornal por período histórico, tema, área de estudo, assunto, biologia geral e muito mais.',
    image: '/images/bonus-1.png',
    badge: 'GRÁTIS',
  },
  {
    id: 'guia-biologia',
    title: 'Guia de Biologia da Coleção',
    description: 'Um guia prático para ajudar você a entender e organizar os principais conteúdos de Biologia.',
    image: '/images/bonus-2.png',
    badge: 'GRÁTIS',
  },
  {
    id: 'guia-utilizacao',
    title: 'Guia de Utilização dos Materiais de Biologia',
    description: 'Diferentes formas práticas de utilizar os materiais durante suas aulas de Biologia, tornando os conteúdos mais dinâmicos, claros e envolventes.',
    image: '/images/bonus-3.png',
    badge: 'GRÁTIS',
  },
  {
    id: 'calendario',
    title: 'Calendário de Datas da Biologia',
    description: 'Principais datas, eventos e temas da Biologia para você se organizar, estudar melhor e não perder nenhum conteúdo importante ao longo do ano!',
    image: '/images/bonus-4.png',
    badge: 'DE R$ 47 POR GRÁTIS',
  },
]

export interface Testimonial {
  id: string
  name: string
  image: string
  messages: { from: 'user' | 'teacher'; text: string }[]
}

export const testimonials: Testimonial[] = [
  {
    id: 'ricardo',
    name: 'Prof. Ricardo Lima',
    image: '/images/depoimento-1.png',
    messages: [
      { from: 'user', text: 'Oi, professor! Vi que você recebeu os jornais 😊 Depois me fala o que achou.' },
      { from: 'teacher', text: 'Boa tarde! Queria te agradecer porque usei os jornais na aula de hoje e foi um sucesso.' },
      { from: 'teacher', text: 'Trabalhei Ditadura Militar e Idade Média. A turma participou muito mais e o debate ficou ótimo.' },
      { from: 'teacher', text: 'Os materiais são bonitos, organizados e bem fáceis de usar.' },
      { from: 'teacher', text: 'Fez muita diferença na aula. Parabéns pelo trabalho!' },
    ],
  },
  {
    id: 'fernanda',
    name: 'Prof. Fernanda Rocha',
    image: '/images/depoimento-3.png',
    messages: [
      { from: 'user', text: 'Oi, prof! Vi que você recebeu os jornais 😊 Depois me conta o que achou.' },
      { from: 'teacher', text: 'Acabei de aplicar alguns jornais históricos e ficou excelente.' },
      { from: 'teacher', text: 'Usei Escravidão e Abolição no Brasil e Primeira Guerra Mundial. Os alunos leram de verdade e participaram muito.' },
      { from: 'teacher', text: 'Foi uma das aulas mais participativas do bimestre.' },
      { from: 'teacher', text: 'Obrigada por disponibilizar um material tão bonito e prático!' },
    ],
  },
]
