//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import { createGlobalStyle } from 'styled-components';


//  ----------------------------------------------------------------------------
//  Styles
//  ----------------------------------------------------------------------------
//
//  Global styles to be applied across the app
//

//  -- Global reset -------------------
export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #fcfcfc;
        font-family: sans-serif;
        font-smoothing: antialiased;
    }
`;
