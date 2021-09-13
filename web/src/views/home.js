import { Button } from "@chakra-ui/button";
import { useContext, useState } from "react";
import DesignPhaseCard from "../components/designphase-card";
import HomeDrawer from "../components/home-drawer";
import { DesignPhaseContext } from "../contexts/designphase-context";
import { MethodContext } from "../contexts/method-context";

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

    if (currentDesignPhase != null) {
    } else {
        return (
            <>
                <Button onClick={onOpen}>Open</Button>
                <HomeDrawer open={open} onClose={onClose} />

                <DesignPhaseCard
                    title={"Design Phase One"}
                    description={
                        "Design phase one focuses on understanding affected users and gaining empathy for users of a specific context."
                    }
                    phase={1}
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
            </>
        );
    }
};

export default Home;

//title={"Design Phase One"}
//description={
//    "Design phase one focuses on understanding affected users and gaining empathy for users of a specific context."
//}
