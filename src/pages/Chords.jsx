import { Box } from "@mui/material";
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
            maxWidth:'750px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Slider />

            {
                chords[`${keyNote}`].map((chord)=>(
                <PianoListItem key={chord} chord={chord}/>
                ))
            }
        </Box>
    )
}

export default Chords;