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
            duration: 1000,
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

    return <Box pos="fixed" mx="auto" textAlign={"center"} zIndex={"1"} left={{ base: "-150vw", sm: "-80vw", md: "-40vw", lg: "-10vw"}} top={"-4vw"}>
        <chakra.object
            ref={setBgCircuitRef}
            maxW={"unset"}
            maxH={"unset"}
            width={{ base: "335.4vw", md: "191vw", lg: "143vw", xl: "114vw" }}
            left={{ base: "-142vw", md: "-35vw", lg: "-6vw", xl: "-6.6vw" }}
            top={{ base: "-3.2vw", md: "-3vw", lg: "-3.2vw", xl: "-3.3vw" }}
            position={"fixed"}
            type="image/svg+xml"
            opacity={"0.05"}
            zIndex={"1"}
            data={ResourceHelper.CreateResourceURL(ResourceEnum.TitleCircuitBlue)}
        />
        <Image
            opacity={"0.03"}
            zIndex={"-1"}
            maxW={"unset"}
            maxH={"unset"}
            width={{ base: "350vw", md: "200vw", lg: "150vw", xl: "120vw" }}
            src={ResourceHelper.CreateResourceURL(ResourceEnum.TitleCircuit)}
        />
    </Box>;
}