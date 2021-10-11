import { useContext } from "react";
import Method from "../components/method";
import { MethodContext } from "../contexts/method-context";

const Methods = () => {
    const { methods } = useContext(MethodContext);

    return methods.map((method) => {
        return <Method method={method}></Method>;
    });
};

export default Methods;
