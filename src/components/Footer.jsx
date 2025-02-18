import { Box, IconButton } from "@mui/material";
import PianoIcon from '@mui/icons-material/Piano';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useLocation, useNavigate } from "react-router";

const Footer = ()=>{
    const navigate = useNavigate();
    const location = useLocation();
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
            backgroundColor:'background.default',
            borderTop:'1px solid',
            borderColor:'primary.main'
        }}>
            <Box
            sx={{
                display:'flex',
                gap:'20px',
                pb:'20px',
            }}>
                <IconButton
                onClick={()=> {navigate('/')}}
                sx={{
                    color:'primary.main'
                }}
                >
                    <PianoIcon
                    sx={{
                        fontSize:'40px',
                        opacity:`${ location.pathname === '/' ? 1 : 0.5 }`
                    }}
                    />
                </IconButton>

                <IconButton
                onClick={()=> {navigate('progression')}}
                sx={{
                    color:'primary.main'
                }}
                >
                    <LibraryMusicIcon
                    sx={{
                        fontSize:'40px',
                        opacity:`${ location.pathname === '/progression' ? 1 : 0.5 }`
                    }}
                    />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Footer;