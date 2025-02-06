import { useEffect, useState } from "react"
import { getPianoSize } from "./Piano";

const pianoSize = getPianoSize();

export default function BlackKey( { sx , active }){
    const [ activeBackground, setActiveBackground ] = useState('linear-gradient(180deg, #333333 0%, #000000 100%)')
    
    const width = pianoSize/24

    useEffect(()=>{
        if (active) {setActiveBackground('linear-gradient(180deg, #ffaa26 0%, #fb8c00 100%)')}
    },[active])
    
    return (
        <div
        style={{
            ...sx,
            width: `${width}px`,
            height: '60%',
            border:`${width*24/800}px solid #666`,
            background: activeBackground,
            borderRadius: `0px 0px ${width/4}px ${width/4}px`,
            position: 'absolute',
            transform:'translateX(-50%)',
            top: '0',
            zIndex: '2',
          }}
        />
    )
}