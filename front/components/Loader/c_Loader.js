import React from 'react'
import { Spin, Icon } from 'antd'
class C_Loader extends React.Component {

    constructor(props) {
        super(props);
        this.state = { mensaje: 'Cargando, espere un momento' };

    }

    componentDidMount() {
        if (typeof this.props.msg === 'undefined') {

            this.setState({ mensaje: 'Cargando, espere un momento' })
        } else {
            this.setState({ mensaje: this.props.msg })
        }
    }

    render() {
        const antIcon = <Icon type="loading-3-quarters" spin />;
        return (
            <div >
                <Spin className="loader" indicator={antIcon} tip={this.state.mensaje} spinning={this.props.visible}>
                </Spin>

            </div>

        );
    }
}

export default C_Loader;