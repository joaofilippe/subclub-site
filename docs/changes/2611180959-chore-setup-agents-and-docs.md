# chore/setup-agents-and-docs

## O que mudou e por quê

Estruturação inicial de governança de agentes, documentação técnica e dependências de UI para o `subclub-site`, espelhando o padrão adotado em `C:\projects\go\sub-club`:

- **`.agents/rules/`** (regras sempre ativas para orquestração de agentes):
  - `persona.md`: postura de Dev Sênior Frontend, pragmatismo, Signals/standalone, previsibilidade e abordagem *spec-driven*.
  - `references.md`: mapa apontando para `docs/` como fonte única da verdade.
  - `git-workflow.md`: proteção da `main`, branches `kebab-case`, Conventional Commits em inglês, controle de push/PR e criação de changelogs cronológicos em `docs/changes/`.
  - `verification.md`: checklist obrigatório de build, testes headless e conferência responsiva/temas.
- **`docs/`** (fonte única da verdade do projeto):
  - `docs/design/architecture.md`: estrutura de pastas Angular 19, standalone components, Signals e separação de dados/apresentação.
  - `docs/design/ui-and-theming.md`: Angular Material 19, paleta violeta compartilhada com `subclub-front`, tokens CSS dark/light e breakpoints.
  - `docs/design/content-and-sections.md`: proposta de valor do SubClub e estrutura das seções da landing page v1.
  - `docs/development/setup-and-testing.md`: comandos, convenções de testes (Karma/Jasmine) e critério de conclusão.
- **`CLAUDE.md` e `README.md`**: guias enxutos apontando para `.agents/rules/` e `docs/`.
- **`package.json`**: instalados `@angular/material`, `@angular/cdk` e `@angular/animations` (`19.x`) e adicionado script `test:ci` (`ng test --watch=false --browsers=ChromeHeadless`).

## Impacto visual, de conteúdo ou integração

Nenhum impacto na aplicação em execução nesta etapa (mantido o placeholder inicial do Angular CLI). Alterações restritas à governança, documentação e preparação de dependências.
