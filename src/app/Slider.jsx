import { Box, Typography } from "@mui/material";
import { getPianoSize } from './Piano.jsx';
import { chords } from "./chords.js";

const pianoSize = getPianoSize();

export default function Slider( { keyNote, setKeyNote, sx } ){
    return (
        // 291 561 831
    <Box
    sx={{
        ...sx,
        border:'1px solid #77777788',
        borderRadius:`${pianoSize/16}px`,
        padding:`${pianoSize/20}px ${pianoSize/10}px`,
        overflowX:'scroll',
        boxSizing:'border-box',
        display:'flex',
        alignItems:'center',
        boxShadow: 'inset 0px 0px 5px 0px #cccccc88',
        gap:'20px',
    }}
    >
        {
                Object.keys(chords).map((chord)=>{
                    const activeColor = ( keyNote === `${chord}` ) ? '#ffaa26' : '#ffaa2655'
                    const activeSize = ( keyNote === `${chord}` ) ? `${pianoSize/5}px` : `${pianoSize/7}px`
                    return (
                        <Typography
                        onClick={()=>{setKeyNote(`${chord}`)}}
                        variant='span'
                        sx={{
                        position:'relative',
                        fontSize:activeSize,
                        height:`${pianoSize/4}px`,
                        color:`${activeColor}`,
                        fontWeight:'800',
                        cursor:'pointer',
                        transition:'0.5s',
                        display:'flex',
                        alignItems:'center',
                        }}>
                            {chord[0]}
                            <Typography
                            sx={{
                                position:'absolute',
                                fontSize:`${pianoSize/12}px`,
                                fontWeight:'800',
                                top:'-10px',
                                right:'-15px',
                            }}
                            >
                                {chord[1]}
                            </Typography>

                        </Typography>
                    )
                })
                }
    </Box>
    )
}