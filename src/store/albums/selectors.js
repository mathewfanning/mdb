//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import { createSelector } from 'reselect';


//  ----------------------------------------------------------------------------
//  Selectors
//  ----------------------------------------------------------------------------

//  -- Albums data --------------------
const albumsSelector = (state) => state.albums;

//  -- Artists Albums selector --------
export const artistAlbumsSelector = (artistID) => createSelector(
    albumsSelector,
    albums => albums.filter(album => album.artistId === artistID)
);
