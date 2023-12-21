import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ScaleIntoView({ children, style= {} }){
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView)
            controls.start("visible");
        else if (!inView)
            controls.start("hidden");
    }, [controls, inView])


    return <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
            hidden: {
                scaleY: 0.9,
                opacity: 0.1,
                y: 100,
                transition: {
                    y: { stiffness: 1000 }
                }
            },
            visible: {
                scaleY: 1,
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.3,
                    y: {
                        stiffness: 1000,
                        velocity: -100
                    }
                }
            }
        }}
        style={style}>
        {children}
    </motion.div>;
}