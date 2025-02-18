/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Box } from "@mui/material"

export default function BlackKey( { active }){
    const [ activeBackground, setActiveBackground ] = useState('linear-gradient(180deg, #333333 0%, #000000 100%)')
    

    useEffect(()=>{
        if (active) {setActiveBackground('linear-gradient(180deg, #ffaa26 0%, #fb8c00 100%)')}
        else {setActiveBackground('linear-gradient(180deg, #333333 0%, #000000 100%)')}
    },[active])
    
    return (
        <Box
        className={"black_key"}
        sx={{
            height: '60%',
            border:`1px solid #666`,
            background: activeBackground,
            borderRadius: `0px 0px 3px 3px`,
            position: 'absolute',
            transform:'translateX(-50%)',
            top: '0',
            zIndex: '2',
        }}
        />
    )
}