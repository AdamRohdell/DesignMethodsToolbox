import { createContext, useState } from "react";

const MethodProvider = ({ children }) => {
    const [methods, setMethods] = useState([]);

    const addMethod = (method) => {
        let temp = [...methods];
        temp.push(method);
        setMethods(temp);
    };

    return (
        <MethodContext.Provider
            value={{
                addMethod,
                methods,
            }}
        >
            {children}
        </MethodContext.Provider>
    );
};

export const MethodContext = createContext();
export default MethodProvider;
