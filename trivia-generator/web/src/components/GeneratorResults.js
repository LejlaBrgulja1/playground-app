import React from 'react';

class GeneratorResults extends React.Component {

  render () {
    if (this.props.values.length) {
      return (
        <div>
          <span>Category</span><span className="pull-right"># of questions</span>
          { this.props.values.map(questionBatch =>
            <div>
              <div className="btn btn-sm btn-theme">{questionBatch.batchCategory}</div>
              <span className="badge badge-theme pull-right text-light" style={{marginTop: "10px"}}>{questionBatch.numberOfQuestions}</span>
              <div className="btn btn-sm btn-danger" onClick={() => this.props.removeQuestionBatch(questionBatch)}>Delete</div>
            </div>
            )
          }
        </div>
      );
    }
    return <div>There are no generated questions.</div>;
  }
}

export default GeneratorResults;
