/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import "../styles/styles.css"

export default function BlackKey( { sx , active }){
    const [ activeBackground, setActiveBackground ] = useState('linear-gradient(180deg, #333333 0%, #000000 100%)')
    

    useEffect(()=>{
        if (active) {setActiveBackground('linear-gradient(180deg, #ffaa26 0%, #fb8c00 100%)')}
    },[active])
    
    return (
        <div
        className="black_key"
        style={{
            ...sx,
            width: `13px`,
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