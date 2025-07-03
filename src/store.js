import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import cartReducer from './components/cartIcon/redux/cartSlice'
const store = configureStore({
    reducer : {
        cart : cartReducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store