# Conteúdo e Seções do Site Comercial

O `subclub-site` apresenta e vende o **SubClub**, uma plataforma SaaS B2B para empresas que operam clubes de assinatura recorrente.

---

## O Produto (SubClub)

Alinhado ao domínio implementado no backend (`C:\projects\go\sub-club`), o SubClub resolve a operação completa de clubes de assinatura:

- **Gestão de Assinantes (`Customers`)**: Cadastro completo, status de assinatura e histórico.
- **Planos e Catálogo (`Plans` & `Products`)**: Criação de planos flexíveis, combinação de produtos e controle de entregas/envios.
- **Assinaturas Recorrentes (`Subscriptions`)**: Acompanhamento de ciclos, renovações, suspensões e status de envio.
- **Arquitetura Multi-tenant Isolada (`Accounts`)**: Cada empresa opera em ambiente isolado com sua própria equipe (`Users`), papéis e limites configuráveis (`AccountPlans`).

---

## Estrutura da Landing Page (`v1`)

1. **Navbar (`#topo`)**:
   - Marca **SubClub**, links âncora (`Recursos`, `Como funciona`, `Planos`, `FAQ`), alternador de tema (claro/escuro) e CTA principal (`Começar agora`).
2. **Hero (`#inicio`)**:
   - Badge de posicionamento, headline centralizada sobre lançar e escalar um clube de assinaturas sem planilhas, subtítulo focado em gestão de assinantes, planos, produtos e entregas, CTAs (`Começar agora` e `Conhecer recursos`) e pontos de confiança.
3. **Benefícios / Recursos (`#recursos`)**:
   - Grid de cards usando Angular Material (`mat-card` + `mat-icon`) cobrindo os pilares reais da plataforma (Gestão de Assinantes, Planos Flexíveis, Catálogo & Envios, Multi-unidade / Equipe, Controle Financeiro e Operação Segura).
4. **Como Funciona (`#como-funciona`)**:
   - Passo a passo em 3 etapas: `1. Configure seu clube e produtos`, `2. Crie seus planos de assinatura`, `3. Gerencie assinantes e entregas em um só lugar`.
5. **Planos e Preços (`#planos`)**:
   - Alternância **Mensal / Anual** (com desconto anual de 20% exibido claramente via Signals).
   - 3 faixas comerciais coerentes com os limites de `AccountPlan` (`Starter`, `Pro` — destacado como mais popular — e `Scale`), exibindo limites de clientes, planos e produtos.
6. **FAQ (`#faq`)**:
   - Acordeão com `mat-accordion` / `mat-expansion-panel` respondendo dúvidas reais de quem quer montar ou migrar um clube de assinaturas para o SubClub.
7. **CTA Final + Footer**:
   - Chamada final reforçando início rápido e rodapé com links de seção e informações institucionais do SubClub.
8. **Diálogo de Solicitação de Acesso (`PlanInterestDialogComponent`)**:
   - Acionado pelos CTAs do Hero, Planos e Banner Final (`MatDialog` + `ReactiveFormsModule`), pré-selecionando o plano/ciclo escolhido e exibindo confirmação via `MatSnackBar`.
