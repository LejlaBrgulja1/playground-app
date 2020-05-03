import React, { Fragment } from 'react';
import BooleanQuestion from './Question';
import { add } from '../api/CollectionUtils';

class Quiz extends React.Component {
    results = new Map();
    state = {
        isCompletedQuiz: false,
        correctAnswers: 0,
        incorrectAnswers: 0,
        unansweredAnswers: 0,
        totalQuestions: this.props.quiz.map(x => x.numberOfQuestions).reduce(add, 0)
    }

    constructor(props) {
        super(props);
    }

    handleChange = (question, isCorrect) => {
        this.results.set(question, isCorrect);
    }

    submitAnswers = () => {
        for (let [key, value] of this.results) {
            if (value) this.state.correctAnswers++;
            else this.state.incorrectAnswers++;
        }

        this.setState({ 
            isCompletedQuiz: true,
            correctAnswers: this.state.correctAnswers,
            incorrectAnswers: this.state.incorrectAnswers,
            unansweredAnswers: this.state.totalQuestions - this.state.correctAnswers - this.state.incorrectAnswers 
        })
    }

    render() {
        return (
            <div className="container mtb">
                <div className="row">
                    <div className="col-lg-10">
                    { this.props.quiz.length >= 1 && this.props.quiz.map(questionBatch => 
                        <div className="card bg-light mb-3" >
                            <div className="card-header">{questionBatch.batchCategory}</div>
                            <div className="card-body">
                                { questionBatch.questions.map(question => 
                                <BooleanQuestion disabled={this.state.isCompletedQuiz} question={question} onChange={this.handleChange} />
                                )}
                            </div>
                        </div>
                    ) }
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10">
                        <button className="btn btn-sm btn-info" disabled={this.state.isCompletedQuiz} onClick={this.submitAnswers}>Submit Answers</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10">
                    { this.state.isCompletedQuiz && 
                        <Fragment>
                            <div>Total Questions: {this.state.totalQuestions}</div> 
                            <div>Unanswered Questions: {this.state.unansweredAnswers}</div> 
                            <div>Correct Answers: {this.state.correctAnswers}</div> 
                            <div>Incorrect Answers: {this.state.incorrectAnswers}</div> 
                        </Fragment>
                    }
                    </div>
                </div>
            </div>
    );
    }
}

export default Quiz;
