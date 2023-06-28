// Styles
import "./page.css"
// Mui Components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// Components
import SubtitlePages from "../../components/subtitlePages/SubtitlePages";
// Framer Motion
import { motion } from 'framer-motion';

function Informations() {
    const days = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
    const hours = ["9h - 19h30"]
    const unavailable = ["fermé"]
    return (
        <Box className="mainInformation">
            <SubtitlePages subtitle1={"informations"} subtitle2={"pratiques"} />
            <Box className="informationsPage">
                <Typography variant="h6" sx={{fontSize: {sx:"1.25rem", md:"1.5rem"}}}>Horaires</Typography>
            </Box>
            <Box sx={{position:"relative", display:"flex",justifyContent: "center",width:"100%", paddingX:"1rem"}}>
            <Paper component={motion.div} whileHover={{scale:1.025}} elevation={4} className="informationsContainer" sx={{maxWidth: {md: "40rem"}, width: "100%"}}>
                <Box display="flex" flexDirection="column">
                    {days.map((day, index) => (
                        <Typography key={index} sx={{fontSize:{sx:"1rem", md:"1.25rem"}}}>
                            {day}
                        </Typography>
                    ))}
                </Box>
                <Divider sx={{backgroundColor:"#d49487"}} orientation="vertical" flexItem/>
                <Box display="flex" flexDirection="column">
                    {days.slice(0, 5).map((day, index) => (
                    <Box key={index}><Typography sx={{fontSize:{sx:"1rem", md:"1.25rem"}}}>{hours}</Typography></Box>
                    ))}
                    {days.slice(5).map((day, index) => (
                    <Box key={index}><Typography sx={{fontSize:{sx:"1rem", md:"1.25rem"}}}>{unavailable}</Typography></Box>
                    ))}
                </Box>
            </Paper>
            </Box>
            <Paper component={motion.div} whileHover={{scale:1.025}} className="clientsContainer" elevation={4} sx={{maxWidth: {md: "40rem"}}}>
                <Typography variant="h6" sx={{fontSize: {sx:"1.25rem", md:"1.5rem"}}}>
                    Qui sont mes patients?
                </Typography>
                <Box className="clientsInformation">
                    <Typography sx={{color:"#F2F9F1",fontSize:{sx:"1rem", md:"1.25rem"}}}>
                        Mes portes sont ouvertes à tous, nourrissons, enfants,
                        adolescents, adultes, seniors, femmes enceintes ou encore sportifs.<br/>
                    </Typography>
                    <Divider sx={{backgroundColor:"#F2F9F1"}} flexItem/>
                    <Typography sx={{color:"#F2F9F1", fontSize:{sx:"1rem", md:"1.25rem"}}}>
                        - Consultations en entreprises<br/>
                        - Interventions en urgence<br/>
                        - Interventions en urgence
                    </Typography>
                </Box>
            </Paper>
        </Box>
     );
}

export default Informations;