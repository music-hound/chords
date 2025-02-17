/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import Piano from "./Piano";

const PianoListItem = ( { chord } )=>{
    
    return (
        <Box
        sx={{
            margin:'10px 0px'
        }}>
            <Piano notes={chord.midiKeys} />
        </Box>
    )
}

export default PianoListItem;