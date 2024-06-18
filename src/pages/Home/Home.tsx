import { MagnifyingGlassCircleIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import styled from 'styled-components'

import ApexChartBar from '../../components/ApexChart/ApexChartBar';
import ApexChart from '../../components/ApexChart/ApexChart';
import ApexChartBarHelthMap from '../../components/ApexChart/ApexChartHethMap';
import ApexChartPolarArea from '../../components/ApexChart/ApexChartPolarArea';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Julia Araujo',
    age: 32,
    address: 'Brasil',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Carlos Silva',
    age: 42,
    address: 'Brasil',
    tags: ['nice'],
  },
  {
    key: '3',
    name: 'Thiago',
    age: 32,
    address: 'Brasil',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Thiago',
    age: 32,
    address: 'Brasil',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Thiago',
    age: 32,
    address: 'Brasil',
    tags: ['cool', 'teacher'],
  },

];


const Container = styled.div`
  flex: 1;
`

const NavBar = styled.header`
padding: 1rem;
display: flex;
align-items: center;
justify-content: space-between;
`;

const BreadCrumb = styled.text`
    font-size: 14px;
`;

const Avatar = styled.img`
    width: 45px; 
    height: 45px; 
    border-radius: 50%; 
    object-fit: cover; 
    border: 2px solid #3f4040e6; 
    margin-left: .8rem;
    margin-right: .8rem;
    cursor: pointer;
`;

const BoxInput = styled.div`
    width: 25rem;
    height: 2.5rem;
    border: 2px solid #413737; 
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

`;

const Input = styled.input`
    border: none;
    width: 90%;
    height: 70%;
    outline: none;
    margin: .2rem;
    background-color: transparent;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr)); 
  gap: 1rem; 
  padding: 1rem; 
  `;


const Home = () => {
  return (
    <Container>
      <NavBar>
        <div>
          <div>
            <BreadCrumb style={{ color: 'grey', cursor: 'pointer', marginRight: '5px' }}>Home</BreadCrumb>/
            <BreadCrumb style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '5px', fontStyle: 'italic' }}>Dashboard</BreadCrumb>
          </div>
          {/* <p style={{ lineHeight: '2rem', fontSize: '24px' }}>Bem vindo de volta <strong style={{ fontWeight: 'bold' }}>Neto!</strong></p> */}
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4rem'
        }}>
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

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{
              fontWeight: 'normal', fontSize: '14px'
            }}>Jose Neto</p>
            <Avatar src='src\assets\pexels-olly-927451.jpg' />
          </div>
        </div>
      </NavBar>
      <Box style={{ marginTop: '1rem' }}>
        <div style={{
          width: '370px',
          height: '200px',
          marginRight: '4px',
          border: '1px dotted #97A3B6',
          borderRadius: '10px',
          padding: '1rem',

        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <strong style={{
              fontWeight: 'bold'
            }}>Número de visitas</strong>

            <strong style={{
              background: 'rgba(76, 175, 79, 0.242)',
              border: '1px dotted #38863b',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              padding: '.5rem',
              borderRadius: '4px',
              color: '#38863b',
              fontWeight: 'bold'
            }}>
              realtime
            </strong>

          </div>
          <div style={{
            marginTop: '2rem'
          }}>
            <strong style={{
              fontSize: '100px'
            }}>100</strong> Novos usuários
          </div>
        </div>
        <div style={{
          width: '370px',
          height: '200px',
          marginRight: '4px',
          border: '1px dotted #97A3B6',
          borderRadius: '10px',
          padding: '1rem',

        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <strong style={{
              fontWeight: 'bold'
            }}>Número de visitas</strong>

            <strong style={{
              background: 'rgba(76, 175, 79, 0.242)',
              border: '1px dotted #38863b',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              padding: '.5rem',
              borderRadius: '4px',
              color: '#38863b',
              fontWeight: 'bold'
            }}>
              realtime
            </strong>

          </div>
          <div style={{
            marginTop: '2rem'
          }}>
            <strong style={{
              fontSize: '100px'
            }}>100</strong> Novos usuários
          </div>
        </div>
        <div style={{
          width: '370px',
          height: '200px',
          marginRight: '4px',
          border: '1px dotted #97A3B6',
          borderRadius: '10px',
          padding: '1rem',

        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <strong style={{
              fontWeight: 'bold'
            }}>Número de visitas</strong>

            <strong style={{
              background: 'rgba(76, 175, 79, 0.242)',
              border: '1px dotted #38863b',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              padding: '.5rem',
              borderRadius: '4px',
              color: '#38863b',
              fontWeight: 'bold'
            }}>
              realtime
            </strong>

          </div>
          <div style={{
            marginTop: '2rem'
          }}>
            <strong style={{
              fontSize: '100px'
            }}>100</strong> Novos usuários
          </div>
        </div>
        <div style={{
          width: '370px',
          height: '200px',
          marginRight: '4px',
          border: '1px dotted #97A3B6',
          borderRadius: '10px',
          padding: '1rem',

        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <strong style={{
              fontWeight: 'bold'
            }}>Número de visitas</strong>

            <strong style={{
              background: 'rgba(76, 175, 79, 0.242)',
              border: '1px dotted #38863b',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              padding: '.5rem',
              borderRadius: '4px',
              color: '#38863b',
              fontWeight: 'bold'
            }}>
              realtime
            </strong>

          </div>
          <div style={{
            marginTop: '2rem'
          }}>
            <strong style={{
              fontSize: '100px'
            }}>100</strong> Novos usuários
          </div>
        </div>
        <div style={{
          width: '370px',
          marginRight: '4px',
          border: '1px dotted #97A3B6',
          borderRadius: '4px'
        }}>
          <ApexChart />
        </div>
        <div style={{
          width: '370px',
          marginRight: '4px',
          border: '1px dotted #97A3B6',
          borderRadius: '4px'
        }}>
          <ApexChartBarHelthMap />
        </div>
        <div style={{
          width: '370px',
          marginRight: '4px',
          border: '1px dotted #97A3B6',
          borderRadius: '4px'
        }}>
          <ApexChartBar />
        </div>
        <div style={{
          width: '370px',
          marginRight: '4px',
          border: '1px dotted #97A3B6',
          borderRadius: '4px'
        }}>
          <ApexChartPolarArea />
        </div>
      </Box>
      <Table columns={columns} dataSource={data} />;
    </Container>
  );
};

export default Home;
