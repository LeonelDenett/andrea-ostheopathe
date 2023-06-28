// Styles
import "./Footer.css";
// Mui Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
// Mui Icons
import LocationOnRounded from "@mui/icons-material/LocationOnRounded"

function Footer() {
    return (
        <footer>
            <Box className="footerContainer">
                <Typography variant="body2">©2023 Andréa Pot - Ostéopathe</Typography>
                <Link style={{textDecoration:"none", color: "inherit"}} target="_blank" href="https://www.google.com.ar/maps/place/29400+Landivisiau/@48.5097549,-4.0789294,15.25z/data=!4m6!3m5!1s0x4811506e046b9347:0x92fd7f8ac05ce55d!8m2!3d48.510131!4d-4.073265!16s%2Fm%2F03gwhcc?entry=ttu">
                <Box display={"flex"} textAlign={"center"}>
                    <LocationOnRounded fontSize="small" />
                    <Typography variant="body2">
                    Cabinet médical de la baie,<br/>Z.A La Gare, Plounéour-Trez
                    </Typography>
                    </Box>
                </Link>
                <Link style={{textDecoration:"none", color: "inherit"}} target="_blank" href="https://www.google.com.ar/maps/place/29400+Landivisiau/@48.5097549,-4.0789294,15.25z/data=!4m6!3m5!1s0x4811506e046b9347:0x92fd7f8ac05ce55d!8m2!3d48.510131!4d-4.073265!16s%2Fm%2F03gwhcc?entry=ttu">
                    <Typography variant="body2">Mentions légales</Typography>
                </Link>
            </Box>
        </footer>
    );
}

export default Footer;