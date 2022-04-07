import * as React from "react";
import { render } from "react-dom";
import { Hello } from "./components/Hello";

const App = () => {
    return (
        <div>
            <p>Pagepro best react team in the world</p>
            <Hello name="Robert" />
        </div>
    );
};

render(<App />, document.getElementById("app"));