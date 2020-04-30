import React from 'react';
import GeneratorForm from './GeneratorForm';
import GeneratorResults from './GeneratorResults';

function Generator() {
  return (
    <div className="container mtb">
        <div className="row">
            <div className="col-lg-8">
                <div >
                    <h6>Please fill the required fields and click Submit to generate questions. Summary of generated questions will be presented in the Summary section.</h6>
                </div>
                <GeneratorForm />
            </div>
            <div className="col-lg-4">
                <h4>Summary</h4>
                <div className="hline"></div>
                    <GeneratorResults />	
                <div className="spacing"></div>	 		
            </div>
        </div>
    </div>
  );
}

export default Generator;
