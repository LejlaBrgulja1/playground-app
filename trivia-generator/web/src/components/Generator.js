import React, { useState } from 'react';
import GeneratorForm from './GeneratorForm';
import GeneratorResults from './GeneratorResults';
import { postQuiz } from '../api/QuizApi';

const Generator = (props) => {
  const [questions, setQuestions] = useState([]);

  function handleSetQuestions(generatedQuestionsBatch) {
    setQuestions([...questions, generatedQuestionsBatch]);
  }

  function handleRemoveQuestionBatch(questionBatch) {
    const index = questions.indexOf(questionBatch);
    if (index > -1) {
      questions.splice(index, 1);
    }
    setQuestions([...questions]);
  }

  function clearAll () {
    setQuestions([]);
  }

  function generateQuiz() {
    postQuiz(questions)
    .then((responseData) => props.history.push('/quiz/' + responseData.quizId))
    .catch(err => console.log(err))
  }

  return (
    <div className="container mtb">
      <div className="row">
        <div className="col-lg-8">
          <div >
            <h6>Please fill the required fields and click Submit to generate questions. Summary of generated questions will be presented in the Summary section.</h6>
          </div>
          <GeneratorForm setQuestions={handleSetQuestions} shouldAllowSubmit={questions.length < 10} />
        </div>
        <div className="col-lg-4">
          <h4>Summary</h4>
          <div className="hline"></div>
          <GeneratorResults values={questions} removeQuestionBatch={handleRemoveQuestionBatch}/>
          { questions.length >= 1 &&
              <div style={{marginTop: "10px"}}>
                <div className="btn btn-md btn-info" onClick={generateQuiz} style={{marginRight: "5px"}}>Generate Quiz</div>
                <div className="btn btn-md btn-danger" onClick={clearAll} >Clear All</div>
              </div>
          }
          <div className="spacing"></div>
        </div>
      </div>
    </div>
  );
}

export default Generator;
