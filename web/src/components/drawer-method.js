import { Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link, scroller } from "react-scroll";

const DrawerMethod = ({ method, onClose }) => {
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
        <Text
            fontSize={"2xl"}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            style={linkStyle}
            onClick={() => {
                scroller.scrollTo(method.title, {
                    duration: 1000,
                    delay: 0,
                    smooth: "easeInOutQuart",
                    offset: -150,
                });
                onClose();
            }}
        >
            {method.title}
        </Text>
    );
};

export default DrawerMethod;
