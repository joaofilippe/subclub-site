---
trigger: always_on
---

# Verificação e Testes (Checklist do Agente)

Antes de criar, alterar ou concluir qualquer tarefa que modifique código:

1. **Padrões e Docs**: Leia `docs/development/setup-and-testing.md` e os documentos relevantes em `docs/design/` antes de implementar ou refatorar componentes e testes.
2. **Build de Produção**: Execute `npm run build` após alterações estruturais, de rotas ou de estilos/SCSS para garantir zero erros de compilação e budgets respeitados.
3. **Execução Obrigatória de Testes**: Rode `npm test -- --watch=false --browsers=ChromeHeadless` (ou `npm run test:ci`) após a última edição e só conclua a tarefa quando todos os testes passarem.
4. **Conferência Visual/Responsiva**: Quando alterar layout ou estilos, valide mentalmente (ou via browser quando aplicável) breakpoints mobile (`<= 768px`), tablet e desktop, além dos temas claro e escuro.
