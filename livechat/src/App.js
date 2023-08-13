import Welcome from '.components/Welcome';
import { useState } from 'react';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState(false);
  return (
    <div className="App">
        <Welcome/>
        <>
        </>
      
    </div>
  );
}

export default App;
