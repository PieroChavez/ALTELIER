import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './Pages';
import Footer from './Components/Home/Footer';
import Login from './Service/Auth/Login';
import HomePage from './Pages/Home/Home';
import Job from './Pages/Store/Working/Job';
import Categoria from './Pages/Store/Categoria';
import Profile from './Pages/Profile/Profile'





import { CssBaseline, ThemeProvider, createTheme, Container } from '@mui/material';
import NavbarHome from './Components/Navbar/NavbarHome';

// Puedes personalizar el tema de MUI
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul
    },
    secondary: {
      main: '#9c27b0', // Púrpura
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        
        <NavbarHome/>
        <Container sx={{ mt: 4, mb: 4 }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<HomePage />} />


            <Route path="/Job" element={<Job />} />
            <Route path="/Categoria" element={<Categoria/>} />
            <Route path="/Profile" element={<Profile/>} />
            

          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
