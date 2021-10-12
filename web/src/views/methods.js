import { useContext } from "react";
import { Stack, Divider } from "@chakra-ui/react";
import Method from "../components/method";
import { MethodContext } from "../contexts/method-context";

const Methods = () => {
    const { methods } = useContext(MethodContext);

    return (
        <Stack spacing={"15vh"} id="methods">
            {methods.map((method) => {
                return (
                    <>
                        <Method method={method}></Method>
                        <Divider />
                    </>
                );
            })}
        </Stack>
    );

    return methods.map((method) => {
        return <Method method={method}></Method>;
    });
};

export default Methods;
