import React, { PureComponent } from 'react';

// Styles
import './generic-page.css';

class NotFound extends PureComponent {

  handleRandomClick = () => {
    const random = Math.round(Math.random() * (10 - 1) + 1);
    this.props.history.push(`/videos?id=${random}`);
  };

  handleForwardClick = () => {
    this.props.history.goForward();
  };

  handleBackClick = () => {
    this.props.history.goBack();
  };

  render() {
    return(
      <div className="page-not-found">
        <h1>Error 404 Not Found</h1>
        <button className="Button" onClick={this.handleBackClick}>Back</button>
        <button className="Button" onClick={this.handleRandomClick}>Random video</button>
        <button className="Button" onClick={this.handleForwardClick}>Next</button>
      </div>
    );
  };
};

export default NotFound;