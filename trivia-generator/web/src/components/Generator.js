import React, { useState } from 'react';
import GeneratorForm from './GeneratorForm';
import GeneratorResults from './GeneratorResults';
import { useHistory } from 'react-router-dom';

const Generator = (props) => {
  const history = useHistory();
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
    props.setQuiz(questions);
    history.push('/quiz')
  }

  return (
    <div className="container mtb">
      <div className="row">
        <div className="col-lg-8">
          <div >
            <h6>Please fill the required fields and click Submit to generate questions. Summary of generated questions will be presented in the Summary section.</h6>
          </div>
          <GeneratorForm setQuestions={handleSetQuestions} shouldAllowSubmit={questions.length < 2} />
        </div>
        <div className="col-lg-4">
          <h4>Summary</h4>
          <div className="hline"></div>
          <GeneratorResults values={questions} removeQuestionBatch={handleRemoveQuestionBatch}/>
          { questions.length >= 1 &&
              <div>
                <div className="btn btn-sm btn-danger" onClick={clearAll}>Clear All</div>
                <div className="btn btn-sm btn-info" onClick={generateQuiz}>Generate Quiz</div>
              </div>
          }

          <div className="spacing"></div>
        </div>
      </div>
    </div>
  );
}

export default Generator;
