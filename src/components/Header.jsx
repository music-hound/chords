import { Box, IconButton, Typography } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from "react-redux";
import RippleEffect from "./RippleEffect";

const Header = ()=>{
    const dispatch = useDispatch()
    const isLight = useSelector(state => state.isLight)

    return (
        <Box
        sx={{
          width:'100%',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          p:'30px 0px',
        }}>
          <Box
          sx={{
            position:'relative',
          }}>
            <Typography
            sx={{
              fontFamily:'Helvetica',
              fontSize:'80px',
              color:'#ffaa26',
              fontWeight:'900',
              cursor:'pointer',
            }}>
              Chords
            </Typography>

            <RippleEffect />

            <IconButton
            onClick={()=>{dispatch( { type:'TOGGLE_THEME' } )}}
            sx={{
              transition:'0.5s',
              position:'absolute',
              top:'-8px',
              right:'35px'
            }}
            >
              {isLight?<DarkModeIcon color='primary'/>:<LightModeIcon color='primary'/>}
            </IconButton>
          </Box>
        </Box>
    )
}

export default Header;