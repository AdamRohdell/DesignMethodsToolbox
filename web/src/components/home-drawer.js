import { Button } from "@chakra-ui/button";
import { List } from "@chakra-ui/layout";
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    DrawerFooter,
    DrawerCloseButton,
    DrawerHeader,
} from "@chakra-ui/modal";
import { useContext, useState } from "react";
import { MethodContext } from "../contexts/method-context";
import DrawerMethod from "./drawer-method";

const HomeDrawer = ({ onClose, open }) => {
    const { methods } = useContext(MethodContext);

    return (
        <Drawer isOpen={open} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Find a method</DrawerHeader>

                <DrawerBody>
                    <List>
                        {methods.map((method) => (
                            <DrawerMethod method={method} />
                        ))}
                    </List>
                </DrawerBody>
                <DrawerFooter>
                    <Button variant="outline" onClick={onClose}>
                        Close
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default HomeDrawer;
