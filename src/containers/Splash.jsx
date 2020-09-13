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
//  Home page container
//
//  -- Props
//  ...
//
const SplashContainer = () => {
    return (
        <Wrapper>
            <Container>splash container</Container>
        </Wrapper>
    );
};

//  -- Prop types ---------------------
SplashContainer.propTypes = {};

export default SplashContainer;
