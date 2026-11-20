export type BillingCycle = 'monthly' | 'annual';

export interface NavItem {
  label: string;
  anchor: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  highlighted?: boolean;
  description: string;
  monthlyPrice: number;
  limits: string[];
  features: string[];
  ctaLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}
