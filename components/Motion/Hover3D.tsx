import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

export default function Hover3D({ children, threshold = 2 }) {

    const [element, setElement] = useState<HTMLDivElement>(null);

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetTop, offsetLeft } = currentTarget;
        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        const rotateX = (threshold / 2 - horizontal * threshold).toFixed(2);
        const rotateY = -(vertical * threshold - threshold / 2).toFixed(2);

        if (!element)
            throw "failed to find element to do perspective transform on";

        element.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }

    const onMouseOut = (e: React.MouseEvent) => {
        element.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }

    return <motion.div onMouseMove={onMouseMove} onMouseOut={onMouseOut} ref={setElement} style={{
        position: 'relative',
        transition: 'transform 0.1s ease',
        transformStyle: 'preserve-3d',
        willChange: 'transform'
    }}>
        {children}
    </motion.div>
}