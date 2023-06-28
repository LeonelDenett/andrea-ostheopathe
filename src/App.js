// Styles
import './App.css';
// Mui Components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper';
// Components
import Navbar from './components/navbar/Navbar';
// Images
import Andrea from "./images/andrea.jpeg";
import Background from "./images/background.jpeg"
// Framer Motion
import { motion } from "framer-motion"
import ButtonReservation from './components/button/Button';

function App() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main className="main">
      <Grid container className="gridContainer">
        <Grid item xs={12} className="firstGrid" sx={{height: {xs:"65%", md:"70%"}}}>
          <Box className="photoContainer">
          <img src={!matches? Andrea : Background} alt="background" className={!matches ? "backgroundPhoto" : "backgroundPhotoXXL"} />
          </Box>
          <Box sx={{zIndex: 2, position:"relative", width:"100%", height:"100%"}}>
            <Box className="presentationContainer">
              <Paper component={motion.div} whileHover={{scale:1.025}} elevation={4} className="presentation" sx={{maxWidth: {md: "40rem"}}}>
                <Typography color="secondary" className="name" sx={{fontSize: {xs: "2rem", md:"2.625rem"}}}>Andréa Pot</Typography>
                <Typography color="secondary" className="job">Ostéopathe - D.O</Typography>
                <ButtonReservation/>
              </Paper>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} className="secondGrid" sx={{maxWidth: {md: "42rem"},height: {xs:"35%", md:"30%"}}}>
          <Box className="informationSection">
            <Paper component={motion.div} whileHover={{scale:1.025}} elevation={4} className="dataContainer">
              <Box className="informationContainer">
                <Typography className="information" sx={{fontSize: {sx:"1rem", md:"1.25rem"}}}>Téléphone:</Typography>
                <Typography className="data" sx={{fontSize: {sx:"1rem", md:"1.25rem"}}}>06 66 57 52 78</Typography>
              </Box>
              <Box className="informationContainer">
                <Typography className="information" sx={{fontSize: {sx:"1rem", md:"1.25rem"}}}>Adresse:</Typography>
                <Typography className="data" sx={{fontSize: {sx:"1rem", md:"1.25rem"}}}>Cabinet médical de la Baie,<br/> Z.A La Gare,<br/> 29890 Plounéour-Brignogan-Plages</Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </main>
    </>
  );
}

export default App;
