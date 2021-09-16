import "./App.css";
import { Flex } from "@chakra-ui/layout";

import MethodInput from "./components/method-input";
import Home from "./views/home";

function App() {
    return (
        <div className="App">
            <Flex
                height="100vh"
                alignItems="center"
                justifyContent="center"
                overflow="auto"
            >
                <Home />
            </Flex>
        </div>
    );
}

export default App;
