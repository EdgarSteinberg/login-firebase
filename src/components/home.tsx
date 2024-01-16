import appFirebase from "../credenciales"
import { getAuth, signOut } from "firebase/auth"
const auth = getAuth(appFirebase)

interface HomeProps {
    correoUsuario: string | null;
  }

const Home: React.FC<HomeProps> = ({correoUsuario}) => {
    return(
        <>
        <h1 className="text-center">Bienvenido usuario {correoUsuario} <button onClick={()=> signOut(auth)} className="btn btn-primary">Logout</button> </h1>
        </>
    )
}

export default Home