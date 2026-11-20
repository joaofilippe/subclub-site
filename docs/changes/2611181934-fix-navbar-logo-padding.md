# fix/navbar-logo-padding

## O que mudou e por quê

Adicionado respiro ao redor do logotipo na barra de navegação fixa:

- **`src/app/layout/navbar/navbar.component.scss`**: adicionado `padding: 8px 12px` em `.navbar__brand` e ajustada a altura de `.navbar` de `72px` para `80px` para acomodar o logotipo (`56px`) com folga vertical e lateral.
- **`src/styles.scss`**: atualizado `scroll-margin-top` de `.section` de `72px` para `80px`, mantendo o alinhamento correto ao navegar pelas âncoras da página.

## Impacto visual, de conteúdo ou integração

- Melhora o espaçamento interno ao redor do logotipo na navbar sem afetar rotas, conteúdo ou contratos de integração.
