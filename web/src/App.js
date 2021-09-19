import "./App.css";
import { Flex } from "@chakra-ui/layout";

import MethodInput from "./components/method-input";
import Home from "./views/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/addmethod">
                    <MethodInput />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
