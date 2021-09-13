import {
    FormControl,
    FormLabel,
    Textarea,
    FormHelperText,
    Input,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Button,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { useContext, useState } from "react";
import InputText from "./info-texts/input-text";
import ExperiencesText from "./info-texts/experiences-text";
import ResearchText from "./info-texts/research-text";
import HowText from "./info-texts/how-text";
import OutputText from "./info-texts/output-text";
import WhatText from "./info-texts/what-text";
import { MethodContext } from "../contexts/method-context";

const MethodInput = () => {
    const { addMethod } = useContext(MethodContext);
    const [hoverInput, setHoverInput] = useState(false);
    const [titleInput, setTitleInput] = useState("");
    const [inputInput, setInputInput] = useState("");
    const [outputInput, setOutputInput] = useState("");
    const [whatInput, setWhatInput] = useState("");
    const [howInput, setHowInput] = useState("");
    const [experiencesInput, setExperiencesInput] = useState("");
    const [researchInput, setResearchInput] = useState("");

    const handleSubmit = () => {
        addMethod({
            title: titleInput,
            input: inputInput,
            output: outputInput,
            what: whatInput,
            how: howInput,
            experiences: experiencesInput,
            research: researchInput,
        });
    };

    return (
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
            <Heading mb={6}>Add design method</Heading>
            <FormControl id="title">
                <Box>
                    <FormLabel>Title:</FormLabel>
                </Box>
                <Input
                    placeholder="Title"
                    variant="outline"
                    mb={3}
                    onChange={(event) => setTitleInput(event.target.value)}
                />
                <FormLabel
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    Input:
                    <Popover trigger="hover" placement="top">
                        <PopoverTrigger>
                            <InfoOutlineIcon></InfoOutlineIcon>
                        </PopoverTrigger>
                        <PopoverContent>
                            <InputText />
                        </PopoverContent>
                    </Popover>
                </FormLabel>
                <Input
                    placeholder="Input"
                    variant="outline"
                    mb={3}
                    onChange={(event) => setInputInput(event.target.value)}
                />
                <FormLabel
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    Output:
                    <Popover trigger="hover" placement="top">
                        <PopoverTrigger>
                            <InfoOutlineIcon></InfoOutlineIcon>
                        </PopoverTrigger>
                        <PopoverContent>
                            <OutputText />
                        </PopoverContent>
                    </Popover>
                </FormLabel>
                <Input
                    placeholder="Output"
                    variant="outline"
                    mb={3}
                    onChange={(event) => setOutputInput(event.target.value)}
                />
                <FormLabel
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    What it does:
                    <Popover trigger="hover" placement="top">
                        <PopoverTrigger>
                            <InfoOutlineIcon></InfoOutlineIcon>
                        </PopoverTrigger>
                        <PopoverContent>
                            <WhatText />
                        </PopoverContent>
                    </Popover>
                </FormLabel>
                <Textarea
                    placeholder="The HMW method creates a ..."
                    variant="outline"
                    onChange={(event) => setWhatInput(event.target.value)}
                ></Textarea>
                <FormLabel
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                >
                    How it works:
                    <Popover trigger="hover" placement="top">
                        <PopoverTrigger>
                            <InfoOutlineIcon></InfoOutlineIcon>
                        </PopoverTrigger>
                        <PopoverContent>
                            <HowText />
                        </PopoverContent>
                    </Popover>
                </FormLabel>
                <Textarea
                    placeholder="How the HMW method works is by ..."
                    variant="outline"
                    mb={3}
                    onChange={(event) => setHowInput(event.target.value)}
                ></Textarea>
                <FormLabel
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    Experiences:
                    <Popover trigger="hover" placement="top">
                        <PopoverTrigger>
                            <InfoOutlineIcon></InfoOutlineIcon>
                        </PopoverTrigger>
                        <PopoverContent>
                            <ExperiencesText />
                        </PopoverContent>
                    </Popover>
                </FormLabel>
                <Textarea
                    placeholder="I have found the HMW method to be useful when ..."
                    variant="outline"
                    mb={3}
                    onChange={(event) =>
                        setExperiencesInput(event.target.value)
                    }
                ></Textarea>
                <FormLabel
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    Useful links and reserach:
                    <Popover trigger="hover" placement="top">
                        <PopoverTrigger>
                            <InfoOutlineIcon></InfoOutlineIcon>
                        </PopoverTrigger>
                        <PopoverContent>
                            <ResearchText />
                        </PopoverContent>
                    </Popover>
                </FormLabel>
                <Input
                    placeholder="Links"
                    variant="outline"
                    mb={3}
                    onChange={(event) => setResearchInput(event.target.value)}
                />
                <Button onClick={handleSubmit}>Submit</Button>
            </FormControl>
        </Flex>
    );
};

export default MethodInput;
