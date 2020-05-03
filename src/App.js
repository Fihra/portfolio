import React from 'react';
import Header from './components/Header';
import Navigate from './components/Navigate';
import Footer from './components/Footer';
import './App.css';

const App = (props) =>{
    return(
        <div className="App"> 
          <Header />
          <Navigate />
          <Footer />
        </div>
    )
  }

export default App;
