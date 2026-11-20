---
trigger: always_on
---

# Diretrizes de Fluxo Git e Documentação (Branches, Commits e Changelog)

Sempre que uma alteração no repositório for solicitada, siga estritamente estas regras:

## 1. Verificação da Branch Atual e Criação de Branches

- Antes de realizar qualquer alteração em arquivos do projeto, verifique a branch atual (`git branch --show-current`).
- **Se estiver na branch `main` (ou `master`)**: **nunca** faça alterações diretamente nela. Crie e mude imediatamente para uma nova branch a partir da `main` (`git checkout -b <type>/<short-description>`).
- **Se já estiver em uma branch de trabalho (`!= main`/`master`)**:
  - Para ajustes, correções ou complementos alinhados ao objetivo da branch atual, **faça a alteração na própria branch** (não abra uma nova branch sem necessidade).
  - Só considere criar uma nova branch (preferencialmente a partir da `main`) quando o assunto da solicitação for bem diferente do propósito da branch atual — e, antes de criar, **pergunte ao usuário** se ele prefere criar uma nova branch ou realizar a alteração na branch atual.

## 2. Padrão de Nomeação de Branches (em Inglês)

Utilize `kebab-case` e nomes descritivos em **inglês**, seguindo os prefixos de Conventional Commits:

- `feat/<short-description>`: Novas funcionalidades, seções ou fluxos.
- `fix/<short-description>`: Correções de bugs visuais, de roteamento ou comportamento.
- `refactor/<short-description>`: Refatorações de código sem mudança de comportamento.
- `test/<short-description>`: Adição ou correção de testes.
- `docs/<short-description>`: Alterações apenas em documentação.
- `chore/<short-description>`: Configurações, dependências, regras de agentes ou tarefas de manutenção.

## 3. Padrão de Commits e Controle de Push

- Commitar ao fim de cada tarefa concluída.
- Todas as mensagens de commit devem ser escritas em **inglês** e seguir [Conventional Commits](https://www.conventionalcommits.org/):
  - Formato: `<type>(<optional-scope>): <description>`
  - Exemplos:
    - `feat(pricing): add billing cycle toggle to plans section`
    - `fix(header): close mobile drawer on anchor navigation`
    - `chore(rules): set up agent rules and docs structure`
- **Não fazer push nem abrir PR** sem que o usuário peça explicitamente.

## 4. Pós-Commit e Sincronia com Documentação (SubClub Site)

1. **Changelog**: Após cada commit de código/configuração, criar `docs/changes/<YYMMDDHHMM>-<branch-name>.md` (com o timestamp `YYMMDDHHMM` do momento da criação para ordenação cronológica) em estilo PR, cobrindo:
   - O que mudou e por quê;
   - Rotas, seções ou componentes novos ou alterados;
   - Impactos visuais, de conteúdo, SEO ou contratos de integração (ou indicar explicitamente quando não houver).
2. **Verificar `docs/`**: Avaliar se algum documento em `docs/` (`design/`, `development/`, etc.) precisa ser atualizado para refletir a nova realidade. Se sim, incluir no mesmo commit ou em um commit imediatamente seguinte.
