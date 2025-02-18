import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const Layout = () => {
  
  return (
    <Box
    sx={{
      margin:'0 auto',
      maxWidth:'650px',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      pb:'100px',
    }}>
      <Header />
      <main>
          <Outlet />
      </main>
        <Footer />
      </Box>
  );
}

export default Layout;
