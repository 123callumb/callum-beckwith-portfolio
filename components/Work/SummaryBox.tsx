import { VStack, Box, Text, HStack, Icon } from "@chakra-ui/react";
import Summary_Props from "../../lib/props/Summary_Props";
import Hover3D from "../Motion/Hover3D";
import StandoutButton from "../shared/StandoutButton";

export default function SummaryBox(props: Summary_Props) {
    return <VStack w="360px" alignContent={"start"} justifyContent="start">
        <Box bgColor={'#F4F9F6'} borderRadius="2" p="4" pb="0" w="100%">
            <Hover3D>
                <img width="100%" src={props.featureImageURL} />
            </Hover3D>
        </Box>
        <Text size={"lg"} w="100%">{props.name}</Text>
        <HStack w="100%">{props.technologyUsed.map((m, i) => 
            <Icon 
                key={i} 
                as={m} 
                boxSize={10} 
                color="white"
                bgColor={"#68D8C2"}
                p="6px"
                borderRadius={"6"}
            />)}
        </HStack>
        <HStack w="100%">{props.languagesUsed.map((m, i) => 
            <Icon 
                key={i} 
                as={m} 
                boxSize={10} 
                color="white"
                bgColor={"#68D8C2"}
                p="6px"
                borderRadius={"6"}
            />)}
            </HStack>
        <Text size={"md"} w="100%">{props.desc}</Text>
        <StandoutButton text="View Details" />
    </VStack>;
}