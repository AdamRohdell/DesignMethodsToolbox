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
import { useState } from "react";

const HomeDrawer = ({ onClose, open }) => {
    return (
        <Drawer isOpen={open} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Find a method</DrawerHeader>

                <DrawerBody>
                    <List></List>
                    <a>Add methods here</a>
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
