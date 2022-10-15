import { configureStore} from '@reduxjs/toolkit';
import reducer from '../Reducers/rootReducer';

const store = configureStore({reducer:reducer});
export default store;