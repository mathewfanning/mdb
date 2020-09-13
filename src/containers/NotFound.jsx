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
//  Failed route catch container
//
//  -- Props
//  ...
//
const NotFoundContainer = () => {
    return (
        <Wrapper>
            <Container>not found container</Container>
        </Wrapper>
    );
};

//  -- Prop types ---------------------
NotFoundContainer.propTypes = {};

export default NotFoundContainer;
