//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import { combineReducers } from 'redux';

//  -- Reducers -----------------------
import { albums } from 'store/albums/reducers';
import { artist, artists } from 'store/artists/reducers';


//  ----------------------------------------------------------------------------
//  Root reducer
//  ----------------------------------------------------------------------------
const rootReducer = combineReducers({
    albums,
    artist,
    artists,
});

export default rootReducer;
