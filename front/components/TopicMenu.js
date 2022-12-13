import React from "react";
import { Menu, Tooltip, Icon } from "antd";

const SubMenu = Menu.SubMenu
const TopicMenu = ({ dataMenu, selectedKey, changeSelectedKey }) => {
    var styledTopics = [];
    styledTopics = dataMenu.map((fila) =>
        fila.ispadre == "S" && fila.id_menu_padre == null ?
            <SubMenu
                key={fila.ruta}
                title={
                    <span style={{ fontSize: '12px' }}>
                        <Icon type={fila.icono} />
                        <span>{fila.descripcion_menu}</span>
                    </span>
                }


            >
                {dataMenu.map((fila2) =>
                    fila2.id_menu_padre == fila.id_menu ?
                        fila2.ispadre == "N" ?
                            <Menu.Item disabled={fila2.menu_activo == "N"} title={fila2.descripcion_menu} style={{ fontSize: '12px' }} key={fila2.ruta} onClick={changeSelectedKey}> <Icon type={fila2.icono} theme="outlined" />
                                <span > {fila2.descripcion_menu} </span>
                            </Menu.Item> :
                            <SubMenu
                                key={fila2.ruta}
                                title={
                                    <span style={{ fontSize: '12px' }}>
                                        <Icon type={fila2.icono} />
                                        <span>{fila2.descripcion_menu}</span>
                                    </span>
                                }

                            >
                                {dataMenu.map((fila3) =>
                                    fila3.id_menu_padre == fila2.id_menu ?
                                        fila3.ispadre == "N" ?
                                            <Menu.Item disabled={fila3.menu_activo == "N"} title={fila3.descripcion_menu} style={{ fontSize: '12px' }} key={fila3.ruta} onClick={changeSelectedKey}> <Icon type={fila3.icono} theme="outlined" />
                                                <span > {fila3.descripcion_menu} </span>
                                            </Menu.Item>
                                            : null
                                        : null)
                                }
                            </SubMenu> : null

                )}

            </SubMenu>
            : fila.id_menu_padre == null ?
                <Menu.Item disabled={fila.menu_activo == "N"} title={fila.descripcion_menu} style={{ fontSize: '12px' }} key={fila.ruta} onClick={changeSelectedKey}> <Icon type={fila.icono} theme="outlined" />
                    <span > {fila.descripcion_menu} </span>
                </Menu.Item> : null


    )

    return (
        <Menu
            selectedKeys={[selectedKey]}
            mode="inline"
            theme="light"
        >
            {styledTopics}

        </Menu>
    );
}
export default TopicMenu;
