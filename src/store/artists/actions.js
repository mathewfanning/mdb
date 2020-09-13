//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------

//  -- Constants ----------------------
import { ActionTypes } from 'store/constants';


//  ----------------------------------------------------------------------------
//  Actions
//  ----------------------------------------------------------------------------

//  -- Get Artist ---------------------
export const getArtist = () => ({ type: ActionTypes.artists.getArtist });
export const getArtistFail = (returnedPayload) => ({ type: ActionTypes.artists.getArtistFail, payload: returnedPayload });
export const getArtistSuccess = (returnedPayload) => ({ type: ActionTypes.artists.getArtistSuccess, payload: returnedPayload });

//  -- Get Artists --------------------
export const getArtists = () => ({ type: ActionTypes.artists.getArtists });
export const getArtistsFail = (returnedPayload) => ({ type: ActionTypes.artists.getArtistsFail, payload: returnedPayload });
export const getArtistsSuccess = (returnedPayload) => ({ type: ActionTypes.artists.getArtistsSuccess, payload: returnedPayload });
