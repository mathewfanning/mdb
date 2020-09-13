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
export const handleGetAlbums = () => async(dispatch) => {
    await dispatch(AlbumsActions.getAlbums());

    try {
        // Adding setTimeout to simulate delayed response
        setTimeout(() => await dispatch(AlbumsActions.getAlbumsSuccess(ALBUMS)), 1500);
    } catch (error) {
        await dispatch(AlbumsActions.getAlbumsFail(error));
    }
};
