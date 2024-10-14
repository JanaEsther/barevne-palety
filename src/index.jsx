import React from 'react';
import { createRoot } from 'react-dom/client';
import Palette from './components/Palette/Palette';
import { palettes } from './palettes';
import './style.css';

/*
Importy(pořadí):
1.Importing node modules or packages (like React)
2.Importing JavaScript modules or components (if any)
3.Importing assets (images, SVG, etc.)
4.Data or utility imports
5.CSS/Styling importsImporting node modules or packages (like React)
*/

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        {palettes.map((palette) => (
          <Palette key={palette.name} paletteData={palette} />
        ))}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
