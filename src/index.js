//  ----------------------------------------------------------------------------
// Dependencies
//  ----------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//  -- Global styles ------------------
import GlobalStyles from 'GlobalStyles';

//  -- Routes -------------------------
import Routes from 'containers';


//  ----------------------------------------------------------------------------
// Router
//  ----------------------------------------------------------------------------
ReactDOM.render(
    <Router>
        <GlobalStyles />
        <Routes />
    </Router>,
    document.getElementById('root')
);
