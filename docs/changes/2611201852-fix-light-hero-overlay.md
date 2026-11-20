# fix/light-hero-overlay

## O que mudou e por quê

Ajustada a transparência do overlay sobre `background.jpg` no Hero para evitar que a imagem ficasse lavada/apagada no tema claro:

- **`src/styles.scss`**:
  - Em `body.light-theme`, substituído o véu uniforme (`0.76..0.88`) por uma combinação de `radial-gradient` suave atrás do texto central (`0.72` no centro caindo para `0.18` nas bordas) e `linear-gradient` leve (`0.18..0.32` até `#f7f7fb` na base), revelando a textura dos grãos de café com nitidez.
  - Em `body.dark-theme`, suavizada a opacidade de `0.72..0.84` para `0.56..0.72`.
  - Adicionado `--hero-text-shadow` nos dois temas para manter a leitura do título e subtítulo sobre a fotografia.
- **`src/app/features/landing/sections/hero/hero-section.component.scss`**: aplicado `text-shadow: var(--hero-text-shadow)` em `.hero__title` e `.hero__subtitle`.

## Impacto visual, de conteúdo ou integração

- Aumenta significativamente a visibilidade e o contraste da imagem de fundo no tema claro (e no tema escuro) sem prejudicar a legibilidade do texto.
- Sem alterações de rotas, conteúdo textual ou contratos de integração.
