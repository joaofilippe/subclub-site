import {
  BenefitItem,
  FaqItem,
  FooterColumn,
  HeroMetric,
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

export const HERO_METRICS: HeroMetric[] = [
  {
    label: 'Assinantes ativos',
    value: '1.284',
    trend: '+18% este mês',
    icon: 'groups',
  },
  {
    label: 'Receita recorrente',
    value: 'R$ 89,4 mil',
    trend: '96,4% retenção',
    icon: 'trending_up',
  },
  {
    label: 'Entregas do ciclo',
    value: '412 boxes',
    trend: 'Em separação',
    icon: 'local_shipping',
  },
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
      'Crie pacotes mensais, trimestrais ou anuais combinando faixas de preço, benefícios e periodicidade de envio.',
  },
  {
    icon: 'inventory_2',
    tag: 'Catálogo',
    title: 'Produtos e kits organizados',
    description:
      'Estruture o catálogo do seu clube (cafés, vinhos, livros, cosméticos ou itens exclusivos) e vincule diretamente aos planos.',
  },
  {
    icon: 'autorenew',
    tag: 'Recorrência',
    title: 'Controle completo de ciclos',
    description:
      'Gerencie ativações, pausas, upgrades e cancelamentos com rastreabilidade clara para sua equipe operacional.',
  },
  {
    icon: 'admin_panel_settings',
    tag: 'Equipe',
    title: 'Papéis e permissões por usuário',
    description:
      'Separe administradores, operação e atendimento com acesso controlado ao painel administrativo da sua conta.',
  },
  {
    icon: 'shield',
    tag: 'Isolamento',
    title: 'Dados 100% isolados por marca',
    description:
      'Arquitetura multi-tenant dedicada garante que os dados dos seus clientes, planos e produtos fiquem isolados com segurança.',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: '01',
    icon: 'storefront',
    title: 'Estruture sua conta e catálogo',
    description:
      'Ative o ambiente da sua marca, convide sua equipe e cadastre os produtos ou curadorias que compõem o seu clube.',
  },
  {
    number: '02',
    icon: 'tune',
    title: 'Publique planos e benefícios',
    description:
      'Defina valores, ciclos de cobrança e combinações de produtos para cada categoria de assinante do seu negócio.',
  },
  {
    number: '03',
    icon: 'rocket_launch',
    title: 'Opere e escale com previsibilidade',
    description:
      'Acompanhe novos assinantes, renovações e envios do mês sem depender de planilhas paralelas.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Ideal para validar seu primeiro clube de assinatura com organização profissional.',
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
    description: 'Para clubes em crescimento que precisam de mais capacidade, equipe e escala.',
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
    description: 'Feito para operações consolidadas e clubes de alto volume recorrente.',
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
    question: 'Para que tipos de clube de assinatura o SubClub foi feito?',
    answer:
      'O SubClub atende tanto clubes de produtos físicos recorrentes — como cafés especiais, vinhos, livros, pet e cosméticos — quanto clubes de benefícios e comunidades que precisam gerenciar assinantes, planos e entregas.',
  },
  {
    question: 'Os dados da minha empresa ficam misturados com os de outros clientes?',
    answer:
      'Não. O SubClub utiliza isolamento lógico dedicado por conta (multi-tenant), mantendo assinantes, planos, produtos e assinaturas da sua marca separados de qualquer outra empresa na plataforma.',
  },
  {
    question: 'Posso trocar de plano conforme meu clube cresce?',
    answer:
      'Sim. Você pode começar no Starter e evoluir para o Pro ou Scale a qualquer momento, aumentando os limites de assinantes, planos e catálogo sem perder histórico.',
  },
  {
    question: 'O SubClub cobra comissão ou taxa percentual sobre cada venda?',
    answer:
      'Não cobramos comissão escondida sobre o seu faturamento. Você paga apenas a assinatura fixa do plano escolhido, mantendo previsibilidade total na sua margem.',
  },
  {
    question: 'Já tenho assinantes em planilhas. Consigo migrar para o SubClub?',
    answer:
      'Sim. Nossa estrutura foi pensada para facilitar o cadastro inicial de produtos, planos e base de clientes, e no plano Scale oferecemos acompanhamento assistido na migração.',
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
