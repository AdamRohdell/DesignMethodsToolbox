import { Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const DrawerMethod = ({ method }) => {
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
        >
            {method.title}
        </Text>
    );
};

export default DrawerMethod;
