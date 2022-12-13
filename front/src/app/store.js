
import { configureStore } from '@reduxjs/toolkit'

import  routeMenuReducer  from '../features/Menu/routeMenu'
import  initSiderReducer  from '../features/initSider/init'



export const store = configureStore({
    reducer:{
        routeMenu: routeMenuReducer,
        initSider: initSiderReducer
    }
})

 

// export default store