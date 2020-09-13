//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import React, { useState } from 'react';
import styled from 'styled-components';

//  -- Components ---------------------
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import AbsoluteWrapper from 'components/AbsoluteWrapper';


//  ----------------------------------------------------------------------------
//  Styles
//  ----------------------------------------------------------------------------
const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    width: 100%;
`;

const Drawer = styled.div`
    background-color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    height: 100%;
    left: ${p => p.open ? 'calc(100% - 280px)' : '110%'};
    padding: 40px 24px;
    position: absolute;
    top: 0px;
    transition: all 300ms ease;
    width: 280px;
    z-index: 10;
`;

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const NavItem = styled.button`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    outline: none;
    padding-bottom: 16px;
    text-align: left;
    width: 100%;
`;

const NavRow = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 32px;

    &:last-child {
        margin-bottom: 0px;
    }
`;

const Toggle = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
`;


//  ----------------------------------------------------------------------------
//  Container
//  ----------------------------------------------------------------------------
//
//  -- Description
//  Application wrapping container
//
//  -- Props
//  children { element } - child element passed to component
//
const Wrapper = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <Container>
            <AbsoluteWrapper left={40} top={40} zIndex={1}>
                logo
            </AbsoluteWrapper>
            <AbsoluteWrapper right={40} top={40} zIndex={1}>
                <Toggle onClick={() => setNavOpen(!navOpen)}>
                    <MenuOutlined />
                </Toggle>
            </AbsoluteWrapper>
            <Drawer open={navOpen}>
                <Nav>
                    <NavRow>
                        <Toggle onClick={() => setNavOpen(!navOpen)}>
                            <CloseOutlined />
                        </Toggle>
                    </NavRow>
                    <NavRow>
                        <NavItem>
                            Artists
                        </NavItem>
                    </NavRow>
                </Nav>
            </Drawer>
            {children}
        </Container>
    );
};

//  -- Prop types ---------------------
Wrapper.propTypes = {};

export default Wrapper;
