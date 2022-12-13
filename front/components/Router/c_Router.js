
import {Result} from 'antd'
import V_empleado from '../empleado/empleado';
import V_perfil from '../perfil';
import V_reporte from '../reportes/reporteVacuna';


const ComponentNotFound = () => (
    <Result
        status="404"
        title="404"
        subTitle="Perdón, la página que visitas no existe."
    />


);

function App({ url, dataUser }) {

    switch (url) {
        case '/perfil': return <V_perfil dataUser={dataUser} />;
        case '/empleado': return <V_empleado dataUser={dataUser} />;
        case '/reporte': return <V_reporte dataUser={dataUser} />;

        default:
            return <ComponentNotFound />;  //this.state.url;
    }
}


export default App;
