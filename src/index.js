import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Mui Components
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from "@mui/material/CssBaseline"
// Font
import '@fontsource-variable/comfortaa';
import VotreOstheopathe from './pages/VotreOstheopathe/page';
import Informations from './pages/Informations/page';
import Footer from './components/footer/Footer';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "2rem",
          padding: "1.5rem",
          fontWeight: 700,
          backgroundColor: "#5b8883",
          border: "2px solid rgba(0, 0, 0, 0.27)",
          borderRadius: ".75rem",
          color: "#F2F9F1",
          marginTop: ".5rem",
          '&:hover': {
            backgroundColor: '#d49487',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          backgroundColor: "#F2F9F1"
        },
      },
    },
  },
  typography: {
    fontFamily: 'Comfortaa Variable, sans-serif',
    fontSize: 14
  },
  // Resto de las propiedades del tema
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
      <VotreOstheopathe/>
      <Informations/>
      <Footer/>
    </ThemeProvider>
  </React.StrictMode>
);