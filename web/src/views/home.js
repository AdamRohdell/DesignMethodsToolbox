import { Button } from "@chakra-ui/button";
import { useContext, useState } from "react";
import DesignPhaseCard from "../components/designphase-card";
import HomeDrawer from "../components/home-drawer";
import { DesignPhaseContext } from "../contexts/designphase-context";
import { MethodContext } from "../contexts/method-context";
import DesignPhase from "./design-phase";
import { Flex } from "@chakra-ui/layout";
import { scroller } from "react-scroll";

const Home = () => {
    const { methods } = useContext(MethodContext);
    const { currentDesignPhase } = useContext(DesignPhaseContext);

    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const scrollToPhase = (phase) => {
        scroller.scrollTo("phase" + phase, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    return (
        <div>
            <Flex display="flex" justifyContent="space-between" mb={800}>
                <Button onClick={onOpen}></Button>
                <HomeDrawer open={open} onClose={onClose} />
                <DesignPhaseCard
                    title={"Design Phase One"}
                    description={
                        "Design phase one focuses on understanding affected users and gaining empathy for users of a specific context."
                    }
                    phase={1}
                    scrollFunction={scrollToPhase}
                />
                <DesignPhaseCard
                    title={"Design Phase Two"}
                    description={
                        "Design phase one focuses on understanding affected users and gaining empathy for users of a specific context."
                    }
                    phase={2}
                    scrollFunction={scrollToPhase}
                />
                <DesignPhaseCard
                    title={"Design Phase Three"}
                    description={
                        "Design phase one focuses on understanding affected users and gaining empathy for users of a specific context."
                    }
                    phase={3}
                    scrollFunction={scrollToPhase}
                />
                <DesignPhaseCard
                    title={"Design Phase Four"}
                    description={
                        "Design phase one focuses on understanding affected users and gaining empathy for users of a specific context."
                    }
                    phase={4}
                    scrollFunction={scrollToPhase}
                />
                <DesignPhaseCard
                    title={"Design Phase Five"}
                    description={
                        "Design phase one focuses on understanding affected users and gaining empathy for users of a specific context."
                    }
                    phase={5}
                    scrollFunction={scrollToPhase}
                />
            </Flex>
            <DesignPhase id="phase1" />
            <DesignPhase id="phase2" />
            <DesignPhase id="phase3" />
            <DesignPhase id="phase4" />
            <DesignPhase id="phase5" />
        </div>
    );
};

export default Home;

//title={"Design Phase One"}
//description={
//    "Design phase one focuses on understanding affected users and gaining empathy for users of a specific context."
//}
