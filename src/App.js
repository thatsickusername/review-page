import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import './CSS/App.css'
import Mainbody from './Components/Mainbody';
import { Component } from 'react';

class App extends Component { 

  render(){
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Mainbody />
  
      </div>
    );
  }
}

export default App;
