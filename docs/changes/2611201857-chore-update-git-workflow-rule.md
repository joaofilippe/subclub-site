# chore/update-git-workflow-rule

## O que mudou e por quê

Refinada a regra de criação e reutilização de branches em `.agents/rules/git-workflow.md` e removido o arquivo `CLAUDE.md` por não ser mais utilizado no fluxo de agentes:

- Alterações na `main`/`master` continuam proibidas (sempre criar branch a partir da `main`).
- Ajustes e correções ligados ao objetivo da branch de trabalho atual devem ser feitos na própria branch, sem abrir novas branches desnecessárias.
- Quando uma solicitação tiver escopo distinto do propósito da branch atual, o agente deve perguntar ao usuário antes de criar uma nova branch (partindo preferencialmente da `main`) ou seguir na branch atual.
- Removido `CLAUDE.md` e sua referência em `README.md`, mantendo `.agents/rules/` e `docs/` como únicas referências de governança e documentação.

## Impacto visual, de conteúdo ou integração

- Nenhum. Alteração restrita às diretrizes de workflow Git e arquivos de instrução de agentes.
