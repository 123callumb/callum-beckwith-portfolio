import { chakra, shouldForwardProp } from "@chakra-ui/react";
import FramerBox from "./FramerBox";
import { isValidMotionProp } from "framer-motion";

function SlideInBoxComp(props) {
    return <FramerBox
        whileInView={{
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.1,
                bounce: 0.5,
                type: "spring"
            }
        }}
        initial={{
            x: 20,
            opacity: 0
        }}
        viewport={{
            once: true
        }} {...props}>
        {props.children}
    </FramerBox>
}

const SlideInBox = chakra(SlideInBoxComp, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop)
});

export default SlideInBox;

