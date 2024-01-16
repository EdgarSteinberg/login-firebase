import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import appFirebase from '../src/credenciales';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import Home from './components/home';
import Login from './components/login/login';

const auth = getAuth(appFirebase)

function App() {

  const [usuario, setUsuario] = useState<User | null>(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })
  return (
    <>
      {usuario ? <Home correoUsuario={usuario.email} /> : <Login/>}
    </>
  )
}

export default App
