//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------

//  -- Actions ------------------------
import * as ArtistsActions from './actions';


//  ----------------------------------------------------------------------------
//  Thunks
//  ----------------------------------------------------------------------------

//  -- Get Artist ---------------------
export const handleGetArtist = () => async(dispatch) => {
    await dispatch(ArtistsActions.getArtist());

    try {
        // Adding setTimeout to simulate delayed response
        setTimeout(() => await dispatch(ArtistsActions.getArtistSuccess('Success')), 1500);
    } catch (error) {
        await dispatch(ArtistsActions.getArtistFail(error));
    }
};

//  -- Get Artists --------------------
export const handleGetArtists = () => async(dispatch) => {
    await dispatch(ArtistsActions.getArtists());

    try {
        // Adding setTimeout to simulate delayed response
        setTimeout(() => await dispatch(ArtistsActions.getArtistsSuccess('Success')), 1500);
    } catch (error) {
        await dispatch(ArtistsActions.getArtistsFail(error));
    }
};
