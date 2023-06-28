// MuiComponents
import Button from "@mui/material/Button";
// Framer Motion
import { motion } from "framer-motion"

function ButtonReservation() {
    return (
        <motion.div whileHover={{scale:1.025}}>
            <Button variant='contained' size='large'>Prendre rendez-vous</Button>
        </motion.div>
    );
}

export default ButtonReservation;