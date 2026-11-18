# feat/commercial-landing-page

## O que mudou e por quê

Implementação da primeira versão da landing page comercial do **SubClub** em Angular 19 com Angular Material, alinhada visualmente ao `subclub-front` e à proposta de valor do produto:

- **Tema e Design System (`src/styles.scss`, `src/index.html`, `src/app/core/theme/theme.service.ts`)**:
  - Configurados temas escuro (padrão) e claro com `mat.$violet-palette`, tokens CSS compartilhados e persistência em `localStorage`.
  - Mixins seletivos do Angular Material e carregamento lazy da rota principal (`src/app/features/landing/landing.routes.ts`) mantendo o bundle inicial em `324.36 kB` sem avisos de budget.
- **Layout e Navegação (`src/app/layout/`)**:
  - `NavbarComponent`: navegação fixa com âncoras, alternador de tema, CTA e menu móvel responsivo (`<= 768px`).
  - `FooterComponent`: rodapé institucional com links rápidos.
- **Seções Comerciais (`src/app/features/landing/sections/`)**:
  - `HeroSectionComponent`: headline, proposta de valor, CTAs, pontos de confiança e prévia estilizada de operação do clube.
  - `BenefitsSectionComponent`: 6 cards cobrindo assinantes, planos, catálogo, recorrência, equipe e isolamento multi-tenant.
  - `HowItWorksSectionComponent`: fluxo de ativação em 3 passos.
  - `PricingSectionComponent`: alternância mensal/anual (`-20%`) via Signals e 3 faixas (`Starter`, `Pro` e `Scale`).
  - `FaqSectionComponent`: acordeão com `mat-expansion-panel` respondendo dúvidas frequentes.
  - `CtaBannerSectionComponent` e `PlanInterestDialogComponent`: diálogo de solicitação de acesso com validação reativa (`ReactiveFormsModule`) e confirmação via `MatSnackBar`.
- **Qualidade e Testes**:
  - Adicionados testes unitários (`*.spec.ts`) para serviço de tema, layout, seções e diálogo (20/20 passando em `ChromeHeadless`).
  - Atualizados `docs/design/architecture.md` e `docs/design/content-and-sections.md`.

## Impacto visual, de conteúdo ou integração

- Substitui a página inicial padrão do Angular CLI pela landing page comercial completa do SubClub em `pt-BR`.
- Sem integração HTTP com API nesta v1 (a solicitação de acesso exibe confirmação local via `MatSnackBar`, pronta para futura conexão ao backend).
