import Loader from '/components/Loader/c_Loader'
import useValidateSesion from "../../hook/validateSesion";
import ComponentSider from '../sider/sider'

function login() {
    const isLogin = useValidateSesion(true, false)
    return (
        <div>
            {
                isLogin ? <ComponentSider /> : <Loader />
            }
        </div>
    )
}


export default login;
