import { Button } from "@chakra-ui/button";
import { useContext, useState, useEffect } from "react";
import DesignPhaseCard from "../components/designphase-card";
import HomeDrawer from "../components/home-drawer";
import { DesignPhaseContext } from "../contexts/designphase-context";
import { MethodContext } from "../contexts/method-context";
import DesignPhase from "./design-phase";
import { Center, Flex, Heading } from "@chakra-ui/layout";
import { Text, Box } from "@chakra-ui/react";
import { Link, scroller } from "react-scroll";
import Header from "../components/header";
import Methods from "./methods";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Home = () => {
    const { methods } = useContext(MethodContext);
    const { currentDesignPhase } = useContext(DesignPhaseContext);

    const [open, setOpen] = useState(false);

    const [hover, setHover] = useState(false);
    const [linkStyle, setLinkStyle] = useState(null);

    useEffect(() => {
        if (hover) {
            setLinkStyle({ textDecoration: "underline", cursor: "pointer" });
        } else {
            setLinkStyle({});
        }
    }, [hover]);

    const toggleHover = () => {
        setHover(!hover);
    };

    return (
        <div>
            <Header />
            <Center>
                <Box>
                    <Text fontSize={"9xl"} mb={200} mt={200}>
                        A Designers Toolbox
                    </Text>
                    <Text
                        fontSize={"5xl"}
                        align="center"
                        style={{ color: "rgba(0,0,0, 0.5)" }}
                        onClick={() =>
                            scroller.scrollTo("methods", {
                                duration: 1000,
                                delay: 0,
                                smooth: "easeInOutQuart",
                                offset: -150,
                            })
                        }
                        onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover}
                    >
                        Browse methods
                    </Text>
                    <Center>
                        <ChevronDownIcon
                            align="center"
                            w={20}
                            h={20}
                            mb={600}
                            onClick={() =>
                                scroller.scrollTo("methods", {
                                    duration: 1000,
                                    delay: 0,
                                    smooth: "easeInOutQuart",
                                })
                            }
                            onMouseEnter={toggleHover}
                            onMouseLeave={toggleHover}
                            style={{ color: "rgba(0,0,0, 0.5)" }}
                        ></ChevronDownIcon>
                    </Center>
                </Box>
            </Center>

            <Methods id="methods1" />
        </div>
    );
};

export default Home;

//title={"Design Phase One"}
//description={
//    "Design phase one focuses on understanding affected users and gaining empathy for users of a specific context."
//}
