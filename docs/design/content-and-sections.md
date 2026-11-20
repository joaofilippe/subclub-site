# Conteúdo e Seções do Site Comercial

O `subclub-site` apresenta e vende o **BeanByte**, uma plataforma SaaS B2B focada, neste momento, em torrefações, cafeterias e marcas que operam **clubes de assinatura de café**.

---

## O Produto (BeanByte)

Alinhado ao domínio implementado no backend (`C:\projects\go\sub-club`), o BeanByte resolve a operação completa de clubes de assinatura de café:

- **Gestão de Assinantes (`Customers`)**: Cadastro completo, status de assinatura e histórico.
- **Planos e Catálogo (`Plans` & `Products`)**: Criação de planos flexíveis, combinação de cafés/kits e controle de entregas/envios.
- **Assinaturas Recorrentes (`Subscriptions`)**: Acompanhamento de ciclos, renovações, suspensões e status de envio.
- **Arquitetura Multi-tenant Isolada (`Accounts`)**: Cada marca opera em ambiente isolado com sua própria equipe (`Users`), papéis e limites configuráveis (`AccountPlans`).

---

## Estrutura da Landing Page (`v1`)

1. **Navbar (`#topo`)**:
   - Marca **BeanByte**, links âncora (`Recursos`, `Como funciona`, `Planos`, `FAQ`), alternador de tema (claro/escuro) e CTA principal (`Ver planos`).
2. **Hero (`#inicio`)**:
   - Badge de posicionamento para clubes de assinatura de café, headline centralizada, subtítulo focado em gestão de assinantes, planos, catálogo de cafés e envios mensais, CTAs (`Começar agora` e `Conhecer recursos`), pontos de confiança e imagem de fundo (`public/images/background.jpg`) com painel translúcido e contraste adaptado aos temas claro e escuro.
3. **Benefícios / Recursos (`#recursos`)**:
   - Grid de cards usando Angular Material (`mat-card` + `mat-icon`) cobrindo os pilares reais da plataforma aplicados a clubes de café (Base de Assinantes, Planos Flexíveis, Catálogo de Cafés & Kits, Controle de Ciclos, Equipe e Operação Multi-tenant Segura).
4. **Como Funciona (`#como-funciona`)**:
   - Passo a passo em 3 etapas: `1. Estruture sua conta e catálogo`, `2. Publique planos e benefícios`, `3. Opere e escale com previsibilidade`.
5. **Planos e Preços (`#planos`)**:
   - Alternância **Mensal / Anual** (com desconto anual de 20% exibido claramente via Signals).
   - 3 faixas comerciais coerentes com os limites de `AccountPlan` (`Starter`, `Pro` — destacado como mais popular — e `Scale`), exibindo limites de assinantes, planos e produtos.
6. **FAQ (`#faq`)**:
   - Acordeão com `mat-accordion` / `mat-expansion-panel` respondendo dúvidas reais de quem quer montar ou migrar um clube de assinatura de café para o BeanByte.
7. **CTA Final + Footer**:
   - Chamada final reforçando início rápido e rodapé com links de seção e informações institucionais do BeanByte para clubes de assinatura de café.
8. **Diálogo de Solicitação de Acesso (`PlanInterestDialogComponent`)**:
   - Acionado pelos CTAs do Hero, Planos e Banner Final (`MatDialog` + `ReactiveFormsModule`), pré-selecionando o plano/ciclo escolhido e exibindo confirmação via `MatSnackBar`.
