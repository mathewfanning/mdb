//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

//  -- Containers ---------------------
import ArtistsContainer from 'containers/Artists';
import ArtistInfoContainer from 'containers/ArtistInfo';
import SplashContainer from 'containers/Splash';
import NotFoundContainer from 'containers/NotFound';


//  ----------------------------------------------------------------------------
//  Routes
//  ----------------------------------------------------------------------------
const Routes = (props) => (
    <Switch>
        <Route exact component={SplashContainer} {...props} path="/" />
        <Route exact component={ArtistsContainer} {...props} path="/artists" />
        <Route exact component={ArtistInfoContainer} {...props} path="/artist-info" />
        <Route component={NotFoundContainer} />
    </Switch>
);

export default withRouter(Routes);