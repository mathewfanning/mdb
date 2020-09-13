//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------

//  -- Constants ----------------------
import { ActionTypes } from 'store/constants';


//  ----------------------------------------------------------------------------
//  Reducers
//  ----------------------------------------------------------------------------

export const artist = (state = null, action) => {
    switch (action.type) {
        case ActionTypes.artists.getArtistSuccess:
            return action.payload;
        case ActionTypes.artists.getArtistFail:
            return state;
        default:
            return state;
    }
};

export const artists = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.artists.getArtistsSuccess:
            return action.payload;
        case ActionTypes.artists.getArtistsFail:
            return state;
        default:
            return state;
    }
};