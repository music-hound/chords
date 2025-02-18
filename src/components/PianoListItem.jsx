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
            boxSizing:'border-box',
            width:'95%',
            maxWidth:'100%',
            // border:'1px solid #ffaa2666',
            boxShadow: 'inset 2px 2px 10px 0px #66666666',
            borderRadius:'30px',
            p:'10px'
        }}>
            <Box
            sx={{
                position:'relative',
                width:`100px`,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            }}>

            {/* Заголовок аккорда*/}
            <Typography
            variant="h1"
            sx={{
                position:'relative',
                fontSize:'60px',
                fontWeight:'800',
                color:'primary.main',
                opacity:'0.7',
            }}
            >
                {chord.name[0]}

            {/* Если есть диезы */}
            <Typography
            sx={{
                position:'absolute',
                fontSize:`25px`,
                fontWeight:'800',
                color:'primary.main',
                top:'-3px',
                right:'-12px',
            }}
            >
                {(chord.name[1] !== '-') ? chord.name[1] : ''}
            </Typography>

            {/* Обозначение аккорда */}
            <Typography
            sx={{
                position:'absolute',
                top:'55px',
                right:'-10px',
                fontSize:'15px',
                textAlign:'right',
            }}>
                {chord.name.split("-")[1]}
            </Typography>

            </Typography>

            </Box>

            <Piano notes={chord.midiKeys} />
            <IconButton
            onClick={ () => {
                dispatch( { type:'TOGGLE_FAVORITE', chord:chord } )
            }}
            >
                {
                    favoriteChords.includes(chord)
                    ? <FavoriteIcon sx={{ color:'primary.main' }} />
                    : <FavoriteBorderIcon sx={{ color:'primary.main' }} />
                }
            </IconButton>
        </Box>
    )
}

export default PianoListItem;