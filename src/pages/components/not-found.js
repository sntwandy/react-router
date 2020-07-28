import React, { PureComponent } from 'react';

// Styles
import './generic-page.css';

class NotFound extends PureComponent {
  render() {
    return(
      <div className="page-not-found">
        <h1>Error 404 Not Found</h1>
      </div>
    );
  };
};

export default NotFound;