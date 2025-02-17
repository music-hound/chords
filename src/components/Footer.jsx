import { Box, IconButton } from "@mui/material";
import PianoIcon from '@mui/icons-material/Piano';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useNavigate } from "react-router";
import GlowingGradientLine from "./Glow";

const Footer = ()=>{
    const navigate = useNavigate();
    return (
        <Box
        sx={{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center',
            position:'fixed',
            bottom:'0px',
            padding:'10px 50px',
            zIndex:5,
            background:'#181818',
        }}>
            <GlowingGradientLine />
            <Box
            sx={{
                display:'flex',
                gap:'20px',
                padding:'20px 0px',
            }}>
                <IconButton
                onClick={()=> {navigate('/')}}
                sx={{
                    color:'primary.main'
                }}
                >
                    <PianoIcon sx={{fontSize:'40px'}}/>
                    </IconButton>
                <IconButton
                onClick={()=> {navigate('progression')}}
                sx={{
                    color:'primary.main'
                }}
                >
                    <LibraryMusicIcon sx={{fontSize:'40px'}}/>
                </IconButton>
            </Box>
        </Box>
    )
}

export default Footer;