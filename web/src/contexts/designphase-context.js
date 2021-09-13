import { createContext, useState } from "react";

const DesignPhaseProvider = ({ children }) => {
    const [currentDesignPhase, setCurrentDesignPhase] = useState(null);

    return (
        <DesignPhaseContext.Provider
            value={{
                setCurrentDesignPhase,
                currentDesignPhase,
            }}
        >
            {children}
        </DesignPhaseContext.Provider>
    );
};

export const DesignPhaseContext = createContext();
export default DesignPhaseProvider;
