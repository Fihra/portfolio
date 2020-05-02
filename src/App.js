import React from 'react';
import Header from './components/Header';
import Navigate from './components/Navigate';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component{
  render(){
    return(
      
        <div className="App"> 
          <Header />
          <Navigate />
          <Footer />
        </div>
    )
  }
}

export default App;
