import { ChartBarIcon, ChartPieIcon, ChatBubbleLeftEllipsisIcon, MagnifyingGlassCircleIcon, QueueListIcon, Squares2X2Icon, UserCircleIcon } from '@heroicons/react/24/outline';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import FeedSidebar from '../FeedSidebar/FeedSidebar';

interface LayoutProps {
    children: ReactNode;
}

const BoxIconProfile = styled.div`
  border: 1px solid #ccc;
  border-radius: .5rem;
  width: 1.5625rem;
  height: 1.5625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;                
  &:hover {
    background-color: #4299E11A;
    cursor: pointer;
  }
`;

const Divider = styled.hr`
    width: 100%;
    border: none;
    border-top: 1px solid #E0E0E0; 
`;

const Menu = styled.div`
    margin-left: .8rem;
    margin-right: .8rem;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const BoxInput = styled.div`
    width: 100%;
    height: 2.5rem;
    border: 1px solid #E0E0E0; 
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 2rem;

`;

const Input = styled.input`
    border: none;
    width: 60%;
    height: 70%;
    outline: none;
    margin: .2rem;
    background-color: transparent;
`;

const MenuTitle = styled.div`
    color: #000;
    font-weight: normal;
    padding: .2rem;
    border-radius: 2px;
    font-size: 13px;
`;

const MenuLink = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: .5rem;
    border-radius: 4px;
    
    &:hover {
    background-color: #4299E11A;
    cursor: pointer;
  }
`;

const TextOptionMenu = styled.span`
   font-weight: 500;
   font-size: 13px;
`;

const Box = styled.div``;
const Footer = styled.div`
    position: absolute;
    bottom: 0;
    width: 18rem;
    height: 18.5rem;
`;

const Avatar = styled.img`
    width: 35px; 
    height: 35px; 
    border-radius: 50%; 
    object-fit: cover; 
    border: 2px solid #4CAF50; 
    margin-left: .8rem;
    margin-right: .8rem;
`;

const jump = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedIcon = styled(ChatBubbleLeftEllipsisIcon)`
  width: .2rem;
  height: .2rem;
  margin-right: .5rem;
  color: #4CAF50;
  animation: ${jump} 1s ease-in-out infinite;
`;


const dataMenu = [
    {
        link: (
            <Link to='/' style={{
                display: 'block',
                textDecoration: 'none',
                color: '#333',

            }}>
                <MenuLink>
                    <ChartBarIcon style={{
                        width: '1rem',
                        height: '1rem',
                        marginRight: '.5rem',
                        marginLeft: '.5rem',
                        fontWeight: 'bold'
                    }} />
                    <TextOptionMenu>Dashboard</TextOptionMenu>
                </MenuLink>
            </Link>
        )
    },
    {
        link: (
            <Link to='/login' style={{
                display: 'block',
                textDecoration: 'none',
                color: '#333',

            }}>
                <MenuLink>
                    <QueueListIcon style={{
                        width: '1rem',
                        height: '1rem',
                        marginRight: '.5rem',
                        marginLeft: '.5rem',
                        fontWeight: 'bold'
                    }} />
                    <TextOptionMenu>Login</TextOptionMenu>
                </MenuLink>
            </Link>
        )
    },
]

const dataFriends = [
    {
        link: (
            <Box style={{
                marginTop: '1rem'
            }}>
                <MenuLink style={{
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Avatar src="src\assets\pexels-olly-774909.jpg" />
                        <TextOptionMenu>Julia Araujo</TextOptionMenu>
                        <TextOptionMenu style={{
                            color: ' #ccc',
                            marginLeft: '10px'

                        }}>@julia</TextOptionMenu>
                    </div>
                    <IconContainer>
                        <AnimatedIcon style={{
                            width: '1rem',
                            height: '1rem',
                            marginRight: '1rem',
                            color: '#4CAF50'
                        }} />
                    </IconContainer>

                </MenuLink>
            </Box>
        )
    },
    {
        link: (
            <Box>
                <MenuLink style={{
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Avatar style={{
                            border: '2px solid #ccc',
                        }} src="src\assets\pexels-italo-melo-881954-2379004.jpg" />
                        <TextOptionMenu>Carlos Silva</TextOptionMenu>
                        <TextOptionMenu style={{
                            color: ' #ccc',
                            marginLeft: '10px'

                        }}>@carlos</TextOptionMenu>
                    </div>
                    <ChatBubbleLeftEllipsisIcon style={{
                        width: '1rem',
                        height: '1rem',
                        marginRight: '1rem',
                        color: '#ccc'
                    }} />
                </MenuLink>
            </Box>
        )
    },
    {
        link: (
            <Box>
                <MenuLink style={{
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Avatar style={{
                            border: '2px solid #ccc',
                        }} src="src\assets\pexels-buro-millennial-636760-1438081.jpg" />
                        <TextOptionMenu>Thiago</TextOptionMenu>
                        <TextOptionMenu style={{
                            color: ' #ccc',
                            marginLeft: '10px'

                        }}>@thiago</TextOptionMenu>
                    </div>
                    <ChatBubbleLeftEllipsisIcon style={{
                        width: '1rem',
                        height: '1rem',
                        marginRight: '1rem',
                        color: '#ccc'
                    }} />
                </MenuLink>
            </Box>
        )
    },
]

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            height: '100vh',
            boxSizing: 'border-box'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid #ccc',
                width: '18rem',
            }}>
                <div style={{
                    widows: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '.8rem',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <ChartPieIcon style={{
                            width: '2rem',
                            height: '2rem'
                        }} />
                        <span style={{ fontWeight: 'bold' }}>Dashboard</span>
                    </div>
                    <BoxIconProfile>
                        <UserCircleIcon style={{
                            width: '1rem',
                            height: '1rem'
                        }} />
                    </BoxIconProfile>
                </div>
                <Divider />

                <Menu>
                    <Box>
                        <BoxInput>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <MagnifyingGlassCircleIcon style={{
                                    width: '1rem',
                                    height: '1rem',
                                    marginLeft: '.5rem'
                                }} />
                                <Input placeholder='Pesquise um cliente' />
                            </div>
                            <Squares2X2Icon style={{
                                width: '1rem',
                                height: '1rem',
                                marginLeft: '.5rem'
                            }} />
                        </BoxInput>
                        <div style={{
                            marginBottom: '1.2rem'
                        }}>
                            <MenuTitle>
                                Geral
                            </MenuTitle>
                        </div>
                        {dataMenu.map((data) => data.link)}
                    </Box>
                    <Box>
                        <FeedSidebar />
                    </Box>
                </Menu>

                <Footer>
                    <Divider style={{ marginBottom: '1rem' }} />
                    <MenuTitle style={{
                        marginLeft: '.8rem',
                        marginRight: '.8rem',
                    }}>Lista de Amigos</MenuTitle>
                    {dataFriends.map((data) => data.link)}
                </Footer>
            </div>
            <main style={{
                padding: '1rem',
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                overflowY: 'auto'
            }}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
