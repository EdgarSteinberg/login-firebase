import { useState } from 'react';
import imagen from '../../assets/login.jpg';
import imagenProfile from '../../assets/profile.jpg';
import styles from './styles.module.css';

import appFirebase from '../../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebase);

const Login = () => {
    const [registrando, setRegistrando] = useState(false);

    const funcAutentication = async (e: React.FormEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };

        const correo = target.email.value;
        const contraseña = target.password.value;

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña);
            } catch {
                alert("Asegurese que la contraseña tenga más de 8 caracteres");
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña);
            } catch (error) {
                alert("El usuario o la contraseña son incorrectos");
            }
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className={styles.padre}>
                            <div className='card card-body shadow-lg'>
                                <img src={imagenProfile} alt="" className={styles.estiloProfile} />
                                <form onSubmit={funcAutentication}>
                                    <input
                                        type="text"
                                        placeholder='Ingresar Email'
                                        className={styles.cajaTexto}
                                        id='email'
                                    />
                                    <input
                                        type="password"
                                        placeholder='Ingrese su Contraseña'
                                        className={styles.cajaTexto}
                                        id='password'
                                    />
                                    <button className={styles.btn}>{registrando ? 'Registrate' : 'Iniciar sesion'}</button>
                                </form>
                                <h4 className={styles.texto} >{registrando ? "si ya tienes cuenta" : "No tienes cuenta"}<button className={styles.btnRegistrando} onClick={() => setRegistrando(!registrando)}> {registrando ? "Inicia Sesion" : "Registrate"}</button></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <img src={imagen} alt="" className={styles.tamañoImagen} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
