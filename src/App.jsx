// import './App.css'
// import { Landing } from './View/landing'

// function App() {

//   return (
//     <div>
//       <Landing></Landing>
//     </div>
//   )
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import { Landing } from './View/landing';
import { Preloader } from './components/Preloader/Preloader';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 1000); // Mostrar el preloader durante 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPreloader && <Preloader />}
      {!showPreloader && <Landing />}
    </>
  );
}

export default App;


