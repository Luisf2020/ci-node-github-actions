# ci-node-github-actions

![stack: GitHub Actions](https://img.shields.io/badge/stack--GitHub%20Actions-0d9488?style=flat-square) ![stack: Node.js](https://img.shields.io/badge/stack--Node.js-0d9488?style=flat-square) ![stack: CI](https://img.shields.io/badge/stack--CI-0d9488?style=flat-square)
![IA: asistido](https://img.shields.io/badge/IA--asistido-6366f1?style=flat-square)

Pipeline CI en GitHub Actions: matrix de Node 18/20, lint y pruebas con node:test.

> **Transparencia sobre IA:** este proyecto se desarrollo con asistencia de inteligencia artificial (generacion de codigo, revision y documentacion). El codigo fue leido, ejecutado y probado manualmente antes de publicarse. No declara clientes, metricas ni resultados que no puedan verificarse.

## Problema que resuelve

Evitar que codigo sin pruebas llegue a la rama principal.

## Solucion implementada

Workflow que ejecuta lint y pruebas en una matriz de Node 18 y 20 sobre cada push y pull request, usando node:test sin dependencias externas.

### Funcionalidades principales

- Matriz de versiones de Node
- Cache de dependencias npm
- Pruebas con node:test y assert strict
- Se ejecuta en push y PR

## Stack

- GitHub Actions
- Node.js
- CI

## Estructura

```
.github/workflows/ci.yml  # pipeline
src/sum.js                # codigo
test/sum.test.js          # pruebas
```

## Puesta en marcha

```bash
npm test
# El workflow corre en push/PR a main
```

## Complejidad del proyecto

**Nivel: Intermedio** — Es un pipeline de integracion continua: valida el codigo, no un producto web.

El nivel describe la complejidad tecnica del proyecto, no el grado de dominio de quien lo escribio.

## Despliegue

Proyecto de CI; no genera un sitio.  
El codigo fuente si esta disponible en este repositorio.

## Autor

**Luis Felipe Zuniga Leon** — Desarrollador de software asistido por IA

- GitHub: <https://github.com/Luisf2020>

---

_Proyecto de portafolio. El desarrollo se apoyo en herramientas de IA bajo revision tecnica humana._
