import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProvider } from 'styled-react-modal'
import "./style/flexboxgrid.min.css";
import "./style/bootstrap.min.css";
import './style/index.css';
import App from './App';


ReactDOM.render(
  <>
   <ModalProvider>
    <App />
    </ModalProvider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
