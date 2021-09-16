import { Button } from "@chakra-ui/button";
import { useContext, useState, useRef } from "react";
import DesignPhaseCard from "../components/designphase-card";
import HomeDrawer from "../components/home-drawer";
import { DesignPhaseContext } from "../contexts/designphase-context";
import { MethodContext } from "../contexts/method-context";
import DesignPhase from "./design-phase";
import { Flex } from "@chakra-ui/layout";
import { Link, Element, scroller, animationScroll } from "react-scroll";
import { animateScroll } from "react-scroll/modules";

const Home = () => {
    const { methods } = useContext(MethodContext);
    const phaseOneRef = useRef(null);
    const { currentDesignPhase } = useContext(DesignPhaseContext);

    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const ScrollToPhaseOne = () => {
        console.log("memes");

        animateScroll.scrollTo("memes");
    };

    return (
        <div>
            <Flex
                display="flex"
                justifyContent="space-between"
                mb={800}
                mt={800}
            >
                <Button onClick={onOpen}></Button>
                <Link
                    to="phase1"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-10}
                >
                    Memes
                </Link>

                <HomeDrawer open={open} onClose={onClose} />
                <DesignPhaseCard
                    title={"Design Phase One"}
                    description={
                        "Design phase one focuses on understanding affected users and gaining empathy for users of a specific context."
                    }
                    phase={1}
                    scrollFunction={ScrollToPhaseOne}
                />
                <DesignPhaseCard
                    title={"Design Phase Two"}
                    description={
                        "Design phase one focuses on understanding affected users and gaining empathy for users of a specific context."
                    }
                    phase={2}
                />
                <DesignPhaseCard
                    title={"Design Phase Three"}
                    description={
                        "Design phase one focuses on understanding affected users and gaining empathy for users of a specific context."
                    }
                    phase={3}
                />
                <DesignPhaseCard
                    title={"Design Phase Four"}
                    description={
                        "Design phase one focuses on understanding affected users and gaining empathy for users of a specific context."
                    }
                    phase={4}
                />
                <DesignPhaseCard
                    title={"Design Phase Five"}
                    description={
                        "Design phase one focuses on understanding affected users and gaining empathy for users of a specific context."
                    }
                    phase={5}
                />
            </Flex>
            <div id="phase1">
                <DesignPhase />;
            </div>
        </div>
    );
};

export default Home;

//title={"Design Phase One"}
//description={
//    "Design phase one focuses on understanding affected users and gaining empathy for users of a specific context."
//}
