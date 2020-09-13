//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import styled from 'styled-components';


//  ----------------------------------------------------------------------------
//  Styles
//  ----------------------------------------------------------------------------
const Container = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
    outline: none;
    width: 100%;
`;

const Description = styled.span`
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    margin-bottom: 24px;
    text-align: left;
`;

const Group = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Image = styled.img`
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    height: auto;
    margin-left: 48px;
    width: 240px;
`;

const Song = styled.div`
    border: 1px solid #ddd;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
    padding: 8px;
    width: 100%;
`;

const SongText = styled.span`
    font-size: 14px;
    font-weight: 600;
`;

const Title = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
`;


//  ----------------------------------------------------------------------------
//  Container
//  ----------------------------------------------------------------------------
//
//  -- Description
//  Album card for display
//
//  -- Props
//  album { object } - artist info
//
const AlbumCard = ({ album }) => {
    return (
        <Container>
            <Group>
                <Title>{album.displayName}</Title>
                <Description>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </Description>
                {album.songs.map((x, i) => (
                    <Song key={i}>
                        <SongText>{x.displayName}</SongText>
                        <SongText>{x.length}</SongText>
                    </Song>
                ))}
            </Group>
            <Image src={album.img} alt={album.dispalyName} />
        </Container>
    );
};

//  -- Prop types ---------------------
AlbumCard.propTypes = {
    album: shape({
        id: string,
        displayName: string,
        img: string,
        songs: arrayOf(shape({
            displayName: string,
            length: string,
        })),
    }),
};

export default AlbumCard;
