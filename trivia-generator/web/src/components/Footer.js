import React from 'react';

function Footer() {
  return (
    <div id="footerwrap">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h4>About</h4>
          <div className="hline-w"></div>
          <p>Trivia Generator is a simple app for generating trivia questions, powered by <a href="https://opentdb.com">Open Trivia Database</a>.</p>
        </div>
        <div className="col-lg-4">
          <h4>Social Links</h4>
          <div className="hline-w"></div>
          <p>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-tumblr"></i></a>
          </p>
        </div>
        <div className="col-lg-4">
          <h4>Our Bunker</h4>
          <div className="hline-w"></div>
          <p>
            Burger Bar,<br/> Sarajevo,<br/> Bosnia and Herzegovina.<br/>
          </p>
        </div>

      </div>
    </div>
  </div>

  );
}

export default Footer;





