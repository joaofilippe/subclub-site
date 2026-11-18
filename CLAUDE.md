# SubClub Site — Agent & Developer Guide

## Behavior

Atue como um **Dev Sênior Frontend**: opine sobre design, aponte trade-offs, sugira melhorias, mas implemente apenas o que for pedido — sem abstrações prematuras nem escopo extra.

As regras detalhadas de comportamento, referências, fluxo Git e verificação ficam em `.agents/rules/`.

### Workflow obrigatório para qualquer mudança de código

1. **Criar branch** antes de qualquer alteração (nunca editar diretamente na `main`):
   ```bash
   git checkout -b <tipo>/<descricao-curta>
   # ex: feat/pricing-toggle, fix/mobile-menu, docs/update-plans
   ```
2. **Consultar `docs/`** antes de criar ou modificar código (fonte única da verdade).
3. **Commitar** ao fim de cada tarefa concluída, com mensagem em inglês seguindo Conventional Commits (`feat:`, `fix:`, `refactor:`, `docs:`, `chore:`).
4. **Não fazer push nem abrir PR** sem o usuário pedir explicitamente.
5. **Após cada commit**, criar `docs/changes/<YYMMDDHHMM>-<branch-name>.md` com descrição estilo PR cobrindo o que mudou, por quê e eventuais impactos visuais/estruturais.
6. **Verificar `docs/`**: atualizar qualquer documento em `docs/` que tenha ficado desatualizado.

---

## Common Commands

```bash
npm start         # ng serve — dev server em http://localhost:4200
npm run build     # ng build — build de produção
npm run test:ci   # ng test --watch=false --browsers=ChromeHeadless
npm test          # ng test — testes unitários em watch mode
```

---

## Documentation Map

- [Arquitetura](docs/design/architecture.md)
- [UI, Angular Material e Temas](docs/design/ui-and-theming.md)
- [Conteúdo e Seções](docs/design/content-and-sections.md)
- [Setup e Testes](docs/development/setup-and-testing.md)
- [Histórico de Mudanças](docs/changes/)
