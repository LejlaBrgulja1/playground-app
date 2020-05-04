import React from "react";
import ReactDOM from "react-dom"
import GeneratorResults from '../GeneratorResults';


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<GeneratorResults />, div);
});
