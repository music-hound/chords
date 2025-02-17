import { Box } from "@mui/material";
import { motion } from "framer-motion";

const RippleEffect = () => {
    return (
        <Box
            sx={{
                position: "absolute",
                left:'131px',
                top:'66px',
                transform:'translateX(-50%) translateY(-50%)',
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 3, opacity: 0 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        delay: i * 0.6, // Смещение волн по времени
                    }}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        border: "1px solid",
                        borderColor:'primary.main'
                    }}
                />
            ))}
        </Box>
    );
};

export default RippleEffect;
