//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import thunk from 'redux-thunk';

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

export default middleware;
