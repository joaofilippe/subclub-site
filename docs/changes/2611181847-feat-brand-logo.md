# feat/brand-logo

## O que mudou e por quê

Centralização e integração do logotipo oficial do SubClub (`public/images/Logo.svg`), substituindo o ícone provisório (`mat-icon` `subscriptions`) por um componente compartilhado reutilizável:

- **Componente compartilhado (`BrandLogoComponent`)**:
  - Criado em `src/app/shared/components/brand-logo/brand-logo.component.ts` (+ `.spec.ts`), exibindo `images/Logo.svg` com suporte a tamanhos (`sm`, `md`, `lg`) e exibição opcional do texto `SubClub` via `input()`.
- **Layout (`NavbarComponent` e `FooterComponent`)**:
  - Atualizados `navbar.component.*` e `footer.component.*` para renderizar `<app-brand-logo />`, removendo estilos e imports duplicados de `MatIconModule` no rodapé.
- **Favicon e Documentação**:
  - Adicionado `<link rel="icon" type="image/svg+xml" href="images/Logo.svg">` em `src/index.html` (mantendo `favicon.ico` como fallback).
  - Atualizado `docs/design/architecture.md` com `brand-logo` em `src/app/shared/components/`.

## Impacto visual, de conteúdo ou integração

- Cabeçalho, rodapé e ícone da aba do navegador passam a exibir o logotipo oficial do SubClub (`Logo.svg`), mantendo `logo.png` disponível em `public/images/` para usos futuros (ex.: Open Graph / redes sociais).
- Sem alterações de rotas, conteúdo textual ou contratos de integração.
