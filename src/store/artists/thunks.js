//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------

//  -- Actions ------------------------
import * as ArtistsActions from './actions';

//  -- Mock Data ----------------------
import { ARTISTS } from 'utils/mockData/artists';


//  ----------------------------------------------------------------------------
//  Thunks
//  ----------------------------------------------------------------------------

//  -- Get Artist ---------------------
export const handleGetArtist = (artistID) => async (dispatch) => {
    await dispatch(ArtistsActions.getArtist());

    try {
        const artist = ARTISTS.filter(x => x.id === artistID)[0];
        // Adding setTimeout to simulate delayed response
        setTimeout(async () => await dispatch(ArtistsActions.getArtistSuccess(artist)), 1500);
    } catch (error) {
        await dispatch(ArtistsActions.getArtistFail(error));
    }
};

//  -- Get Artists --------------------
export const handleGetArtists = () => async(dispatch) => {
    await dispatch(ArtistsActions.getArtists());

    try {
        // Adding setTimeout to simulate delayed response
        setTimeout(async () => await dispatch(ArtistsActions.getArtistsSuccess(ARTISTS)), 1500);
    } catch (error) {
        await dispatch(ArtistsActions.getArtistsFail(error));
    }
};
