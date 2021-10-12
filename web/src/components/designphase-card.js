import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    textDecoration,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useState } from "react";
import DesignPhase from "../views/design-phase";
import { DesignPhaseContext } from "../contexts/designphase-context";
import { SourcesContext } from "../contexts/sources-context";

export default function DesignPhaseCard({
    title,
    description,
    phase,
    scrollFunction,
}) {
    const { setCurrentDesignPhase } = useContext(DesignPhaseContext);
    const { sources } = useContext(SourcesContext);

    const [hover, setHover] = useState(false);
    const [linkStyle, setLinkStyle] = useState(null);

    const toggleHover = () => {
        setHover(!hover);
    };

    useEffect(() => {
        if (hover) {
            setLinkStyle({ textDecoration: "underline", cursor: "pointer" });
        } else {
            setLinkStyle({});
        }
    }, [hover]);

    return (
        <Center py={6}>
            <Box
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
                ml={5}
                mr={5}
            >
                <Stack
                    textAlign={"center"}
                    p={6}
                    color={useColorModeValue("gray.800", "white")}
                    align={"center"}
                >
                    <Stack
                        direction={"row"}
                        align={"center"}
                        justify={"center"}
                    >
                        <Text
                            fontSize={"6xl"}
                            fontWeight={800}
                            onClick={() => {
                                setCurrentDesignPhase(phase);
                                scrollFunction(phase);
                            }}
                            onMouseEnter={toggleHover}
                            onMouseLeave={toggleHover}
                            style={linkStyle}
                        >
                            {title}
                        </Text>
                    </Stack>
                </Stack>

                <Box
                    bg={useColorModeValue("gray.50", "gray.900")}
                    px={6}
                    py={10}
                >
                    <Text fontSize={18} fontWeight={400}>
                        {description}
                    </Text>
                </Box>
            </Box>
        </Center>
    );
}
