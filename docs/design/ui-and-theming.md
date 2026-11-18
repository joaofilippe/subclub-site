# UI, Angular Material e Temas

O `subclub-site` compartilha a mesma identidade visual do `subclub-front`, garantindo consistência entre o site comercial e o painel da plataforma.

---

## Stack Visual

- **Framework UI**: `@angular/material` + `@angular/cdk` (versão 19.x).
- **Tipografia**: `Inter` (`400`, `500`, `600`, `700`) carregada via Google Fonts em `src/index.html`, acompanhada de `Material Icons`.
- **Paleta Principal**: Violeta (`mat.$violet-palette`) definida via `mat.define-theme(...)` em `src/styles.scss`.

---

## Temas (Dark & Light)

O projeto suporta alternância entre tema escuro (`body.dark-theme`, padrão inicial para visual SaaS moderno) e claro (`body.light-theme`), controlada pelo `ThemeService` em `src/app/core/theme/theme.service.ts` com persistência em `localStorage` (`subclub-site-theme`).

### Tokens CSS (`src/styles.scss`)

Sempre utilize as CSS custom properties em vez de cores hexadecimais hardcoded nos componentes:

| Token | Uso |
|---|---|
| `--bg-page` | Fundo principal da página |
| `--bg-surface` | Cards, painéis e superfícies elevadas |
| `--bg-surface-alt` | Bandas alternadas entre seções |
| `--bg-primary-tint` | Destaque suave com a cor primária |
| `--border-color` | Bordas sutis de cards e divisores |
| `--text-primary` | Títulos e texto principal |
| `--text-secondary` | Subtítulos e descrições |
| `--text-muted` | Metadados e legendas |
| `--color-primary` | Cor de destaque, ícones e ações principais |
| `--color-success` / `--color-success-bg` | Selos positivos e checklists |
| `--shadow-card` / `--shadow-card-hover` | Elevação de cards |

---

## Responsividade e Acessibilidade

- **Breakpoints**:
  - Desktop: `> 1024px` (largura máxima de conteúdo `1200px` centralizada).
  - Tablet: `<= 1024px`.
  - Mobile: `<= 768px` (navegação colapsada em menu/drawer acessível e grids em coluna única).
- **Contraste e Semântica**: Usar elementos semânticos (`<header>`, `<main>`, `<section>`, `<footer>`), `aria-label` em botões de ícone e hierarquia única de `<h1>` no Hero.
