# Onboarding: levantar la landing desde cero (Landing)

> Pasos previstos (aun no verificados: no hay codigo). Se actualizan al hacer el bootstrap real.

## Requisitos del host

- Node 24 LTS (`.nvmrc` = 24) y npm.
- Git.
- Opcional: Podman (verificacion aislada e identica al CI, como el portfolio).

## Pasos (previstos)

1. Clonar el repo.
2. `npm ci`.
3. `npm run dev` para iterar; `npm run build` + `npm run preview` para verificar de verdad.
4. Abrir `http://localhost:4321/` y las rutas legales `/<app>/privacidad/`.
5. Opcional aislado: `podman compose up --build` (Node 24: `check` + `build` + `preview` en `:4321`).

## Problemas conocidos

- (Pendiente) Lockfile multiplataforma: al agregar dependencias con binarios nativos (`@tailwindcss/oxide`, `lightningcss`, `sharp`), regenerar `package-lock.json` en Linux (contenedor) o `npm ci` falla en CI. Misma trampa que el portfolio (doc 03, regla 6).
