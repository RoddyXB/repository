import { Drawer, Button, Layout, Menu, Icon, Dropdown } from "antd";
import Router from 'next/router'
import { changeLoading } from '/src/features/initSider/init';
import { changeUrl } from '/src/features/Menu/routeMenu';
import { useDispatch } from 'react-redux'


const NavBar = ({ menu, visibleMovil, updateVisible, dataUser }) => {
  const dispatch = useDispatch()

  return (
    <Layout.Header
      className="navbarn"
    >
      <Drawer
        title={<span>{dataUser?.name || "USUARIO"}</span>}
        placement="left"
        onClose={() => {
          updateVisible(false)
        }}
        visible={visibleMovil}
        bodyStyle={{
          padding: '10px 0',
        }}
        headerStyle={{ fontSize: 11 }}
      >
        {menu}
      </Drawer>
      <div className="izquierda">
        <Button
          className="menun"
          type="link"
          icon="menu"
          onClick={() => updateVisible(true)}
        />

        <img src="../../img/logo_kruger_.png" className="logon" alt="logo" style={{ marginRight: 85 }} />
        <span className="headerBread1">
          {
            dataUser?.nameRol || "ROL"
          }
        </span>
      </div>



      <div className="derecha">
        <Dropdown
          key="more"
          overlay={
            <Menu
              theme="dark"
              selectable={false}
              style={{ marginTop: 10 }}

            >

              <Menu.Item
                style={{ fontSize: '12px' }}
                key="cerrarSesion"
                onClick={() => {
                  dispatch(changeLoading(true))
                  dispatch(changeUrl('/'))
                  localStorage.removeItem("token");
                  Router.push('/login');
                }}> <Icon type="logout" theme="outlined" />
                <span title="CERRAR SESION" > CERRAR SESION </span>
              </Menu.Item>



            </Menu>
          }
          trigger={['click']} >
          <Button
            type="link"
            icon='user'
            className="userNavBar"
          >
            <strong style={{ marginLeft: 3 }}>{dataUser?.name?.split(" ")[0] || "USUARIO"} </strong>
          </Button>
        </Dropdown>




      </div>
    </Layout.Header>
  );
};

export default NavBar;
