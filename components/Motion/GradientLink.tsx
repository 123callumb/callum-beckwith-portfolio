import NextLink from 'next/link';
import React from 'react';
import FramerBox from './FramerBox';
import { Flex, Icon } from '@chakra-ui/react';
import { TiArrowRight } from 'react-icons/ti';

export default function GradientLink(props: { href: string, title: string, newTab?: boolean }) {
    const GradientButton = React.forwardRef((p: any, ref: any) => {
        return (<FramerBox
            flexDir={"column"}
            pt={2}
            whileHover={"hover"}
            cursor="pointer"
            initial="start"
            onClick={p.onClick}
            ref={ref}>
            <Flex>
                <FramerBox
                    pr="16px"
                    fontWeight={"600"}
                    variants={{
                        start: {
                            paddingLeft: "16px"
                        },
                        hover: {
                            paddingLeft: '8px',
                            transition: {
                                delay: 0.3,
                                ease: "easeIn"
                            }
                        }
                    }}>{props.title}</FramerBox>
                <FramerBox
                    variants={{
                        start: {
                            opacity: 0,
                            display: 'none'
                        },
                        hover: {
                            opacity: 1,
                            display: 'block',
                            transition: {
                                delay: 0.3,
                                ease: "easeIn"
                            }
                        }
                    }}
                    marginLeft={"-16px"}>
                    <Icon as={TiArrowRight} verticalAlign={"sub"} />
                </FramerBox>
            </Flex>
            <FramerBox
                mt="2px"
                height={"3px"}
                w="100%"
                boxShadow="2px 2px 3px rgba(0, 0, 0, 0.1)"
                variants={{
                    start: {
                        background: "linear-gradient(to right, #589EA6 0%, #68D8C3  0%, #589EA6  100%)"
                    },
                    hover: {
                        background: "linear-gradient(to right, #589EA6 0%, #68D8C3  100%, #589EA6  100%)",
                        transition: {
                            duration: 0.3,
                            type: "tween",
                            ease: "easeInOut"
                        }
                    }
                }}></FramerBox>
        </FramerBox>);
    });

    return <NextLink href={props.href} target={props.newTab ? "_blank" : "_self"} rel={props.newTab ? "noopener noreferrer" : ""}>
        <GradientButton />
    </NextLink>;
}