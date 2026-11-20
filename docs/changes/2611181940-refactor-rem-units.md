# refactor/rem-units

## O que mudou e por quê

Padronização das medidas de CSS em `rem` (`1rem = 16px`) em todo o projeto para melhor escalabilidade e acessibilidade com preferências de fonte do navegador:

- **Layout e componentes compartilhados**: convertidos espaçamentos, alturas, larguras e raios de borda em `navbar.component.scss`, `footer.component.scss`, `brand-logo.component.ts`, `section-header.component.ts` e `src/styles.scss`.
- **Seções da landing page e diálogo**: convertidos `hero-section.component.scss`, `benefits-section.component.scss`, `how-it-works-section.component.scss`, `pricing-section.component.scss`, `faq-section.component.scss`, `cta-banner-section.component.scss` e `plan-interest-dialog.component.scss`.
- **Documentação**: atualizada a seção de unidades em `docs/design/ui-and-theming.md`, mantendo `px` apenas para bordas finas (`1px`), sombras, filtros (`blur`) e `@media` breakpoints.

## Impacto visual, de conteúdo ou integração

- Visual equivalente na escala padrão de `16px`, agora respondendo proporcionalmente às configurações de tamanho de fonte do usuário. Sem alterações de conteúdo, rotas ou contratos de integração.
