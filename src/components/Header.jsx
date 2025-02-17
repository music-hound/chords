import { Box, IconButton, Typography } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from "react-redux";
import GlowingGradientLine from "./Glow";
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
            top:'0px',
            padding:'30px 0px 30px 0px',
        }}>
            <Typography
            sx={{
              fontFamily:'Helvetica',
              fontSize:'80px',
              color:'#ffaa26',
              fontWeight:'900',
              position:'relative',
              cursor:'pointer',
              transition:'1.5s',
            }}>
              <RippleEffect />
              Chords

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

            </Typography>

            <GlowingGradientLine />

            <Typography
            sx={{
              color:'#888',
              width:'80%',
              fontSize:'12px',
              textAlign:'center',
              mt:'30px',
            }}>
Find clear, simple chord diagrams for piano here. Our resource offers visual chord charts with labeled notes, helping you learn a variety of chords with ease. Suitable for beginners and experienced musicians alike, these diagrams make it easy to expand your chord knowledge.
            </Typography>

        </Box>
    )
}

export default Header;