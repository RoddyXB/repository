import 'antd/dist/antd.css'
import '../public/css/styles.css'
import {store} from '../src/app/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {

    return (
      <Provider store={store}>
        <Component {...pageProps} />      
      </Provider>
    )
}

export default MyApp;

