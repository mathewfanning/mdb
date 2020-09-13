//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import React from 'react';
import styled from 'styled-components';

//  -- Layouts ------------------------
import Wrapper from 'layout/Wrapper';


//  ----------------------------------------------------------------------------
//  Styles
//  ----------------------------------------------------------------------------
export const Container = styled.div`
    height: 100%;
    width: 100%;
`;


//  ----------------------------------------------------------------------------
//  Container
//  ----------------------------------------------------------------------------
//
//  -- Description
//  Artist albums and general info container
//
//  -- Props
//  ...
//
const ArtistInfoContainer = () => {
    return (
        <Wrapper>
            <Container>artist info container</Container>
        </Wrapper>
    );
};

//  -- Prop types ---------------------
ArtistInfoContainer.propTypes = {};

export default ArtistInfoContainer;
