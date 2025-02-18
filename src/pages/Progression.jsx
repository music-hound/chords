import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import PianoListItem from "../components/PianoListItem";

const Progression = ()=>{

    const favoriteChords = useSelector(state => state.favoriteChords)

    return (
        <Box
        sx={{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            pb:'150px',
        }}>
            <Typography
            sx={{
              fontFamily:'Helvetica',
              fontSize:'40px',
              color:'#ffaa26',
              fontWeight:'900',
              cursor:'pointer',
              transition:'1.5s',
            }}>
              Progression
            </Typography>

            <Box>

                {
                    favoriteChords.length===0 && <Typography sx={{mt:8}}> Nothing yet to show..</Typography>
                }

                {
                    favoriteChords &&
                    favoriteChords.map( (chord) => <PianoListItem key={chord.name+'_progression'} chord={chord} /> )
                }
            
            
            </Box>
        </Box>
    )
}

export default Progression;