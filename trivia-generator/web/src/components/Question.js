import React, { Fragment } from 'react';
import { shuffle } from '../api/CollectionUtils';

class BooleanQuestion extends React.Component {
    handleChange = (answer) => this.props.onChange(this.props.question.question, this.props.question.correct_answer === answer);
    state = {
     answers: shuffle([...this.props.question.incorrect_answers, this.props.question.correct_answer])   
    }

    render() {
        return (
        <Fragment>
            <h6>{this.props.question.question}</h6>
            <form>
                { this.state.answers.map(answer => 
                    <div>
                        <label>
                            <input 
                            disabled={this.props.disabled}
                            onChange={() => this.handleChange(answer)} 
                            type="radio" 
                            id={answer} 
                            name="answer" 
                            value={answer} /> 
                            {answer}
                        </label>
                    </div>
                ) }
            </form>
        </Fragment>
    );}
}

export default BooleanQuestion;