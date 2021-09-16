import { useContext } from "react";
import { DesignPhaseContext } from "../contexts/designphase-context";

const DesignPhase = () => {
    const { currentDesignPhase } = useContext(DesignPhaseContext);

    return <a>Hello</a>;
};

export default DesignPhase;
