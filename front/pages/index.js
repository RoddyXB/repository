import Loader from '/components/Loader/c_Loader'
import useValidateSesion from "/hook/validateSesion";
function App() {
    useValidateSesion()
    return (
        <Loader />
    )
}


export default App;
