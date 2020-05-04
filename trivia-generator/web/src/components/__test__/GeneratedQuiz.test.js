import React from "react";
import ReactDOM from "react-dom"
import GeneratedQuiz from '../GeneratedQuiz';


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<GeneratedQuiz />, div);
});
