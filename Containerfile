# Verificacion contenedorizada de la landing (se pidio Podman). Aislado del
# Node local: solo necesita Podman.
#
#   podman compose up --build      construye (corre build) y sirve en :4321
#   podman compose down            detiene y limpia
#
FROM docker.io/library/node:24-slim

WORKDIR /app

# Instalacion reproducible con la lockfile (generada en Linux: evita la trampa
# multiplataforma de binarios nativos: oxide, lightningcss). Identica al CI.
COPY package.json package-lock.json ./
RUN npm ci

# Resto del proyecto (respeta .containerignore).
COPY . .

# Gate: si el type-check o el build fallan, la imagen no se construye.
RUN npm run check && npm run build

EXPOSE 4321
# Sirve el build final; --host lo expone fuera del contenedor.
CMD ["npx", "astro", "preview", "--host", "--port", "4321"]
