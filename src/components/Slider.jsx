/* eslint-disable react/jsx-key */
import { Box, Typography } from "@mui/material";
import { chords } from "../utils/chords.js";
import { useDispatch, useSelector } from "react-redux";

export default function Slider(){
    const dispatch = useDispatch();
    const keyNote = useSelector(state => state.keyNote)
    return (
    <Box
    sx={{
        width:'95%',
        border:'1px solid #66666666',
        borderRadius:`30px`,
        padding:`20px`,
        overflowX:'scroll',
        boxSizing:'border-box',
        display:'flex',
        alignItems:'center',
        boxShadow: 'inset 2px 2px 10px 0px #66666666',
        gap:'30px',
    }}
    >
        {
        Object.keys(chords).map((chord)=>{
            return (
                <Typography
                onClick={()=>{dispatch({type:'CHANGE_KEYNOTE',keyNote:chord})}}
                variant='span'
                sx={{
                    fontSize:'50px',
                    color:`${( keyNote === `${chord}` ) ? '#ffaa26' : '#ffaa2677'}`,
                    position:'relative',
                    fontWeight:'800',
                    cursor:'pointer',
                    transition:'0.5s',
                    display:'flex',
                    alignItems:'center',
                    transform:`${chord===keyNote?'scale(1.3)':'none'}`,
                }}>
                    {chord[0]}
                    <Typography
                    sx={{
                        position:'absolute',
                        fontWeight:'800',
                        fontSize:'20px',
                        top:'-5px',
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