import { Stack, Text, Container } from "@chakra-ui/react";

const Method = ({ method }) => {
    return (
        <Container maxW="container.xl">
            <Stack spacing={"2"}>
                <Text fontSize="3xl">{method.title}</Text>
                <Text fontSize="2xl">Input</Text>
                <p>{method.input}</p>
                <Text fontSize="2xl">Output</Text>
                <p>{method.output}</p>
                <Text fontSize="2xl">What It Does</Text>
                <p>{method.what}</p>
                <Text fontSize="2xl">How It Works</Text>
                <p>{method.how}</p>
                <Text fontSize="2xl">My Experiences</Text>
                <p>{method.experiences}</p>
                <Text fontSize="2xl">Useful Links / Research</Text>
                <p>{method.research}</p>
            </Stack>
        </Container>
    );
};

export default Method;
