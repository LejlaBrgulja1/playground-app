import React from 'react';

function GeneratorResults() {
  return (
    <div>
    <div>
        <span>Category</span><span className="pull-right"># of questions</span>
    </div>
    {/* <div *ngFor="let questionBatch of batch; let i = index;">
        <div className="btn btn-theme">{{questionBatch.batchCategory}}</div>
        <span className="badge badge-theme pull-right" style="margin-top: 10px;">{{questionBatch.numberOfQuestions}}</span>
    </div> */}
    </div>
  );
}

export default GeneratorResults;
