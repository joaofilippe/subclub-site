# Setup Local e Padrões de Teste

## Pré-requisitos

- **Node.js**: 22+
- **npm**: 10+
- **Angular CLI**: 19.x (`ng`)

## Comandos Comuns

```bash
npm install                                      # Instala dependências
npm start                                        # Inicia servidor de dev em http://localhost:4200
npm run build                                    # Build de produção em dist/subclub-site
npm run test:ci                                  # Executa testes unitários em modo headless (única execução)
npm test                                         # Executa testes unitários em modo watch (Karma)
```

---

## Convenções de Testes (Karma + Jasmine)

1. **Cobertura mínima por componente/serviço**:
   - Todo componente de página/seção e serviço em `src/app/` deve possuir seu arquivo `*.spec.ts` correspondente.
2. **Estrutura AAA (`Arrange / Act / Assert`)**:
   - Organize cada `it(...)` de forma clara, evitando lógica complexa dentro dos testes.
3. **Nomenclatura**:
   - `describe('<NomeDaClasse>', () => { ... })`
   - `it('should <comportamento esperado> when <cenário>', ...)` (em inglês, alinhado ao código).
4. **Angular Material / Animations**:
   - Utilize `provideNoopAnimations()` (ou `NoopAnimationsModule`) no `TestBed` para evitar flakiness de animações em testes unitários.
5. **Critério de conclusão**:
   - Nenhuma tarefa com alteração de código pode ser concluída sem rodar `npm run test:ci` e `npm run build` com 100% de sucesso.
