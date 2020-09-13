//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//  -- Middleware ---------------------
import middleware from 'store/_middleware';

//  -- Reducers -----------------------
import rootReducer from 'store/reducer';

//  -- Config -------------------------
const persistConfig = {
    key: 'root',
    storage,
};

const configureStore = () => {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(persistedReducer, undefined, middleware);
    return store;
};

export default configureStore;
