import * as React from "react";
import { render } from "react-dom";
import HomePage from "./pages/Home"

function App() {
    return (
        <div>
            <HomePage />
        </div>
    );
};

render(<App />, document.getElementById("app"));