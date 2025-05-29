import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';


import './index.css'
import App from './App.jsx'
//import 'bootstrap/dist/css/bootstrap.min.css';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // color azul típico de MUI
    },
    secondary: {
      main: '#9c27b0', // púrpura
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Aplica estilos base de MUI */}
        <App />
      </ThemeProvider>
  </StrictMode>,
)
