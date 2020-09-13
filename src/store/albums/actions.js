//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------

//  -- Constants ----------------------
import { ActionTypes } from 'store/constants';


//  ----------------------------------------------------------------------------
//  Actions
//  ----------------------------------------------------------------------------

//  -- Get Albums ---------------------
export const getAlbums = () => ({ type: ActionTypes.albums.getAlbums });
export const getAlbumsFail = (returnedPayload) => ({ type: ActionTypes.albums.getAlbumsFail, payload: returnedPayload });
export const getAlbumsSuccess = (returnedPayload) => ({ type: ActionTypes.albums.getAlbumsSuccess, payload: returnedPayload });
