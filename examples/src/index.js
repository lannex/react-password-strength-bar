import React from 'react';
import ReactDOM from 'react-dom';

// components
import Home from './Home';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Home />, document.getElementById('root'));
