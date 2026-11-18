# fix/navbar-backdrop-filter

## O que mudou e por quê

Adicionada a propriedade `-webkit-backdrop-filter: blur(12px)` antes de `backdrop-filter: blur(12px)` em `src/app/layout/navbar/navbar.component.scss` (`.navbar-wrapper`), garantindo compatibilidade do efeito de desfoque translúcido da barra de navegação fixa no Safari para iOS (e resolvendo o aviso de compatibilidade do linter/IDE).

## Impacto visual, de conteúdo ou integração

- Melhora a consistência visual do cabeçalho translúcido no Safari iOS, sem alterações estruturais, de conteúdo ou de integração.
