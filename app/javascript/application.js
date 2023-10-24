// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import Greeting from './components/greeting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/messages" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <>
      <App />
    </>
  </Provider>,
  document.getElementById('root')
);

