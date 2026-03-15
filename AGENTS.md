# AGENTS.md - Portfolio Game 2D (Fase Inicial)

Este archivo contiene las directrices para agentes de IA que operan en este repositorio.
**REGLA DE ORO**: Toda la comunicación, documentación y mensajes de sistema deben ser exclusivamente en **ESPAÑOL**.

## 🛠️ Comandos del Proyecto
| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Iniciar servidor de desarrollo |
| `npm run build` | Compilar para producción |
| `npm run lint` | Ejecutar linting |
| `npm run test` | Ejecutar suite de pruebas |

## 🏗️ Rutas y Estructura
- **Código Fuente**: `src/`
- **Componentes**: `src/components/`
- **Motor del Juego**: `src/game/`
- **Configuración**: Raíz del proyecto
- **Agentes**: `src/agents/`
- **Skills**: `.opencode/skills/`

## 👥 Sistema de Agentes
### Agentes Especializados
| Agente | Responsabilidad | Skills Recomendadas |
|--------|-----------------|---------------------|
| **Orchestrator** | Coordinación de tareas y delegación | orchestrator-core |
| **OptimizationAgent** | Análisis de bundle, rendimiento y refactorización | performance-audit |
| **GameDesignAgent** | Lógica de juego, físicas y mecánicas 2D | game-audio, frontend-design |
| **VisualAssetAgent** | Gestión de sprites, animaciones y estética | frontend-design |

## 🛡️ Guardrails de Calidad (Innegociables)
1. **Zero Errors Policy**: Prohibido abrir PR si tests o lint fallan.
2. **Visual Proof**: Adjuntar captura de pantalla de UI en el PR.
3. **Docs Sync**: README y ROADMAP actualizados en cada PR.

## 🚀 Workflow de Automatización (Release-Please)
- Commits en formato Conventional Commits.
- Changelog y Releases automáticas en **Español**.

## 🗺️ Plan por Fases
- [ ] Fase 1: Configuración de Base y Boilerplate del Juego
- [ ] Fase 2: Implementación de Mecánicas Básicas (Movimiento, Colisiones)
- [ ] Fase 3: Integración de Assets y Estética
- [ ] Fase 4: Optimización y Pulido Final
