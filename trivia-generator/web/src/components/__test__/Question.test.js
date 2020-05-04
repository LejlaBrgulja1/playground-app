import React from "react";
import ReactDOM from "react-dom"

import Question from '../Question';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Question />, div);
});

it("renders question correctly", () => {
    const questionDetails = { 
        question: 'Question?', 
        incorrect_answers: ['A', 'B', 'C'], 
        correct_answer: ['D'] 
    };

    const questionComponent = render(<Question questionDetails={questionDetails}></Question>);
    expect(questionComponent.getByTestId('questionDetails').textContent).toBe(questionDetails.question);

    expect(questionComponent.getByTestId('questionsForm').textContent)
    .toContain(...questionDetails.incorrect_answers, questionDetails.correct_answer);
});

it("renders undefined question correctly", () => {
    const component  = render(<Question></Question>);
    expect(component.container.textContent).toBe('');
});
