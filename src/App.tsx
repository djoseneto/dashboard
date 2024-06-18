// src/App.tsx
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';
import Login from './pages/Login/Login';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
