# fix/hero-text-contrast

## O que mudou e por quê

Aumentado o contraste e o destaque visual da tipografia da seção Hero sobre `background.jpg` nos dois temas:

- **`src/app/features/landing/sections/hero/hero-section.component.scss`**:
  - Adicionado painel translúcido com desfoque (`-webkit-backdrop-filter: blur(12px)`, `backdrop-filter: blur(12px)`, borda sutil e sombra) em `.hero__content`, isolando as letras da textura detalhada dos grãos de café sem esconder a foto ao redor.
  - Reforçado o contraste e o peso tipográfico de `.hero__title`, `.hero__highlight`, `.hero__subtitle` e `.hero__trust-item`.
- **`src/styles.scss`**:
  - Adicionados os tokens `--hero-panel-bg`, `--hero-panel-border`, `--hero-subtitle-color` e `--hero-highlight-color` em `body.dark-theme` e `body.light-theme`.
  - Suavizado `--hero-overlay` ao redor do painel para preservar a vivacidade da imagem de fundo.

## Impacto visual, de conteúdo ou integração

- Melhora expressiva na legibilidade e no destaque dos textos do Hero nos temas claro e escuro.
- Sem alterações de rotas, conteúdo textual ou contratos de integração.
