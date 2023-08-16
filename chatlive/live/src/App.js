import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import Navbar from './componentes/Navbar';
import Chatview from './componentes/Chatview';
import Welcome from './componentes/Welcome';

function App() {
    const [user] = useAuthState(auth);
    return (
        <div className='App'>
            <Navbar />
            {!user ? (
                <Welcome />
            ): (
                <>
                <Chatview />
                </>
            )}
        </div>
    );
};
export default App