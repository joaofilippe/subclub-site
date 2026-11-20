import {
  BenefitItem,
  FaqItem,
  FooterColumn,
  NavItem,
  PricingPlan,
  WorkflowStep,
} from '../shared/models/landing.model';

export const ANNUAL_DISCOUNT_RATE = 0.2;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Recursos', anchor: 'recursos' },
  { label: 'Como funciona', anchor: 'como-funciona' },
  { label: 'Planos', anchor: 'planos' },
  { label: 'FAQ', anchor: 'faq' },
];

export const HERO_TRUST_POINTS: string[] = [
  'Sem taxa extra por assinante',
  'Ambiente isolado para sua marca',
  'Implantação guiada em minutos',
];

export const BENEFITS: BenefitItem[] = [
  {
    icon: 'group',
    tag: 'Assinantes',
    title: 'Base de clientes centralizada',
    description:
      'Cadastre assinantes, acompanhe status de assinatura, histórico de pagamentos e endereços de entrega em uma única visão.',
  },
  {
    icon: 'layers',
    tag: 'Planos',
    title: 'Planos recorrentes sob medida',
    description:
      'Crie pacotes mensais, quinzenais ou trimestrais combinando faixas de preço, gramaturas e periodicidade de envio.',
  },
  {
    icon: 'coffee',
    tag: 'Catálogo',
    title: 'Cafés e kits organizados',
    description:
      'Estruture o catálogo do seu clube com cafés especiais, perfis de torra, moagens e kits exclusivos vinculados direto aos planos.',
  },
  {
    icon: 'autorenew',
    tag: 'Recorrência',
    title: 'Controle completo de ciclos',
    description:
      'Gerencie ativações, pausas, upgrades e cancelamentos com rastreabilidade clara para sua equipe de operação e expedição.',
  },
  {
    icon: 'admin_panel_settings',
    tag: 'Equipe',
    title: 'Papéis e permissões por usuário',
    description:
      'Separe administradores, equipe de torra/envio e atendimento com acesso controlado ao painel da sua conta.',
  },
  {
    icon: 'shield',
    tag: 'Isolamento',
    title: 'Dados 100% isolados por marca',
    description:
      'Arquitetura multi-tenant dedicada garante que os dados dos seus assinantes, planos e cafés fiquem isolados com segurança.',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: '01',
    icon: 'storefront',
    title: 'Estruture sua conta e catálogo',
    description:
      'Ative o ambiente da sua marca, convide sua equipe e cadastre os cafés, microlotes ou kits que compõem o seu clube.',
  },
  {
    number: '02',
    icon: 'tune',
    title: 'Publique planos e benefícios',
    description:
      'Defina valores, ciclos de cobrança e combinações de cafés para cada categoria de assinante do seu clube.',
  },
  {
    number: '03',
    icon: 'rocket_launch',
    title: 'Opere e escale com previsibilidade',
    description:
      'Acompanhe novos assinantes, renovações e envios de cada ciclo sem depender de planilhas paralelas.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Ideal para validar seu primeiro clube de assinatura de café com organização profissional.',
    monthlyPrice: 99,
    limits: ['Até 150 assinantes ativos', 'Até 3 planos configurados', 'Até 25 produtos no catálogo'],
    features: [
      'Ambiente isolado da marca',
      'Gestão de assinantes e assinaturas',
      'Painel operacional completo',
      'Suporte por e-mail',
    ],
    ctaLabel: 'Começar no Starter',
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Mais popular',
    highlighted: true,
    description: 'Para clubes de café em crescimento que precisam de mais capacidade, equipe e escala.',
    monthlyPrice: 249,
    limits: ['Até 1.500 assinantes ativos', 'Até 12 planos configurados', 'Até 150 produtos no catálogo'],
    features: [
      'Tudo do plano Starter',
      'Múltiplos usuários com controle de perfil',
      'Gestão avançada de ciclos e status',
      'Suporte prioritário',
    ],
    ctaLabel: 'Escolher plano Pro',
  },
  {
    id: 'scale',
    name: 'Scale',
    description: 'Feito para torrefações e clubes de café consolidados com alto volume recorrente.',
    monthlyPrice: 549,
    limits: ['Assinantes ilimitados', 'Planos ilimitados', 'Catálogo ilimitado de produtos'],
    features: [
      'Tudo do plano Pro',
      'Limites personalizados por operação',
      'Onboarding assistido e migração',
      'Atendimento dedicado',
    ],
    ctaLabel: 'Falar sobre o Scale',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Para que tipos de clube de café o BeanByte foi feito?',
    answer:
      'O BeanByte foi criado para torrefações, cafeterias e marcas de cafés especiais que operam clubes de assinatura recorrente — desde operações enxutas com um plano mensal até clubes com múltiplos grãos, kits e ciclos.',
  },
  {
    question: 'Os dados da minha torrefação ficam misturados com os de outros clientes?',
    answer:
      'Não. O BeanByte utiliza isolamento lógico dedicado por conta (multi-tenant), mantendo assinantes, planos, cafés e assinaturas da sua marca separados de qualquer outra empresa na plataforma.',
  },
  {
    question: 'Posso trocar de plano conforme meu clube de café cresce?',
    answer:
      'Sim. Você pode começar no Starter e evoluir para o Pro ou Scale a qualquer momento, aumentando os limites de assinantes, planos e catálogo sem perder histórico.',
  },
  {
    question: 'O BeanByte cobra comissão ou taxa percentual sobre cada venda?',
    answer:
      'Não cobramos comissão escondida sobre o seu faturamento. Você paga apenas a assinatura fixa do plano escolhido, mantendo previsibilidade total na sua margem.',
  },
  {
    question: 'Já tenho assinantes em planilhas. Consigo migrar para o BeanByte?',
    answer:
      'Sim. Nossa estrutura foi pensada para facilitar o cadastro inicial de cafés, planos e base de clientes, e no plano Scale oferecemos acompanhamento assistido na migração.',
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Plataforma',
    links: [
      { label: 'Recursos', anchor: 'recursos' },
      { label: 'Como funciona', anchor: 'como-funciona' },
      { label: 'Planos e preços', anchor: 'planos' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Solicitar demonstração', anchor: 'planos' },
    ],
  },
];
