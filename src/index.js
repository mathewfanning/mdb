//  ----------------------------------------------------------------------------
// Dependencies
//  ----------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import configureStore from 'store';

//  -- Global styles ------------------
import GlobalStyles from 'GlobalStyles';

//  -- Routes -------------------------
import Routes from 'containers';

//  -- Store Configutation ------------
const store = configureStore();
const persistor = persistStore(store);


//  ----------------------------------------------------------------------------
// Router
//  ----------------------------------------------------------------------------
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <GlobalStyles />
                <Routes store={store} />
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
