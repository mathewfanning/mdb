//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import React from 'react';
import styled from 'styled-components';


//  ----------------------------------------------------------------------------
//  Styles
//  ----------------------------------------------------------------------------
export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
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
        <Wrapper>not found container</Wrapper>
    );
};

//  -- Prop types ---------------------
NotFoundContainer.propTypes = {};

export default NotFoundContainer;
