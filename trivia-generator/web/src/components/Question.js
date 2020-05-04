import React, { Fragment } from 'react';
import { shuffle } from '../utils/CollectionUtils';

class Question extends React.Component {
    state = {
     answers: this.props.questionDetails ? shuffle([...this.props.questionDetails.incorrect_answers, this.props.questionDetails.correct_answer]) : []
    }

    render() {
        const { questionDetails, disabled, onChange } = this.props;
        
        if (!questionDetails) {
            return <></>
        }

        const handleChange = (answer) => onChange(questionDetails.question, questionDetails.correct_answer === answer);

        return ( 
            <Fragment>
                <h6 data-testid="questionDetails">{ questionDetails.question }</h6>
                <form data-testid="questionsForm">
                    { this.state.answers.map(answer => 
                        <div key={answer}>
                            <label>
                                <input 
                                disabled={disabled}
                                onChange={() => handleChange(answer)} 
                                type="radio" 
                                id={answer} 
                                name="answer" 
                                value={answer} /> 
                                {answer}
                            </label>
                        </div>
                    )}
                </form>
            </Fragment>
        );
    }
}

export default Question;