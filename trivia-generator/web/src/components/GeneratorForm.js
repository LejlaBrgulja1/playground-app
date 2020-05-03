import React from 'react';
import DropdownInput from './DropdownInput';
import { categories, difficulties, types, encodings } from '../stores/questions';
import getGeneratedQuestions from '../api/QuestionGeneratorApi';
import loader from '../assets/css/images/prettyPhoto/light_rounded/loader.gif';
import NumericInput from './NumericInput';

class GeneratorForm extends React.Component {
  defaultQuestionQuery = {
    numberOfQuestions: 1,
    category: null,
    difficulty: null,
    type: null,
    encoding: encodings[0].value
  };

  state = {
    errors: {},
    loading: false,
    questionQuery: this.defaultQuestionQuery
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    
    if (Object.keys(this.state.errors).every((e) => this.state.errors[e])) {
      this.setState({ loading: true });
      getGeneratedQuestions(this.state.questionQuery)
      .then((responseData) => {
          this.props.setQuestions({
            batchCategory: responseData.results[0].category,
            numberOfQuestions: responseData.results.length,
            questions: responseData.results
          });
      })
      .catch(err => { console.log(err)})
      .finally(() => { 
        this.setState({ loading: false, questionQuery: this.defaultQuestionQuery });
      });
    }
  }

  handleChange = ({ target }) => {
    this.setState({ questionQuery: { ...this.state.questionQuery, [target.name]: target.value } });
  }

  handleError = (e, isValidInput) => {
    this.setState({ errors: { ...this.state.errors, [e.target.name]: isValidInput } });
  }

  shouldDisable = () => {
    return this.state.loading || !this.props.shouldAllowSubmit;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <NumericInput 
            id="numberOfQs" 
            labelName="Number of Questions" 
            name="numberOfQuestions" 
            placeholder="Number of Questions" 
            min={1}
            max={50}
            value={this.state.questionQuery.numberOfQuestions}
            shouldDisable={this.shouldDisable}
            onBlur={this.handleChange}
            onError={this.handleError}
          />
          <DropdownInput 
            id="categoryId" 
            labelName="Select Category" 
            name="category"
            value={this.state.questionQuery.category}
            values={categories}
            shouldDisable={this.shouldDisable}
            onChange={this.handleChange}
          />
          <DropdownInput 
            id="difficultyId" 
            labelName="Select Difficulty" 
            name="difficulty" 
            value={this.state.questionQuery.difficulty}
            values={difficulties}
            shouldDisable={this.shouldDisable}
            onChange={this.handleChange}
          />
          <DropdownInput 
            id="typeId" 
            labelName="Select Type" 
            name="type" 
            value={this.state.questionQuery.type}
            values={types}
            shouldDisable={this.shouldDisable}
            onChange={this.handleChange}
          />
          <DropdownInput 
            id="encodingId" 
            labelName="Select Encoding" 
            name="encoding" 
            value={this.state.questionQuery.encoding}
            values={encodings}
            shouldDisable={this.shouldDisable}
            onChange={this.handleChange}
          />
          <div className="form-group">
            <button disabled={this.shouldDisable()} type="submit" className="btn btn-theme">Submit</button>
            { this.state.loading && <img src={loader}></img> }
          </div>
      </form>
    );
  }
}

export default GeneratorForm;
