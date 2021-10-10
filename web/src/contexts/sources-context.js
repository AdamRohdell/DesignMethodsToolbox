import { createContext, useEffect, useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

const SourcesProvider = ({ children }) => {
    const [currentDesignPhase, setCurrentDesignPhase] = useState(null);
    const [sources, setSources] = useState([]);

    const GET_SOURCES = gql`
        query {
            sources {
                title
                author
                year
                url
            }
        }
    `;

    const { loading, data } = useQuery(GET_SOURCES);

    useEffect(() => {
        if (data != null) {
            setSources(data.sources);
        }
    }, [data]);

    return (
        <SourcesContext.Provider
            value={{
                sources,
            }}
        >
            {children}
        </SourcesContext.Provider>
    );
};

export const SourcesContext = createContext();
export default SourcesProvider;
