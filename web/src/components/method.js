import { Stack, Text, Container, Center } from "@chakra-ui/react";
import { useContext } from "react";
import { SourcesContext } from "../contexts/sources-context";

const Method = ({ method }) => {
    const { sources } = useContext(SourcesContext);

    const TextWithSources = (text) => {
        let words = text.split(" ");

        let regExp = /\(([^)]+)\)/;
        let matches = regExp.exec(text);
        let sourcesInText = [];
        let citations = [];

        let newText = text;
        let i = 0;

        //matches[1] contains the value between the parentheses
        const recursiveRegExCheck = () => {
            if (matches) {
                newText = newText.replace(matches[0], "");

                sourcesInText.push({ source: matches[0], index: i });

                matches = regExp.exec(newText);
                i++;
                recursiveRegExCheck();
            }
        };

        recursiveRegExCheck();

        if (!sources) return text;

        let realSources = [];

        sources.forEach((source) => {
            sourcesInText.forEach((word) => {
                if (word.source.includes(source.title)) {
                    citations.push(
                        <cite>
                            <a href={source.url}>
                                {source.author}, {source.year}
                            </a>
                        </cite>
                    );
                    realSources.push(word.source);
                }
            });
        });

        sourcesInText = sourcesInText.filter((x) =>
            realSources.includes(x.source)
        );

        sourcesInText.forEach((x, index) => {
            x.index = index;
        });

        if (sourcesInText.length <= 0) {
            //   console.log(text.split("\n"));
            return text;
        }

        let textParts = [];

        const recursiveFunction = (text, source) => {
            textParts.push(text.slice(0, text.indexOf(source.source)));

            if (source.index == sourcesInText.length - 1) {
                textParts.push(
                    text.slice(
                        text.indexOf(source.source) + source.source.length
                    )
                );
            }

            if (source.index != sourcesInText.length - 1) {
                recursiveFunction(
                    text.slice(
                        text.indexOf(source.source) + source.source.length
                    ),
                    sourcesInText[source.index + 1]
                );
            } else {
                return;
            }
        };

        recursiveFunction(text, sourcesInText[0]);

        let finalList = [];

        textParts = textParts.forEach((part, index) => {
            finalList.push(part);

            if (citations.length - 1 >= index) {
                finalList.push("(");
                finalList.push(citations[index]);
                finalList.push(")");
            }
        });

        /*   const f = (string) => {
            let x = string.replace("\\n", "");

            console.log(x);
            newFinalList.push(<p>{x}</p>);
        };

        const fix = (part) => {
            let x = part.split("\n");

            x.forEach((element) => f(element));
        };

        finalList.forEach((part) => {
            if (typeof part === "string" && part !== "(" && part !== ")") {
                fix(part);
            } else {
                newFinalList.push(part);
            }
        });*/

        return <p>{finalList}</p>;
    };

    return (
        <Center>
            <Container maxW="container.xl">
                <Stack spacing={"2"}>
                    <Text fontSize="3xl">{method.title}</Text>
                    <Text fontSize="2xl">Input</Text>
                    <p>{TextWithSources(method.input)}</p>
                    <Text fontSize="2xl">Output</Text>
                    <p>{TextWithSources(method.output)}</p>
                    <Text fontSize="2xl">What It Does</Text>
                    <p>{TextWithSources(method.what)}</p>
                    <Text fontSize="2xl">How It Works</Text>
                    <p style={{ whiteSpace: "pre-wrap" }}>
                        {TextWithSources(method.how)}
                    </p>
                    <Text fontSize="2xl">My Experiences</Text>
                    <p>{TextWithSources(method.experiences)}</p>
                    <Text fontSize="2xl">Useful Links / Research</Text>
                    <p>{TextWithSources(method.research)}</p>
                </Stack>
            </Container>
        </Center>
    );
};

export default Method;
