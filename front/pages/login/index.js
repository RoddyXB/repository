import Loader from '/components/Loader/c_Loader'
import useValidateSesion from "../../hook/validateSesion";
import ComponentLogin from '../login/login'

function login() {
    const isLogin = useValidateSesion(false, true)
    return (
        <div>
            {
                isLogin ? <Loader /> : <ComponentLogin />
            }
        </div>
    )
}


export default login;
