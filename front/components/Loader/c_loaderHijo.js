import React from 'react'
import { Spin, Icon } from 'antd'
const C_LoaderHijo = ({ msj, visible }) => {
    const antIcon = <Icon type="loading-3-quarters" spin />
    return (
        <Spin className="loaderHijo" indicator={antIcon} tip={msj || "Cargando, espere un momento"} spinning={visible}>
        </Spin>
    );
};

export default C_LoaderHijo; 
