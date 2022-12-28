import { Avatar, Button, Center, CloseButton, Container, Flex, HStack, Icon, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Spacer, Text, Tooltip, VStack, propNames, useToast } from "@chakra-ui/react";
import { FaCopy, FaPhone } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Layout from "../../components/shared/Layout";
import ColourPaletteEnum from "../../lib/enums/ColourPaletteEnum";
import { InfoIcon } from "@chakra-ui/icons";

export default function Contact() {
    const toast = useToast();

    function CopyEmail() {
        navigator.clipboard.writeText("123callumb@gmail.com");
        toast({
            isClosable: true,
            position: "bottom-right",
            render: (props) => {
                return <Flex bgColor={ColourPaletteEnum.Cyan} color={"white"} p="2" pl="3" borderRadius={"2"} alignItems="center">
                    <Icon as={InfoIcon} />
                    <Text ml="2" fontWeight={"500"}>Email copied to clipboard</Text>
                    <Spacer />
                    <CloseButton onClick={props.onClose} />
                </Flex>;
            }
        });
    }

    return <Layout useCircuit={true} breadcrumb="Contact Me">
        <Container maxW="6xl" textAlign="center" display="flex" justifyContent={"center"} alignItems={"center"} pt="10vh">
            <VStack
                spacing={3}
                bgColor={"white"}
                p="5"
                px="10"
                borderTop={`10px solid ${ColourPaletteEnum.Cyan}`}
                borderRadius={4}
                borderBottom={`8px solid black`}
                boxShadow="1px 0px 10px 1px rgba(40, 40, 40, 0.12)">
                <Avatar boxSize="52" name="Callum Beckwith" src="https://avatars.githubusercontent.com/u/6897908?v=4" userSelect="none" />
                <Text fontSize="lg" fontWeight="600">Callum Beckwith</Text>
                <Flex alignItems={"center"}>
                    <Text fontWeight="300" fontStyle="italic" fontSize="sm" mr={"2"}>123callumb@gmail.com</Text>
                    <Icon as={FaCopy} aria-label="Copy email address" onClick={CopyEmail} cursor="pointer" />
                </Flex>
                <HStack spacing={6} pt="4">
                    <Tooltip label={"Click to email"}>
                        <a href="mailto:123callumb@gmail.com">
                            <Avatar bg={ColourPaletteEnum.Cyan} color={ColourPaletteEnum.White} icon={<Icon as={MdAlternateEmail} />} cursor="pointer" />
                        </a>
                    </Tooltip>
                    <Popover trigger="hover" id="phone-popover">
                        <PopoverTrigger >
                            <Avatar bg={ColourPaletteEnum.Cyan} color={ColourPaletteEnum.White} icon={<Icon as={FaPhone} />} cursor="pointer" />
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverBody color="black">
                                <Flex>
                                    <Center>
                                        <Text fontWeight="500">0740 3333 115</Text>
                                    </Center>
                                    <Spacer />
                                    <a href="tel:07403333115">
                                        <Button color={ColourPaletteEnum.White} bgColor={ColourPaletteEnum.Cyan}>Call</Button>
                                    </a>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </HStack>
            </VStack>
        </Container>
    </Layout>;
}