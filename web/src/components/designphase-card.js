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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import DesignPhase from "../views/design-phase";
import { DesignPhaseContext } from "../contexts/designphase-context";

export default function DesignPhaseCard({ title, description, phase }) {
    const { setCurrentDesignPhase } = useContext(DesignPhaseContext);

    return (
        <Center py={6}>
            <Box
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
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
                            onClick={() => setCurrentDesignPhase(phase)}
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
