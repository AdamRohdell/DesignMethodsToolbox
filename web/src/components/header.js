import { Flex, Heading } from "@chakra-ui/layout";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Button } from "@chakra-ui/button";
import HomeDrawer from "./home-drawer";

const Header = () => {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <Flex
            as="nav"
            align="center"
            justify="left"
            wrap="wrap"
            padding={6}
            bg="teal.500"
            color="white"
            sx={{ position: "-webkit-sticky", position: "sticky", top: "0" }}
        >
            <Button onClick={onOpen} mr={30} backgroundColor="green">
                <HamburgerIcon />
            </Button>
            <Heading as="h1" size="lg">
                A Designers Toolbox
            </Heading>
            <HomeDrawer open={open} onClose={onClose} />
        </Flex>
    );
};

export default Header;
