import { createContext, useEffect, useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

const GET_METHODS = gql`
    query {
        methods {
            title
            input
            output
            what
            how
            experiences
            research
        }
    }
`;

const ADD_METHOD = gql`
    mutation ($mutation: MethodInput) {
        createMethod(method: $mutation) {
            title
            _id
        }
    }
`;

const MethodProvider = ({ children }) => {
    const [methods, setMethods] = useState([]);
    const { loading, data } = useQuery(GET_METHODS);
    const [addMethodToDatabase, addMethodData] = useMutation(ADD_METHOD, {
        refetchQueries: [GET_METHODS],
    });

    useEffect(() => {
        if (data != null) {
            setMethods(data.methods);
        }
    }, [data]);

    const addMethod = (method) => {
        addMethodToDatabase(method).then(() =>
            console.log("Method added successfully")
        );
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
