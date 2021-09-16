import { useContext } from "react";
import { DesignPhaseContext } from "../contexts/designphase-context";

const DesignPhase = ({ id }) => {
    const { currentDesignPhase } = useContext(DesignPhaseContext);

    return (
        <div id={id}>
            <a>Hello</a>
        </div>
    );
};

export default DesignPhase;
