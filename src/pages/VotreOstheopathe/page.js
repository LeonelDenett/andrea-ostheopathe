// Styles
import "./page.css"
// Mui Components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// Components
import SubtitlePages from "../../components/subtitlePages/SubtitlePages";
// Framer Motion
import { motion } from 'framer-motion';
import ButtonReservation from "../../components/button/Button";

function VotreOstheopathe() {
    return (
        <Box className="mainOstheopathe">
            <SubtitlePages subtitle1={'Votre cabinet'} subtitle2={'andrea pot'} />
            <Paper component={motion.div} whileHover={{scale:1.025}} elevation={4} className="content" sx={{maxWidth: {md: "40rem"}}}>
                <Typography variant="body1" sx={{color:"#272727", fontSize:{md:"1.25rem"}}}>
                    Je suis Steeve Legand ostéopathe exclusif  DO DFO diplômé depuis 2015 de l’Ecole
                    Supérieure d’Ostéopathie (ESO). : <br/>
                    DO-DFO  : c’est parce que j’ai effectué un parcours à temps plein de  5 années
                     universitaires et une année supplémentaire de spécialisation.<br/>
                    Lors de cette année de spécialisation j'ai effectué un mémoire d’étude en
                     collaboration avec un service de gastro-entérologie.<br/>
                     Lors de cette année de spécialisation j'ai effectué un mémoire d’étude
                </Typography>
            </Paper>
            <Paper component={motion.div} whileHover={{scale:1.025}} elevation={4} className="mutuelle" sx={{maxWidth: {md: "40rem"}}}>
                <Typography sx={{fontSize: {sx:"1.25rem", md:"1.5rem"}}} variant="h6">Quelle aide de la mutuelle?</Typography>
                <Typography sx={{color:"#F2F9F1", fontSize:{sx:"1rem", md:"1.25rem"}}}>Recuerde que su mutuelle le paga todo como el doc pitt para mi</Typography>
            </Paper>
            <Box className="reservationContainer">
                <ButtonReservation/>
            </Box>
        </Box>
    );
}

export default VotreOstheopathe;