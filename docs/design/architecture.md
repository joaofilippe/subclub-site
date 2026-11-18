# Arquitetura — SubClub Site

O `subclub-site` é o site comercial do **SubClub**, construído em **Angular 19** com componentes *standalone*, **Angular Material** e separação clara entre estado/dados, layout e seções da página.

---

## Estrutura de Pastas (`src/app/`)

```text
src/app/
├── core/
│   └── theme/              # ThemeService (alternância light/dark via Signals + CSS custom properties)
├── data/
│   └── landing-content.ts  # Dados tipados de seções, benefícios, planos, FAQ e navegação
├── shared/
│   ├── models/             # Interfaces TypeScript (Plan, Benefit, FaqItem, NavItem, etc.)
│   └── components/         # Componentes reutilizáveis (ex.: section-header)
├── layout/
│   ├── navbar/             # Barra de navegação fixa, âncoras, toggle de tema e CTA
│   └── footer/             # Rodapé institucional com links e informações de contato
└── features/
    └── landing/
        ├── landing.routes.ts              # Rotas lazy da landing page + providers de dialog/snackbar
        ├── landing-page.component.ts      # Container da página inicial
        ├── components/
        │   └── plan-interest-dialog/      # Diálogo Angular Material de solicitação de acesso
        └── sections/
            ├── hero/                      # Apresentação principal, proposta de valor e CTAs
            ├── benefits/                  # Benefícios e recursos da plataforma SubClub
            ├── how-it-works/              # Fluxo de implantação em passos simples
            ├── pricing/                   # Planos e preços (mensal/anual) do SubClub
            ├── faq/                       # Perguntas frequentes com mat-expansion-panel
            └── cta-banner/                # Chamada final para conversão
```

---

## Princípios de Design

1. **Standalone Components**: Todos os componentes usam `standalone: true` (padrão Angular 19) e imports explícitos apenas do que utilizam.
2. **Signals sobre RxJS para UI**: Estado local de UI (ciclo de cobrança mensal/anual, tema ativo, menu mobile aberto) deve usar `signal()` e `computed()`.
3. **Separação Dados vs Apresentação**: Textos, planos, benefícios e FAQs vivem tipados em `src/app/data/` e são consumidos pelos componentes via `input()` ou injeção/import direto — facilitando evolução futura para consumo via API sem refatorar templates.
4. **Control Flow Moderno**: Utilizar `@if`, `@for (...; track ...)` e `@switch` nos templates Angular.

---

## Convenções de Código e Nomenclatura

- **Idioma do Código**: Identificadores TypeScript (classes, interfaces, métodos, sinais, variáveis e arquivos) em **inglês** (`kebab-case` para nomes de arquivos).
- **Idioma da Interface**: Todo o conteúdo exibido ao usuário final (títulos, descrições, botões, FAQ, planos) deve ser escrito em **português (pt-BR)**.
- **Comentários**: Comente apenas o "porquê" não-óbvio; mantenha docstrings/comentários existentes não relacionados à alteração.
