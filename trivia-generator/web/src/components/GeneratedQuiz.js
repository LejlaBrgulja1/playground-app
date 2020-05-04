import React, { Fragment } from 'react';
import Question from './Question';
import { add } from '../utils/CollectionUtils';
import { getQuiz } from '../api/QuizApi';

class GeneratedQuiz extends React.Component {
    results = new Map();
    state = {
        isCompletedQuiz: false,
        correctAnswers: 0,
        incorrectAnswers: 0,
        unansweredAnswers: 0,
        quiz: null
    }

    componentDidMount() {
        if (this.props.match?.params?.id) {
            getQuiz(this.props.match.params.id)
            .then((responseData) => {
                this.setState({
                    quiz: responseData,
                    totalQuestions: responseData.map(x => x.numberOfQuestions).reduce(add, 0)
                })
            })
            .catch(err => console.log(err))
        }
    }

    handleChange = (question, isCorrect) => this.results.set(question, isCorrect);

    submitAnswers = () => {
        let correctAnswers = 0;
        let incorrectAnswers = 0;
        for (let [value] of this.results) {
            if (value) correctAnswers++;
            else incorrectAnswers++;
        }

        this.setState({ 
            isCompletedQuiz: true,
            correctAnswers: correctAnswers,
            incorrectAnswers: incorrectAnswers,
            unansweredAnswers: this.state.totalQuestions - correctAnswers - incorrectAnswers 
        })
    }

    render() {
        if (!this.state.quiz) {
            return (
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <h6>The quiz with provided id does not exist.</h6>
                    </div>
                </div>
            );
        }
        return (
            <div className="container mtb">
                <div className="row">
                    <div className="col-lg-10">
                    { this.state.quiz.length >= 1 && this.state.quiz.map(questionBatch => 
                        <div className="card bg-light mb-3" >
                            <div className="card-header">{questionBatch.batchCategory}</div>
                            <div className="card-body">
                                { questionBatch.questions.map(question => 
                                    <Question disabled={this.state.isCompletedQuiz} questionDetails={question} onChange={this.handleChange} />
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
    )}
}

export default GeneratedQuiz;
