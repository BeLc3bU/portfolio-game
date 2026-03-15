# Registro de Decisiones del Proyecto (PROJECT_LOG.md)

## [2026-03-15] Inicialización del Proyecto

### Decisiones Técnicas:
1.  **Framework UI**: React 19 (vía Vite 7/8). Se elige por su modernidad e integración con el portafolio existente del usuario.
2.  **Motor de Juego**: Phaser.js. Se selecciona como motor principal por su madurez, soporte de TypeScript y facilidad para crear juegos 2D comerciales o experimentales de alta calidad.
3.  **Estilos**: Tailwind CSS se configurará para la UI del portafolio que envuelva al juego.
4.  **Agentes de IA**: Se establece una estructura de agentes especializados para manejar el "Vibe Coding" del usuario, permitiendo que la IA se encargue de la implementación técnica compleja.

### Notas:
- El proyecto se ha inicializado con la plantilla `react-ts` de Vite.
- Se han instalado `phaser`, `lucide-react` y `framer-motion` como dependencias base.
- Se ha restaurado el archivo `AGENTS.md` después de que la CLI de Vite borrara los archivos existentes en el directorio.

## [2026-03-15] Fase 2: Mecánicas y Assets Kenney

### Decisiones Técnicas:
1.  **Movimiento**: Implementado en la clase `Player` con soporte para WASD y Flechas. Se usa normalización de vectores para evitar mayor velocidad en diagonales.
2.  **Sistema de Proximidad**: Las máquinas arcade (`ArcadeMachine`) detectan al jugador y muestran un prompt visual ("Presiona E") mediante cálculos de distancia Euclídea en el `update` de la escena.
3.  **Gestión de Assets**: Se han integrado sprites reales del pack de Kenney (`character-gamer`, `arcade-machine`, etc.) cargados dinámicamente mediante `URL` e `import.meta.url`.
