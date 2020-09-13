//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import React from 'react';
import { element, number } from 'prop-types';
import styled from 'styled-components';


//  ----------------------------------------------------------------------------
//  Styles
//  ----------------------------------------------------------------------------
export const Container = styled.div`
    bottom: ${p => p.bottom && `${p.bottom}px`};
    left: ${p => p.left && `${p.left}px`};
    position: absolute;
    right: ${p => p.right && `${p.right}px`};
    top: ${p => p.top && `${p.top}px`};
    z-index: ${p => p.zIndex || 1};
`;


//  ----------------------------------------------------------------------------
//  Container
//  ----------------------------------------------------------------------------
//
//  -- Description
//  Positions absolute container appropriately based on inputs
//
//  -- Props
//  bottom { number } - number of pixels from bottom of relative parent container
//  children { element } - child element passed to component
//  left { number } - number of pixels from left of relative parent container
//  right { number } - number of pixels from right of relative parent container
//  top { number } - number of pixels from top of relative parent container
//  zIndex { number } - container z-index position
//
const AbsoluteWrapper = ({
    bottom,
    children,
    left,
    right,
    top,
    zIndex
}) => {
    return (
        <Container bottom={bottom} left={left} right={right} top={top} zIndex={zIndex}>
            {children}
        </Container>
    );
};

//  -- Prop types ---------------------
AbsoluteWrapper.propTypes = {
    bottom: number,
    children: element,
    left: number,
    right: number,
    top: number,
    zIndex: number,
};

export default AbsoluteWrapper;
