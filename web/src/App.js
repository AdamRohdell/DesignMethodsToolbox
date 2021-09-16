import "./App.css";
import { Flex } from "@chakra-ui/layout";

import MethodInput from "./components/method-input";
import Home from "./views/home";
import { animateScroll as scroll } from "react-scroll";

function App() {
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
