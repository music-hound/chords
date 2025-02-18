import { Box, Typography } from "@mui/material";
import Slider from "../components/Slider";
import { chords } from "../utils/chords";
import { useSelector } from "react-redux";
import PianoListItem from "../components/PianoListItem";

const Chords = ()=>{
    const keyNote = useSelector(state => state.keyNote)
    return (
        <Box
        sx={{
            width:'100vw',
            maxWidth:'650px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:'10px',
        }}>
            <Typography
          sx={{
            color:'#888',
            width:'80%',
            fontSize:'12px',
            textAlign:'center',
          }}>
            Find clear, simple chord diagrams for piano here. Our resource offers visual chord charts with labeled notes, helping you learn a variety of chords with ease. Suitable for beginners and experienced musicians alike, these diagrams make it easy to expand your chord knowledge.
          </Typography>

            <Slider />
            {
                chords[`${keyNote}`]
                .map((chord)=>(
                <PianoListItem key={chord.name} chord={chord}/>
            ))
            }

        </Box>
    )
}

export default Chords;