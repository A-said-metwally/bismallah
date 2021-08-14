import React, {Component  } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home'
import Masenger from './Masenger'

import './App.css';

class App extends Component{

  render(){
    console.log(this.props)
    return (
      <div className="App">        
        <BrowserRouter>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/Masenger" component={Masenger}/>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
