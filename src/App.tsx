import { useState } from 'react'
import { Monitor, Gamepad2, Terminal, User, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import GameContainer from './components/GameContainer'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState<'game' | 'about'>('game')

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      {/* Header / Navigation */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-5xl flex items-center justify-between mb-8 glass-morphism p-4 rounded-2xl"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center neon-border">
            <Gamepad2 className="text-white" />
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Pedro Úbeda Sánchez
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => setActiveTab('game')} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${activeTab === 'game' ? 'bg-indigo-600/20 text-indigo-400' : 'hover:bg-white/5'}`}>
            <Monitor size={18} /> Juego
          </button>
          <button onClick={() => setActiveTab('about')} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${activeTab === 'about' ? 'bg-indigo-600/20 text-indigo-400' : 'hover:bg-white/5'}`}>
            <User size={18} /> Sobre mí
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <Terminal className="text-slate-400 cursor-pointer hover:text-white transition-colors" />
          <FileText className="text-slate-400 cursor-pointer hover:text-white transition-colors" />
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-5xl aspect-video relative flex items-center justify-center"
      >
        {activeTab === 'game' ? (
          <GameContainer />
        ) : (
          <div className="w-full h-full glass-morphism rounded-3xl p-12 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold mb-6">Próximamente</h2>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Estamos construyendo un portafolio interactivo basado en un juego 2D. 
              Pronto podrás explorar mi experiencia y proyectos de una manera totalmente nueva.
            </p>
          </div>
        )}

        {/* Floating Controls Hint */}
        {activeTab === 'game' && (
          <div className="absolute bottom-6 left-6 flex gap-4 pointer-events-none">
            <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded border border-white/10 text-xs text-slate-300">
              [WASD] Mover
            </div>
            <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded border border-white/10 text-xs text-slate-300">
              [E] Interactuar
            </div>
          </div>
        )}
      </motion.main>

      {/* Footer */}
      <footer className="mt-8 text-slate-500 text-sm">
        &copy; 2026 Pedro Úbeda Sánchez • Vibe Coding con Antigravity
      </footer>
    </div>
  )
}

export default App
