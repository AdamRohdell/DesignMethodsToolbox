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

    const TextWithSources = (text) => {
        let words = text.split(" ");

        let regExp = /\(([^)]+)\)/;
        let matches = regExp.exec(text);
        let sourcesInText = [];
        let citations = [];

        let newText = text;

        //matches[1] contains the value between the parentheses
        const recursiveRegExCheck = () => {
            if (matches) {
                newText = newText.replace(matches[0], "");
                sourcesInText.push(matches[1]);
                matches = regExp.exec(newText);
                recursiveRegExCheck();
            }
        };

        recursiveRegExCheck();

        if (!sources) return text;

        let realSources = [];

        sources.forEach((source) => {
            sourcesInText.forEach((word) => {
                if (word.includes(source.title)) {
                    citations.push(
                        <cite>
                            <a href={source.url}>
                                {source.author}, {source.year}
                            </a>
                        </cite>
                    );
                    realSources.push(word);
                }
            });
            citations.push("");
        });

        sourcesInText = sourcesInText.filter((x) => realSources.includes(x));

        if (sourcesInText.length <= 0) return text;

        let textParts = [];

        const recursiveFunction = (text, source) => {
            //    if (text.indexOf(source) === -1) return;

            textParts.push(text.slice(0, text.indexOf(source)));

            if (sourcesInText.indexOf(source) == sourcesInText.length - 1) {
                console.log(source);

                textParts.push(
                    text.slice(text.indexOf(source) + source.length)
                );
            }

            if (sourcesInText.indexOf(source) != sourcesInText.length - 1) {
                recursiveFunction(
                    text.slice(text.indexOf(source) + source.length),
                    sourcesInText[sourcesInText.indexOf(source) + 1]
                );
            } else {
                return;
            }
        };

        recursiveFunction(text, sourcesInText[0]);

        let finalList = [];

        textParts = textParts.forEach((part, index) => {
            finalList.push(part);
            finalList.push(citations[index]);
        });

        return <p>{finalList}</p>;
    };

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
                        {TextWithSources(description)}
                    </Text>
                </Box>
            </Box>
        </Center>
    );
}
