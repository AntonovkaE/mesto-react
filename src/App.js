
import closeIcon from './img/CloseIcon.svg';
import React from 'react';
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from  './PopupWithForm'
import PopupImage from "./ImagePopup";

function App() {
  return (
      <div className="root">
        <div className="page">
          <Header />
          <Main />
          <Footer />
          <PopupWithForm />
          <PopupImage />
        </div>
        <template id="card" />
      </div>
  );
}

export default App;
