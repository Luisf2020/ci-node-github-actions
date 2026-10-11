# ci-node-github-actions

Pipeline CI en GitHub Actions: matrix de Node 18/20, lint y pruebas con node:test.

> Proyecto de portafolio de Luis Felipe Zuniga Leon. Desarrollado con asistencia de IA
> (generacion de codigo, revision y documentacion); el codigo fue revisado y probado manualmente.
> No declara clientes, metricas ni resultados no verificables.

## Stack

- GitHub Actions
- Node.js
- CI

## Como ejecutar

```bash
npm test
# El workflow corre en push/PR a main
```

## Estructura

```
.github/workflows/ci.yml  # pipeline
src/sum.js                # codigo
test/sum.test.js          # pruebas
```

## Estado

Muestra tecnica de portafolio. Sin datos de produccion.
