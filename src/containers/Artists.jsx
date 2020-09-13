//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';

//  -- Components ---------------------
import ArtistCard from 'components/ArtistCard';

//  -- Layouts ------------------------
import Wrapper from 'layout/Wrapper';

//  -- Thunks -------------------------
import { handleGetArtists } from 'store/artists/thunks';


//  ----------------------------------------------------------------------------
//  Styles
//  ----------------------------------------------------------------------------
export const Container = styled.div`
    height: 100%;
    margin: 0 auto;
    max-width: 1240px;
    padding: 104px 40px;
    width: 100%;
`;

const Description = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
`;

const Header = styled.span`
    display: block;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 16px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const RowItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    max-width: 172px;
    min-width: 172px;
    width: 100%;
`;

const Section = styled.div`
    border-bottom: 1px solid #eee;
    margin-bottom: 48px;
    padding-bottom: 48px;
    width: 100%;

    &:last-child {
        border-bottom: none;
        margin-bottom: 0px;
        padding-bottom: 0px;
    }
`;


//  ----------------------------------------------------------------------------
//  Container
//  ----------------------------------------------------------------------------
//
//  -- Description
//  Artists listing container
//
//  -- Props
//  ...
//
const ArtistContainer = ({ artists }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            await dispatch(handleGetArtists());

            setLoading(false);
        }
        fetchData();
    }, [dispatch])

    return (
        <Wrapper>
            <Container>
                <Section>
                    <Header>Artists</Header>
                    <Description>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</Description>
                </Section>
                <Section>
                    {loading ? (
                        <span>loading</span>
                    ) : (
                        <Row>
                            {artists.map(x => (
                                <RowItem key={x.id}>
                                    <ArtistCard artist={x} />
                                </RowItem>
                            ))}
                        </Row>
                    )}
                </Section>
            </Container>
        </Wrapper>
    );
};

//  -- Prop types ---------------------
ArtistContainer.propTypes = {
    artists: arrayOf(shape({
        id: string,
        displayName: string,
        img: string
    }))
};

//  ----------------------------------------------------------------------------
//  Redux
//  ----------------------------------------------------------------------------
const mapStateToProps = state => ({
    artists: state.artists,
});

export default connect(mapStateToProps, null)(ArtistContainer);
