# feat/remove-hero-preview-panel

## O que mudou e por quê

Removido o painel ilustrativo de "Operação ativa" (`Clube Café do Norte` e métricas fictícias) da seção Hero por ainda não haver clientes ativos em produção:

- **`src/app/features/landing/sections/hero/hero-section.component.*`**: removido o card `.preview-card`, os imports de `MatCardModule` e `HERO_METRICS`, e reestruturado o Hero para layout centralizado em coluna única (`.hero__content`), mantendo badge, headline, subtítulo, CTAs e pontos de confiança.
- **`src/app/data/landing-content.ts` e `src/app/shared/models/landing.model.ts`**: removidos `HERO_METRICS` e a interface `HeroMetric` que deixaram de ser utilizados.
- **`src/app/features/landing/sections/hero/hero-section.component.spec.ts`**: atualizado o teste unitário para validar os pontos de confiança e a ausência do `.preview-card`.
- **`docs/design/content-and-sections.md`**: atualizada a descrição da seção Hero.

## Impacto visual, de conteúdo ou integração

- A dobra inicial passa a destacar o posicionamento e os CTAs de conversão de forma centralizada, sem métricas fictícias de clientes.
- Sem alterações de rotas, planos ou contratos de integração.
