import "./App.css";
import { Flex } from "@chakra-ui/layout";

import MethodInput from "./components/MethodInput";

function App() {
    return (
        <div className="App">
            <Flex height="100vh" alignItems="center" justifyContent="center">
                <MethodInput />
            </Flex>
        </div>
    );
}

export default App;
