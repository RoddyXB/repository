import { Layout } from 'antd'
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import Contenido from "/components/Router/c_Router"
import config from '/config/default'
import { axiosGet } from "/config/http";
import { useState, useEffect } from 'react';
import TopicMenu from "/components/TopicMenu";
import NavBar from "/components/NavBar/NavBar";
import SideBar from "/components/SideBar/SideBar";
import C_Loader from '/components/Loader/c_Loader';
import { changeUrl } from '/src/features/Menu/routeMenu';
import { changeLoading } from '/src/features/initSider/init';
import { ModalKruger } from "/config/ant_components";

var CancelToken = null
var source = null

function App() {
    const routeMenu = useSelector(state => state.routeMenu.value)
    const Loading = useSelector(state => state.initSider.Loading)
    const [dataUser, setDataUser] = useState({});
    const [dataMenu, setDataMenu] = useState([]);
    const [VisibleMovil, setVisibleMovil] = useState(false);
    const dispatch = useDispatch()
    useEffect(() => {
        try {
            dispatch(changeLoading(true))
            CancelToken = axios.CancelToken;
            source = CancelToken.source();
            const user = JSON.parse(localStorage.getItem("token"))
            setDataUser(user)
            axiosGet(config.ip_web + "/rol?id=" + user.idRol).then(res => {
                const response = res.data
                if (!Array.isArray(response)) {
                    return ModalKruger("Ocurrio un problema al retornar datos.", "warn")
                }
                if (response.length == 0) {
                    localStorage.removeItem("token")
                    Router.push('/login')
                    return ModalKruger("Usuario sin Rol.", "warn")
                }
                if (response[0].nameRol == "ADMINISTRADOR") {
                    setDataMenu([
                        {
                            descripcion_menu: "EMPLEADO",
                            icono: "user-add",
                            id_menu: "1",
                            id_menu_padre: null,
                            ispadre: "N",
                            menu_activo: "S",
                            orden: null,
                            ruta: "/empleado"
                        },
                        {
                            descripcion_menu: "REPORTE",
                            icono: "container",
                            id_menu: "2",
                            id_menu_padre: null,
                            ispadre: "N",
                            menu_activo: "S",
                            orden: null,
                            ruta: "/reporte"
                        },
                    ])
                    dispatch(changeUrl("/empleado"))
                } else if (response[0].nameRol == "EMPLEADO") {
                    setDataMenu([
                        {
                            descripcion_menu: "PERFIL",
                            icono: "user",
                            id_menu: "1",
                            id_menu_padre: null,
                            ispadre: "n",
                            menu_activo: "S",
                            orden: null,
                            ruta: "/perfil"
                        }
                    ])
                    dispatch(changeUrl("/perfil"))
                } else {
                    return ModalKruger("Rol no identificado.", "warn")
                }
                setDataUser({ ...user, nameRol: response[0].nameRol })
                localStorage.setItem("token", JSON.stringify({ ...user, nameRol: response[0].nameRol }))

            }).catch(err => {
                ModalKruger(err.message || "Error inesperado, intente de nuevo", "error")
            }).finally(() => {
                dispatch(changeLoading(false))
            })
            return () => {
                source?.cancel('Peticion cancelada.')

            }
        } catch (err) {
            ModalKruger(err.message || "Error inesperado, intente de nuevo", "error")
        }

    }, []);

    const updateVisible = (bool) => {
        setVisibleMovil(bool)
    }
    const changeSelectedKey = async (event) => {
        let opcion = false;
        if (opcion) {
        } else {
            const key = event.key;
            setVisibleMovil(false)
            btnChangeClick(key)
        }


    };

    const btnChangeClick = (p_ruta) => {
        dispatch(changeUrl(p_ruta))


    };
    const Menu = (
        <TopicMenu
            dataMenu={dataMenu}
            selectedKey={routeMenu}
            changeSelectedKey={changeSelectedKey}
        />
    );
    return (
        <div className="App">
            <C_Loader visible={Loading} />
            <Layout
            >
                <NavBar menu={Menu} visibleMovil={VisibleMovil} updateVisible={updateVisible} dataUser={dataUser} />
            </Layout>
            <Layout
                style={{ minHeight: '100vh', paddingTop: '48px', position: 'relative' }}
            >
                <SideBar menu={Menu} />
                <Layout
                >
                    <Layout.Content className="contentn" >
                        <Contenido url={routeMenu} dataUser={dataUser} />
                    </Layout.Content>
                </Layout>
            </Layout>
        </div>

    )
}


export default App;
