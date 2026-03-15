import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { gameConfig } from '../game/config/phaserConfig';

const GameContainer: React.FC = () => {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (!gameRef.current) {
      gameRef.current = new Phaser.Game({
        ...gameConfig,
        parent: 'game-container'
      });
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return (
    <div id="game-container" className="w-full h-full min-h-[600px] flex items-center justify-center bg-black overflow-hidden rounded-xl shadow-2xl border-4 border-slate-800" />
  );
};

export default GameContainer;
