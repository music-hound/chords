/* eslint-disable react/prop-types */
import { Box, IconButton, Typography } from "@mui/material";
import Piano from "./Piano";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from "react-redux";

const PianoListItem = ( { chord } )=>{

    const dispatch = useDispatch()
    const favoriteChords = useSelector(state => state.favoriteChords)
    
    return (
        <Box
        sx={{
            display:'flex',
            alignItems:'center',
            width:'95%',
            maxWidth:'100%',
            border:'1px solid',
            p:'10px 0px 10px 70px'
        }}>
            <Typography
            sx={{
                position:'absolute'
            }}>{chord.name}</Typography>

<Box
            sx={{
              width:`100px`,
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
            }}>

            <Typography
            variant='span'
            sx={{
              // top:'-15px',
              position:'relative',
              fontSize:`80px`,
              height:`100px`,
              fontWeight:'800',
              opacity:'0.4',
            }}>
              {chord.name[0]}
                <Typography
                sx={{
                    position:'absolute',
                    fontSize:`50px`,
                    fontWeight:'800',
                    top:'0px',
                    right:'-20px',
                }}
                >
                    {(chord.name[1] !== '-') ? chord.name[1] : ''}
                </Typography>
            </Typography>

            <Typography
            variant='span'
            sx={{
              width:`100px`,
              color:'#ffaa2666',
              fontSize:`30px`,
              textAlign:'right',
              bottom:`60px`,
              position:'absolute'
            }}>
              {chord.name.split("-")[1]}
            </Typography>

            </Box>

            <Piano notes={chord.midiKeys} />
            <IconButton
            onClick={()=>{dispatch({type:'TOGGLE_FAVORITE', chord:chord})}}
            >
                { favoriteChords.includes(chord) ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
            </IconButton>
        </Box>
    )
}

export default PianoListItem;