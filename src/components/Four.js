import React, { Component } from 'react';

class four extends Component {
    render() {
        return (
            <div>
            <div className="full-title">
              <div className="container">
                {/* Page Heading/Breadcrumbs */}
                <h1 className="mt-4 mb-3"> 404 </h1>
                <div className="breadcrumb-main">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">404</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* Page Content */}
            <div className="container">
              <div className="error-contents">
                <div className="error-img">
                  <img className="img-fluid" src="images/404.png" alt="" />
                </div>
                <h3>Oops! That page can’t be found.</h3>
                <p>We can’t find the page your are looking for. You can check out our <a href="#">Homepage</a>.</p>
                <a className="btn btn-primary" href="#"> Back To Homepage </a>
              </div>
              {/* /.jumbotron */}
            </div>
          </div>
          
        );
    }
}

export default four;