import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

function GlowingGradientLine() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let hue = 38; // Цвет #ffaa26 в HSL (38° hue)
    let direction = 1;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gradient = ctx.createLinearGradient(0, canvas.height / 2, canvas.width, canvas.height / 2);
      gradient.addColorStop(0, `rgba(255, 170, 38, 0)`);
      gradient.addColorStop(0.5, `rgba(255, 170, 38, 1)`);
      gradient.addColorStop(1, `rgba(255, 170, 38, 0)`);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 10;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `hsl(${hue}, 100%, 50%)`;
      
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
      
      hue += direction * 1;
      if (hue > 50 || hue < 30) direction *= -1;
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <Box
    sx={{
        width:'90%',
        display:'flex',
        justifyContent:'center',
    }}>
    <canvas
    style={{
        width:'100%',
        maxWidth:'400px',
        height:'10px',
    }}
    ref={canvasRef}
    />
    </Box>
  );
}

export default GlowingGradientLine;