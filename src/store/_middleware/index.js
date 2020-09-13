//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

//  -- Logger -------------------------
import logger from './logger';


//  ----------------------------------------------------------------------------
//  Middleware config
//  ----------------------------------------------------------------------------
const middleware = [thunk];

//  -- Development mode add logger ----
if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
}

export default applyMiddleware(...middleware);
