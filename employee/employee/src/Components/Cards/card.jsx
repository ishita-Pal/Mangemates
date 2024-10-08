import React, { useState } from 'react';
import styled from 'styled-components';
import Dashboard from "./../../Components/Employee/Dashboard.jsx" // Ensure correct path to Dashboard component
import p1 from './p1.jpeg';
import Cards from "./carddddd/Cards/Cards.jsx"
import p2 from './p2.jpeg';
import p3 from './p3.jpeg';
import p4 from './p4.jpeg';
import p5 from './p5.jpeg';
import i1 from './i1.jpeg';
import i6 from './i6.jpeg';
import i7 from './i7.jpeg';
import i4 from './i4.jpeg';
import i5 from './i5.jpeg';
import List from './List.jsx';



const CardContainer = styled.div`
    display: flex;
    height: 52vh;
    width: 82vw;
    background-color: rgb(250, 249, 249);
    position: relative;
    overflow: hidden;
`;

const Sidebar = styled.div`
    width: 5px;
    background-color: #f4f4f4;
    padding: 1px;
    border-right: 2px solid #dadada;
`;

const ContentArea = styled.div`
    flex-grow: 1;
    position: relative;
    width: 50%; /* Set width to 50% */
`;

const Fullscreen = styled.div`
    height: 98%;
    width: 98%;
    position: absolute;
    background-color: blueviolet;
    display: ${props => props.visible ? 'block' : 'none'};
    background-size: cover;
    background-position: center;
`;

const Storiyan = styled.div`
    height: 120px;
    width: 100%;
    border-bottom: 2px solid #dadada;
    padding: 13px;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
`;

const Story = styled.div`
    border: 3px solid rgb(204, 3, 3);
    height: 90px;
    width: 90px;
    border-radius: 50%;  
    overflow: hidden;   
    display: inline-block; 
    margin-right: 15px;
`;

const StoryImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    background-repeat: no-repeat;
`;

const Card = () => {
    const arr = [
        { dp: p1, story: i1 },
        { dp: p2, story: i6 },
        { dp: p3, story: i7 },
        { dp: p4, story: i4 },
        { dp: p5, story: i5 },
    ];

    const [fullscreenVisible, setFullscreenVisible] = useState(false);
    const [fullscreenImage, setFullscreenImage] = useState('');

    const handleStoryClick = (idx) => {
        setFullscreenVisible(true);
        setFullscreenImage(arr[idx].story);

        setTimeout(() => {
            setFullscreenVisible(false);
        }, 1500);
    };

    const clutter = arr.map((elem, idx) => (
        <Story key={idx} onClick={() => handleStoryClick(idx)}>
            <StoryImage src={elem.dp} alt="" />
        </Story>
    ));

    return (
        <CardContainer>
            <Sidebar>
                {/* <Dashboard /> */}
            </Sidebar>
            <ContentArea>
                <Fullscreen visible={fullscreenVisible} style={{ backgroundImage: `url(${fullscreenImage})` }}></Fullscreen>
                <Storiyan>
                    {clutter}
                </Storiyan>
                <List/>
            </ContentArea>
                <Cards/>
        </CardContainer>
    );
};

export default Card;
