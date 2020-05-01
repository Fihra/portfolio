import React from 'react';
import Header from './components/Header';
import Navigate from './components/Navigate';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      
        <div className="App"> 
          <Header />
          <Router>
            <Navigate />
          </Router>
        </div>
    )
  }
}

export default App;
