# fix/center-brand-logo

## O que mudou e por quê

Corrigido o alinhamento vertical e horizontal do logotipo em relação à header e ao texto `SubClub`:

- **`public/images/Logo.svg`**: o desenho original ocupava `x: 637.5..1735.4` e `y: 0.0..1866.8` dentro de `viewBox="0 0 2048 2048"`, deixando 181 unidades vazias apenas embaixo e deslocando o centro visual. Ajustado o `viewBox` para `233 -20 1907 1907`, centralizando simetricamente o ícone em torno do seu centro geométrico (`1186.5, 933.4`).
- **`src/app/shared/components/brand-logo/brand-logo.component.ts`**: adicionado `:host { display: inline-flex; align-items: center; }`, `line-height: 1` em `.brand-logo__name` e `gap: 8px`.
- **`src/app/layout/navbar/navbar.component.scss`**: adicionado `line-height: 1` em `.navbar__brand`.

## Impacto visual, de conteúdo ou integração

- Centraliza o logotipo verticalmente na barra de navegação e alinha o ícone com o texto `SubClub` e no favicon, sem alterações de conteúdo, rotas ou contratos de integração.
