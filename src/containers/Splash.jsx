//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import React from 'react';
import styled from 'styled-components';

//  -- Components ---------------------
import AbsoluteWrapper from 'components/AbsoluteWrapper';

//  -- Layouts ------------------------
import Wrapper from 'layout/Wrapper';

//  -- Static -------------------------
import Background from 'utils/static/images/background.jpg';
import Reba from 'utils/static/images/RebaMcIntire.png';
import Dolly from 'utils/static/images/DollyParton.png';
import Garth from 'utils/static/images/GarthBrooks.png';
import Faith from 'utils/static/images/FaithHill.png';
import George from 'utils/static/images/GeorgeStrait.png';
import Vince from 'utils/static/images/VinceGill.png';


//  ----------------------------------------------------------------------------
//  Styles
//  ----------------------------------------------------------------------------
const BackgroundImg = styled.img`
    height: 100%;
    left: 0px;
    opacity: 0.25;
    position: absolute;
    top: 0px;
    width: 100%;
`;

const Description = styled.span`
    color: #aaa;
    display: block;
    font-size: 14px;
    line-height: 20px;
    max-width: 320px;
`;

const Header = styled.span`
    display: block;
    font-size: 40px;
    margin-bottom: 16px;
`;

const Image = styled.img`
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    height: auto;
    width: ${p => `${p.width}px`};
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
            <BackgroundImg src={Background} alt="background image" />
            <AbsoluteWrapper left={800} top={160} zIndex={10}>
                <Image src={Reba} alt="splash image 1" width={200} />
            </AbsoluteWrapper>
            <AbsoluteWrapper left={540} top={80} zIndex={8}>
                <Image src={Garth} alt="splash image 1" width={320} />
            </AbsoluteWrapper>
            <AbsoluteWrapper left={960} top={240} zIndex={9}>
                <Image src={Dolly} alt="splash image 1" width={280} />
            </AbsoluteWrapper>
            <AbsoluteWrapper left={840} top={480} zIndex={9}>
                <Image src={Faith} alt="splash image 1" width={240} />
            </AbsoluteWrapper>
            <AbsoluteWrapper left={420} top={40} zIndex={10}>
                <Image src={George} alt="splash image 1" width={140} />
            </AbsoluteWrapper>
            <AbsoluteWrapper left={1140} top={600} zIndex={9}>
                <Image src={Vince} alt="splash image 1" width={140} />
            </AbsoluteWrapper>
            <AbsoluteWrapper left={160} top={480} zIndex={10}>
                <Header>Welcome to MBD!</Header>
                <Description>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</Description>
            </AbsoluteWrapper>
        </Wrapper>
    );
};

//  -- Prop types ---------------------
SplashContainer.propTypes = {};

export default SplashContainer;
