'use client';
import { useState } from 'react';

export default function Home() {
  // 🧠 OUR APP'S BRAIN (STATE)
  const [currentView, setCurrentView] = useState('map'); // Active channels: 'map', 'feed', or 'profile'
  //const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  //const [numberOfPlungers, setNumberOfPlungers] = useState(0);

  // 🎨 HUNTER'S UNHINGED NEON THEME
  const bgTheme = "bg-zinc-950 text-white"; // Pitch black arcade cabinet
  const neonGreen = "text-[#39FF14]"; // Acid Green
  const neonPink = "text-[#FF00FF]"; // Hot Magenta
  const neonCyan = "text-[#00FFFF]"; // Electric Blue

  return (
    <main className={`h-[100dvh] w-full flex flex-col ${bgTheme} font-mono overflow-hidden`}>
      
      {/* HEADER */}
      <header className="p-4 border-b border-[#FF00FF] flex justify-between items-center shadow-[0_0_15px_rgba(255,0,255,0.3)] bg-zinc-900 z-10">
        <h1 className={`text-2xl font-black tracking-widest ${neonGreen} drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]`}>
          T.P.A. 🪠
        </h1>
        <button className="text-[10px] font-bold border border-[#39FF14] px-2 py-1 rounded hover:bg-[#39FF14] hover:text-black transition-colors uppercase tracking-wider">
          Punk Points: 0
        </button>
      </header>

      {/* MAIN CONTENT AREA (The TV Screen) */}
      <div className="flex-1 flex items-center justify-center p-4 relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-10">
        {/* We use JavaScript logic to decide which screen to show! */}
        {currentView === 'map' && (
          <div className="text-center animate-pulse">
            <p className="text-6xl mb-4">🗺️</p>
            <p className={`text-sm ${neonCyan} font-bold tracking-widest`}>INITIALIZING SATELLITE...</p>
            <p className="text-xs text-gray-500 mt-2">Locking coordinates on Lake Charles...</p>
          </div>
        )}
        
        {currentView === 'feed' && (
          <div className="text-center animate-pulse">
            <p className="text-6xl mb-4">📜</p>
            <p className={`text-sm ${neonPink} font-bold tracking-widest`}>FETCHING LOCAL LOGS...</p>
            <p className="text-xs text-gray-500 mt-2">Checking recent plungers...</p>
          </div>
        )}
      </div>

      {/* NEON NAVIGATION BAR (The Controller) */}
      <nav className="p-4 border-t border-[#00FFFF] flex justify-around items-center bg-zinc-900 shadow-[0_-5px_15px_rgba(0,255,255,0.2)] z-10 pb-8 md:pb-4">
        
        {/* BUTTON 1: THE MAP */}
        <button 
          onClick={() => setCurrentView('map')}
          className={`font-black text-xl tracking-widest transition-all ${currentView === 'map' ? `${neonGreen} drop-shadow-[0_0_8px_rgba(57,255,20,0.8)] scale-110` : 'text-zinc-600 hover:text-zinc-400'}`}
        >
          MAP
        </button>

        {/* BUTTON 2: THE FEED */}
        <button 
          onClick={() => setCurrentView('feed')}
          className={`font-black text-xl tracking-widest transition-all ${currentView === 'feed' ? `${neonPink} drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] scale-110` : 'text-zinc-600 hover:text-zinc-400'}`}
        >
          FEED
        </button>

      </nav>
    </main>
  );
}