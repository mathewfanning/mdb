//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------

//  -- Constants ----------------------
import { ActionTypes } from 'store/constants';


//  ----------------------------------------------------------------------------
//  Reducers
//  ----------------------------------------------------------------------------

export const albums = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.albums.getAlbumsSuccess:
            return action.payload;
        case ActionTypes.albums.getAlbumsFail:
            return state;
        default:
            return state;
    }
};