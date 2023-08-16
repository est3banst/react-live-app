import Navbar from './componentes/Navbar';
import Chatview from './componentes/Chatview';
import Welcome from './componentes/Welcome';
import { useState } from 'react';
import './App.css';

function App() {

  const [user, setUsr] = useState(false);
  
  return (
    <div className="App">
      <Navbar />
      {!user ? (
        <Welcome /> 
      ) : (
        <>
        <Chatview />
        </>
      )}
    </div>
  );
}

export default App;
