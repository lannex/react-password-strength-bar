import React from 'react';
import { createRoot } from 'react-dom/client';

// components
import Home from './Home';

if (module.hot) {
  module.hot.accept();
}

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<Home />);
