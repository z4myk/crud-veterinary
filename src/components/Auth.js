import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import logo from '../img/logo.png'
const Auth = () => {
    const { user } = useAuth0();

    return (
        <div className="container text-center my-3  animate__animated animate__fadeIn row">

            <div className="col-md-5 col-sm-12" > 
            <span className="">Hola, {user.name}! </span>
            <br />
            <img className="rounded" width={50} height={50} src={user.picture} alt="foto" />
            {/* <div>Logueado: {String(isAuthenticated)}</div> */}
            <div className="my-1">Verificado: {!user.email_verified ? (<i class="fas fa-times text-danger"></i>) : (<i class="fas fa-check text-success"></i>) }</div>
            <br />

            </div>
            <div className="col-md-7 col-sm-12">
                <img className="w-75" src={logo} alt="logo veterinaria" />
            </div>

        </div>
    );
};

export default withAuthenticationRequired(Auth);