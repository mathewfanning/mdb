//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import React from 'react';
import { shape, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

//  -- Thunks -------------------------
import { handleGetArtist } from 'store/artists/thunks';


//  ----------------------------------------------------------------------------
//  Styles
//  ----------------------------------------------------------------------------
const Container = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    outline: none;
    width: 100%;
`;

const DisplayName = styled.span`
    color: #aaa;
    display: block;
    font-size: 14px;
    font-weight: 500;
`;

const Image = styled.img`
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    height: 200px;
    margin-bottom: 8px;
    width: 100%;
`;


//  ----------------------------------------------------------------------------
//  Container
//  ----------------------------------------------------------------------------
//
//  -- Description
//  Artist card for display/selection
//
//  -- Props
//  artist { object } - artist info
//
const AbsoluteWrapper = ({ artist }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const selectArtist = async (artistID) => {
        await dispatch(handleGetArtist(artistID));
        history.push('/artist-info');
    };

    return (
        <Container onClick={() => selectArtist(artist.id)}>
            <Image src={artist.img} alt={artist.dispalyName} />
            <DisplayName>{artist.displayName}</DisplayName>
        </Container>
    );
};

//  -- Prop types ---------------------
AbsoluteWrapper.propTypes = {
    artist: shape({
        id: string,
        displayName: string,
        img: string,
    }),
};

export default AbsoluteWrapper;
