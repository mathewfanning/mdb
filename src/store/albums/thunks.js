//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------

//  -- Actions ------------------------
import * as AlbumsActions from './actions';

//  -- Mock data ----------------------
import { ALBUMS } from 'utils/mockData/albums';


//  ----------------------------------------------------------------------------
//  Thunks
//  ----------------------------------------------------------------------------

//  -- Get albums ---------------------
export const handleGetAlbums = () => async (dispatch) => {
    await dispatch(AlbumsActions.getAlbums());

    try {
        // Adding setTimeout to simulate delayed response
        await dispatch(AlbumsActions.getAlbumsSuccess(ALBUMS));
    } catch (error) {
        await dispatch(AlbumsActions.getAlbumsFail(error));
    }
};
