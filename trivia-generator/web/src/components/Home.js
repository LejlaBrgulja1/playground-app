import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id="headerwrap">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-lg-offset-2">
                    <h6>Have you ever had a problem with coming up with questions for a trivia?</h6>
                    <h6>Or questions you come up with are not interesting, not challenging or simply lame?</h6>
                    <h1>Trivia Generator</h1>
                    <h3>We got your back.</h3>
                </div>
                <div className="col-lg-8 col-lg-offset-2">
                    <a href="/generator" className="btn btn-theme">Try it out</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
