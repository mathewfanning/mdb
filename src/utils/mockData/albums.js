//  ----------------------------------------------------------------------------
//  Dependencies
//  ----------------------------------------------------------------------------

import George1 from 'utils/static/images/PureCountry.png';
import George2 from 'utils/static/images/StraitCountry.png';
import Vince1 from 'utils/static/images/Okie.png';
import Vince2 from 'utils/static/images/HighLonesomeSoung.png';
import Garth1 from 'utils/static/images/NoFences.png';
import Garth2 from 'utils/static/images/Sevens.png';
import Reba1 from 'utils/static/images/ReadMyMind.png';
import Reba2 from 'utils/static/images/StrongerThantheTruth.png';
import Dolly1 from 'utils/static/images/LittleSparrow.png';
import Dolly2 from 'utils/static/images/Jolene.png';
import Faith1 from 'utils/static/images/Cry.png';
import Faith2 from 'utils/static/images/Faith.png';


//  ----------------------------------------------------------------------------
//  Mock data
//  ----------------------------------------------------------------------------
//
//  Albums constants
//

export const ALBUMS = [
    {
        id: '8ddec223-335f-4b8e-a6b5-c2145d2cca53',
        displayName: 'Pure Conutry',
        releaseYear: '2008',
        artistId: '9d2f51e2-79ce-4f25-9000-f366d99d8a0a',
        img: George1,
        songs: [
            {
                displayName: 'Heartland',
                length: '2:18',
            },
            {
                displayName: 'Baby Your Baby',
                length: '2:44',
            },
            {
                displayName: 'I Croos My Heart',
                length: '3:31',
            },
        ],
    },
    {
        id: '1a6fe942-d839-46c5-8e78-0672e5981745',
        displayName: 'Strait County',
        releaseYear: '1981',
        artistId: '9d2f51e2-79ce-4f25-9000-f366d99d8a0a',
        img: George2,
        songs: [
            {
                displayName: 'Unwound',
                length: '2:26',
            },
            {
                displayName: 'Honky Tonk Down Stairs',
                length: '2:33',
            },
            {
                displayName: 'Blame It on Mexico',
                length: '2:49',
            },
        ],
    },
    {
        id: '80589c61-1ef3-41ff-8927-78c84d2f0c4a',
        displayName: 'Okie',
        releaseYear: '2019',
        artistId: '099c36ce-a644-4b0d-aacc-c1b49b4903c1',
        img: Vince1,
        songs: [
            {
                displayName: 'I dont wannna Ride The Rails No More',
                length: '4:28',
            },
            {
                displayName: 'The Price of Regret',
                length: '3:51',
            },
            {
                displayName: 'Forever Changed',
                length: '3:41',
            },
        ],
    },
    {
        id: '3ac07bbf-bded-4a30-8dae-4ec0e3f74c1f',
        displayName: 'High Lonesome Sound',
        releaseYear: '1996',
        artistId: '099c36ce-a644-4b0d-aacc-c1b49b4903c1',
        img: Vince2,
        songs: [
            {
                displayName: 'Once Dance With You',
                length: '2:59',
            },
            {
                displayName: 'High Lonesome Sound',
                length: '3:26',
            },
            {
                displayName: 'Pretty Little Adriana',
                length: '3:48',
            },
        ],
    },
    {
        id: '25ef65da-93ac-4d16-95b6-997108877b2b',
        displayName: 'No Fences',
        releaseYear: '1990',
        artistId: 'f4660c0b-d7e0-4e11-8395-c597e3f2b69b',
        img: Garth1,
        songs: [
            {
                displayName: 'The Thunder Rolls',
                length: '3:44',
            },
            {
                displayName: 'New Way to Fly',
                length: '3:55',
            },
            {
                displayName: 'Two of a kind, Workin on a Full House',
                length: '2:33',
            },
        ],
    },
    {
        id: 'b937c1ce-0ffb-4f35-bf60-7a58e3c35d4a',
        displayName: 'Sevens',
        releaseYear: '1997',
        artistId: 'f4660c0b-d7e0-4e11-8395-c597e3f2b69b',
        img: Garth2,
        songs: [
            {
                displayName: 'Longneck Bottle',
                length: '2:19',
            },
            {
                displayName: 'How You Ever Gonna Know',
                length: '3:37',
            },
            {
                displayName: 'Shes Gonna Make It',
                length: '2:47',
            },
        ],
    },
    {
        id: '167d1bc6-9cb6-4273-a174-54906e1a2abf',
        displayName: 'Read My Mind',
        releaseYear: '1994',
        artistId: 'd27728c3-fcaa-4705-9ee6-20beac7ad3be',
        img: Reba1,
        songs: [
            {
                displayName: 'Everything That You Want',
                length: '4:24',
            },
            {
                displayName: 'Read My Mind',
                length: '4:04',
            },
            {
                displayName: 'I Wont Stand In Line',
                length: '4:02',
            },
        ],
    },
    {
        id: 'bc3044b7-cc24-4b81-87e2-d1db3ceb5677',
        displayName: 'Stronger Than the Truth',
        releaseYear: 'string',
        artistId: 'd27728c3-fcaa-4705-9ee6-20beac7ad3be',
        img: Reba2,
        songs: [
            {
                displayName: 'Swing All Night Long With You',
                length: '4:43',
            },
            {
                displayName: 'Stronger Than the Truth',
                length: '4:11',
            },
            {
                displayName: 'Storm In A Shot Glass',
                length: '3:03',
            },
        ],
    },
    {
        id: 'ccd1e798-7989-4d5c-a4fd-efac7ebd1089',
        displayName: 'Little Sparrow',
        releaseYear: '2001',
        artistId: '190b2fda-77d3-4ce2-a30b-535ca2328645',
        img: Dolly1,
        songs: [
            {
                displayName: 'Little Sparrow',
                length: '4:14',
            },
            {
                displayName: 'Shine',
                length: '5:11',
            },
            {
                displayName: 'I Dont Believe Youve Met My baby',
                length: '3:02',
            },
        ],
    },
    {
        id: 'b613d558-774a-427e-8c37-8927190446f5',
        displayName: 'Jolene',
        releaseYear: '1974',
        artistId: '90b2fda-77d3-4ce2-a30b-535ca2328645',
        img: Dolly2,
        songs: [
            {
                displayName: 'Jolene',
                length: '2:41',
            },
            {
                displayName: 'When Someone Wants to Leave',
                length: '2:07',
            },
            {
                displayName: 'River of Happiness',
                length: '3:21',
            },
        ],
    },
    {
        id: '6c87c8e6-2aa3-4387-9e61-0cdb7ef6b63d',
        displayName: 'Cry',
        releaseYear: '2002',
        artistId: '69a39705-6ade-49f7-9791-c90b41b30f32',
        img: Faith1,
        songs: [
            {
                displayName: 'Free',
                length: '4:39',
            },
            {
                displayName: 'Cry',
                length: '3:46',
            },
            {
                displayName: 'One',
                length: '5:20',
            },
        ],
    },
    {
        id: 'f7dd052e-6b47-4b59-8020-0206a79b09aa',
        displayName: 'Faith',
        releaseYear: '1998',
        artistId: '69a39705-6ade-49f7-9791-c90b41b30f32',
        img: Faith2,
        songs: [
            {
                displayName: 'The Kiss',
                length: '3:16',
            },
            {
                displayName: 'You Give Me Love',
                length: '3:35',
            },
            {
                displayName: 'Let Me Let Go',
                length: '4:25',
            },
        ],
    },
];