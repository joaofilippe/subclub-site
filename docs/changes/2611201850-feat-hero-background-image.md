# feat/hero-background-image

## O que mudou e por quê

Adicionada a imagem `public/images/background.jpg` como fundo da primeira seção da página inicial (`HeroSectionComponent`), mantendo legibilidade nos temas claro e escuro:

- **`src/app/features/landing/sections/hero/hero-section.component.html` e `hero-section.component.scss`**: adicionada `<img class="hero__bg" src="images/background.jpg" ... fetchpriority="high">` com `object-fit: cover` e overlay gradiente via pseudo-elemento `::after` acima da imagem e abaixo de `.hero__container`.
- **`src/styles.scss`**: adicionado o token `--hero-overlay` em `body.dark-theme` e `body.light-theme` para suavizar a foto de fundo, preservar contraste da tipografia e integrar a base do Hero ao fundo da página (`--bg-page`).
- **`src/app/features/landing/sections/hero/hero-section.component.spec.ts`**: adicionada asserção para o carregamento de `images/background.jpg`.
- **`docs/design/content-and-sections.md`**: atualizada a descrição da seção Hero.

## Impacto visual, de conteúdo ou integração

- A primeira dobra passa a exibir a textura de grãos de café (`background.jpg`) sob um véu translúcido adaptado ao tema ativo.
- Sem alterações de rotas, conteúdo textual ou contratos de integração.
