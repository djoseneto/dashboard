import { HeartIcon } from '@heroicons/react/16/solid';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';

import styled from 'styled-components';


const Container = styled.div`
    margin-top: 5rem;
`;

const MenuTitle = styled.text`
    color: #000;
    font-weight: bolder;
    padding: .2rem;
    border-radius: 2px;
    font-size: 13px;
    border: 1px solid #4299E11A;
    background-color: #4299E11A;
`;

const Divider = styled.hr`
    width: 100%;
    border: none;
    border-top: 2px dotted #ccc; 
`;

const ContainerPublic = styled.div`
    height: 17.5rem;
    max-width: 17.5rem;
    overflow-y: auto;
    padding: 1rem;
`;

const CardPublic = styled.div`
    width: 100%;
    height: 150px;
    background-color: white;
    border-radius: 4px;
    /* border: 1px dotted #ccc; */
    margin-bottom: 8px;
`;

const CardPublicHeader = styled.div`
    width: 100%;
    height: 60px;
    background-color: white;
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    align-items: center;
`;


const Avatar = styled.img`
    width: 35px; 
    height: 35px; 
    border-radius: 50%; 
    object-fit: cover; 
    border: 2px solid #4CAF50; 
    
`;
const dataFeed = [
    {
        publi: <CardPublic>
            <CardPublicHeader>
                <Avatar src="src\assets\pexels-italo-melo-881954-2379004.jpg" />
                <div style={
                    { margin: '6px' }
                }>
                    <p style={{
                        fontSize: '12px',
                        fontWeight: 'bold'
                    }}>Carlos Silva</p>
                    <p style={{
                        fontSize: '9px',
                        color: 'grey'
                    }}>9 minutos atrás</p></div></CardPublicHeader>
            <p style={{
                margin: '8px',
                textAlign: 'initial',
                fontSize: '12px',
                fontWeight: 'normal'
            }}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.</p>
            <div style={{
                paddingRight: '1rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
            }}>  <HeartIcon style={
                {
                    width: '1rem',
                    height: '1rem',
                    color: 'red',
                    cursor: 'pointer'
                }
            } />
                <HandThumbUpIcon style={
                    {
                        width: '1rem',
                        height: '1rem',
                        color: '#4d6abbdc',
                        cursor: 'pointer'
                    }
                } /></div>
        </CardPublic>
    },
    {
        publi: <CardPublic>
            <CardPublicHeader>
                <Avatar src="src\assets\pexels-italo-melo-881954-2379004.jpg" />
                <div style={
                    { margin: '6px' }
                }>
                    <p style={{
                        fontSize: '12px',
                        fontWeight: 'bold'
                    }}>Carlos Silva</p>
                    <p style={{
                        fontSize: '9px',
                        color: 'grey'
                    }}>9 minutos atrás</p></div></CardPublicHeader>
            <p style={{
                margin: '8px',
                textAlign: 'initial',
                fontSize: '12px',
                fontWeight: 'normal'
            }}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.</p>
            <div style={{
                paddingRight: '1rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
            }}>  <HeartIcon style={
                {
                    width: '1rem',
                    height: '1rem',
                    color: 'red',
                    cursor: 'pointer'
                }
            } />
                <HandThumbUpIcon style={
                    {
                        width: '1rem',
                        height: '1rem',
                        color: '#4d6abbdc',
                        cursor: 'pointer'
                    }
                } /></div>
        </CardPublic>
    },

    {
        publi: <CardPublic>
            <CardPublicHeader>
                <Avatar src="src\assets\pexels-italo-melo-881954-2379004.jpg" />
                <div style={
                    { margin: '6px' }
                }>
                    <p style={{
                        fontSize: '12px',
                        fontWeight: 'bold'
                    }}>Carlos Silva</p>
                    <p style={{
                        fontSize: '9px',
                        color: 'grey'
                    }}>9 minutos atrás</p></div></CardPublicHeader>
            <p style={{
                margin: '8px',
                textAlign: 'initial',
                fontSize: '12px',
                fontWeight: 'normal'
            }}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.</p>
            <div style={{
                paddingRight: '1rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
            }}>  <HeartIcon style={
                {
                    width: '1rem',
                    height: '1rem',
                    color: 'red',
                    cursor: 'pointer'
                }
            } />
                <HandThumbUpIcon style={
                    {
                        width: '1rem',
                        height: '1rem',
                        color: '#4d6abbdc',
                        cursor: 'pointer'
                    }
                } /></div>
        </CardPublic>
    },

    {
        publi: <CardPublic>
            <CardPublicHeader>
                <Avatar src="src\assets\pexels-italo-melo-881954-2379004.jpg" />
                <div style={
                    { margin: '6px' }
                }>
                    <p style={{
                        fontSize: '12px',
                        fontWeight: 'bold'
                    }}>Carlos Silva</p>
                    <p style={{
                        fontSize: '9px',
                        color: 'grey'
                    }}>9 minutos atrás</p></div></CardPublicHeader>
            <p style={{
                margin: '8px',
                textAlign: 'initial',
                fontSize: '12px',
                fontWeight: 'normal'
            }}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.</p>
            <div style={{
                paddingRight: '1rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
            }}>  <HeartIcon style={
                {
                    width: '1rem',
                    height: '1rem',
                    color: 'red',
                    cursor: 'pointer'
                }
            } />
                <HandThumbUpIcon style={
                    {
                        width: '1rem',
                        height: '1rem',
                        color: '#4d6abbdc',
                        cursor: 'pointer'
                    }
                } /></div>
        </CardPublic>
    },

    {
        publi: <CardPublic>
            <CardPublicHeader>
                <Avatar src="src\assets\pexels-italo-melo-881954-2379004.jpg" />
                <div style={
                    { margin: '6px' }
                }>
                    <p style={{
                        fontSize: '12px',
                        fontWeight: 'bold'
                    }}>Carlos Silva</p>
                    <p style={{
                        fontSize: '9px',
                        color: 'grey'
                    }}>9 minutos atrás</p></div></CardPublicHeader>
            <p style={{
                margin: '8px',
                textAlign: 'initial',
                fontSize: '12px',
                fontWeight: 'bold'
            }}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.</p>
            <div style={{
                paddingRight: '1rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
            }}>  <HeartIcon style={
                {
                    width: '1rem',
                    height: '1rem',
                    color: 'red',
                    cursor: 'pointer'
                }
            } />
                <HandThumbUpIcon style={
                    {
                        width: '1rem',
                        height: '1rem',
                        color: '#4d6abbdc',
                        cursor: 'pointer'
                    }
                } /></div>
        </CardPublic>
    },

]

const FeedSidebar: React.FC = () => {
    return (
        <Container>
            <MenuTitle>FEED</MenuTitle>
            <Divider />
            <ContainerPublic>
                <CardPublic>
                    {dataFeed.map(feed => feed.publi)}
                </CardPublic>
            </ContainerPublic>
        </Container>
    );
};

export default FeedSidebar;
