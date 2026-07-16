# 0003: Contenido en el repo, sin CMS ni backend en la v1

- **Fecha:** 2026-07-15
- **Estado:** Aceptada

## Contexto

La landing necesita mantener un directorio de enlaces y varias paginas legales por app. Existe un proyecto `admin` (CMS del ecosistema) que a futuro podria administrar contenido, pero aun no existe. La landing debe poder lanzarse sin depender de el.

## Decision

En la v1, todo el contenido de la landing (enlaces y legales) vive **en el repo** como datos tipados y Markdown, sin CMS ni backend. La landing no llama a ninguna API en runtime.

## Alternativas consideradas

- **Consumir la API de `admin` desde el build**: acopla el lanzamiento de la landing al del backend, que aun no existe; ademas los legales cambian poco y ganan mas de estar versionados en git (diffs revisables, historial) que de estar en una base de datos.
- **Un CMS externo (headless)**: dependencia y costo innecesarios para el volumen actual.

## Consecuencias

- Se gana: lanzamiento independiente, contenido versionado, cero infraestructura.
- Se paga: actualizar un legal requiere editar el repo y desplegar (aceptable: cambian poco y los edita el dueno).
- Futuro: si el directorio de proyectos se vuelve dinamico, se puede leer la API de `admin` en build (SSG), no en cliente, y se documenta con un ADR nuevo. El principio de "solo datos verificados" se mantiene en cualquier caso.
