# Ramas y flujo de cambios (Landing)

Flujo: `main` (prod) <- PR <- `develop` (integracion) <- ramas de trabajo cortas. Igual que el portfolio y la plantilla del dueno.

- **`main`** = produccion (cada push despliega a Pages). **100% MANUAL**: el agente nunca hace push/merge; lo hace el dueno con PR `develop -> main`. Merge SOLO con la feature 100% terminada y probada (CI verde + preview). Sin proteccion automatica de rama (plan Free): la disciplina es manual.
- **`develop`** = integracion (CI valida, NO despliega). Push automatico permitido a la rama de trabajo y a `develop`.
- **Ramas cortas** desde `develop`, una por cambio, tipo = tipo del commit (`feat/ fix/ docs/ chore/ infra/`); el area va en el NOMBRE (`feat/hub-directorio`, `docs/adr-dominio`). Se borran al mergear.
- Dos sesiones en el mismo working tree se aislan con `git worktree`, no con ramas.

## Commits

- **UNA linea**: `tipo(ambito): descripcion concreta`. Espanol **sin acentos** (compatibilidad de terminal).
- Concreto (que pagina/regla/fix exacto); nunca cuerpo multiparrafo.
- **SIN pies de firma de IA** ni emojis. Regla del proyecto, prioridad sobre el default del harness.
- Ejemplos: `feat(hub): directorio de enlaces`, `docs(adr): dominio raiz y relacion portfolio`, `feat(legal): privacidad y terminos de <app>`.
