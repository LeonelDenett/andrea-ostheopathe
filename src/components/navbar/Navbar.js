// Styles
import "./Navbar.css";
// Mui Components
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Paper from '@mui/material/Paper';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
// Mui Icons
import LocationOnRounded from "@mui/icons-material/LocationOnRounded"
import PhoneRounded from "@mui/icons-material/PhoneRounded"
// Image
import DoctoLib from "../../images/doctolib.png"
// Framer Motion
import { motion } from "framer-motion";

function Navbar() {
  const icons = [
    {icon: <Link href="tel:0666575278"><PhoneRounded className="icon" fontSize="large"/></Link>},
    {icon:  <Link target="_blank" href="https://www.google.com/maps/place/Docteur+Patrice+Nabbe/@48.6436445,-4.3376759,17z/data=!4m14!1m7!3m6!1s0x481401dad8357a3f:0x5b6629e9157a4d97!2sDocteur+Patrice+Nabbe!8m2!3d48.643641!4d-4.335101!16s%2Fg%2F1tcwfctk!3m5!1s0x481401dad8357a3f:0x5b6629e9157a4d97!8m2!3d48.643641!4d-4.335101!16s%2Fg%2F1tcwfctk?hl=fr&entry=ttu">
              <LocationOnRounded className="icon" fontSize="large"/>
            </Link>
    },
  ]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='sticky' className="navbar">
        <Toolbar className="toolbar">
          {icons.map((item, index) => (
            <Paper component={motion.div} whileHover={{scale:1.025}} key={index} elevation={4} sx={{borderRadius:"1rem", width:"4.063rem", height:"4.063rem"}}>
              <IconButton
                size="large"
                aria-label="menu"
                className="iconContainer"
                sx={{width:"100%", height:"100%", borderRadius:"1rem"}}
              >
                  {item.icon}
              </IconButton>
            </Paper>
          ))}
          <Link href="https://www.doctolib.fr/" target="_blank">
          <Paper component={motion.div} whileHover={{scale:1.025}} elevation={4} className="doctoLibContainer" sx={{borderRadius:"1rem"}}>
            <img alt="doctolib" className="iconDoctolib" src={DoctoLib} />
          </Paper>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;