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
import { useState } from "react";
import InputText from "./info-texts/InputText";
import ExperiencesText from "./info-texts/ExperiencesText";
import ResearchText from "./info-texts/ResearchText";
import HowText from "./info-texts/HowText";
import OutputText from "./info-texts/OutputText";
import WhatText from "./info-texts/WhatText";

const MethodInput = () => {
    const [hoverInput, setHoverInput] = useState(false);

    return (
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
            <Heading mb={6}>Add design method</Heading>
            <FormControl id="title">
                <Box>
                    <FormLabel>Title:</FormLabel>
                </Box>
                <Input placeholder="Title" variant="outline" mb={3} />
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
                <Input placeholder="Input" variant="outline" mb={3} />
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
                <Input placeholder="Output" variant="outline" mb={3} />
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
                <Input placeholder="Links" variant="outline" mb={3} />
                <Button>Submit</Button>
            </FormControl>
        </Flex>
    );
};

export default MethodInput;
