# feat/rename-brand-beanbyte

## O que mudou e por quê

Atualização do nome visível do site e do produto de **SubClub** para **BeanByte**:

- **Marca e layout**: atualizados `<title>` em `src/index.html`, `BrandLogoComponent` (`alt` e nome exibido), `aria-label` da `NavbarComponent` e rodapé (`FooterComponent`).
- **Conteúdo comercial**: atualizadas as menções em `BenefitsSectionComponent`, `FaqSectionComponent`, `CtaBannerSectionComponent`, `PlanInterestDialogComponent` e `FAQ_ITEMS` em `src/app/data/landing-content.ts`.
- **Testes e documentação**: atualizados os specs correspondentes e `docs/design/content-and-sections.md`.

## Impacto visual, de conteúdo ou integração

- Toda a interface passa a exibir **BeanByte** em vez de **SubClub**, mantendo o identificador técnico da chave de tema (`subclub-site-theme`) para não invalidar preferências salvas no navegador.
- Sem alterações de rotas, estilos ou contratos de integração.
