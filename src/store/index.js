//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//  -- Reducers -----------------------
import rootReducer from 'store/reducer';

//  -- Config -------------------------
const persistConfig = {
    key: 'root',
    storage,
};

const configureStore = () => {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(persistedReducer, undefined);
    return store;
};

export default configureStore;
