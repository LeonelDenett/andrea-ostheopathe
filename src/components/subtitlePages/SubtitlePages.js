// Styles
import "./SubtitlePages.css";
// Mui Components
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

function SubtitlePages({ subtitle1, subtitle2 }) {
    return (
        <Box className="header">
            <Divider orientation='vertical' flexItem className="divider" />
            <Box className="subtitle">
                <Typography variant='h6' sx={{color:"#F2F9F1"}} fontWeight={600}>{subtitle1}</Typography>
                <Typography variant='h6' sx={{color:"#F2F9F1"}} fontWeight={600}>{subtitle2}</Typography>
            </Box>
        </Box>
    );
}

export default SubtitlePages;