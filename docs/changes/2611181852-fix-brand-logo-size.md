# fix/brand-logo-size

## O que mudou e por quê

Ajustadas as dimensões do logotipo em `src/app/shared/components/brand-logo/brand-logo.component.ts` para compensar a margem interna do SVG (`Logo.svg`) e dar maior presença visual à marca:

- Tamanho `md` (padrão na header): imagem ampliada de `36px × 36px` para `56px × 56px` e texto `SubClub` para `1.35rem`.
- Tamanho `sm` (rodapé): imagem ampliada de `32px × 32px` para `44px × 44px` e texto para `1.2rem`.
- Tamanho `lg`: imagem ampliada de `44px × 44px` para `72px × 72px` e texto para `1.55rem`.

## Impacto visual, de conteúdo ou integração

- Aumenta a proporção do logotipo no cabeçalho (`72px` de altura) e no rodapé, sem alterar layout, rotas ou contratos de integração.
