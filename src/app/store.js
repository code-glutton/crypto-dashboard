import{configureStore} from '@reduxjs/toolkit';
import compareTwoReducer from '../reducers/compareTwoReducer';

export default configureStore({
    reducer:{
        compareTwo:compareTwoReducer
    }
})