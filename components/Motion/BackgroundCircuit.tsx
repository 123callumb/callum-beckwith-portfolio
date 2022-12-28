import { chakra, Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Vivus from "vivus";
import ResourceHelper from "../../lib/helpers/ResourceHelper";
import ResourceEnum from "../../lib/enums/ResourceEnum";

export default function BackgroundCircuit() {
    const [bgCircuitRef, setBgCircuitRef] = useState<HTMLObjectElement>();

    useEffect(() => {
        if (!bgCircuitRef) return;

        new Vivus(bgCircuitRef, {
            duration: 500,
            type: "scenario",
            reverseStack: true
        }, vivus => {
            if (vivus.getStatus() === "end") {
                (vivus as any).parentEl.classList.add("fade-out-long");
                setTimeout(() => {
                    (vivus as any).parentEl.classList.remove("fade-out-long");
                    vivus.reset().play();
                }, (1000));
            }
        });
    });

    return <Box pos="fixed" mx="auto" textAlign={"center"} zIndex={"1"} left={"-10vw"} top={"-4vw"}>
        <chakra.object
            ref={setBgCircuitRef}
            maxW={"unset"}
            maxH={"unset"}
            width={"114vw"}
            left={"-6.6vw"}
            top={"-3.3vw"}
            position={"fixed"}
            type="image/svg+xml"
            opacity={"0.04"}
            data={ResourceHelper.CreateResourceURL(ResourceEnum.TitleCircuitBlue)}
        />
        <Image
            opacity={"0.02"}
            maxW={"unset"}
            maxH={"unset"}
            width={"120vw"}
            src={ResourceHelper.CreateResourceURL(ResourceEnum.TitleCircuit)}
        />
    </Box>;
}