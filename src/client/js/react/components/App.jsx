import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '_components/Navbar/Navbar';
import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillUpdate() {
    console.log("Component is about ot update");
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <div className="App-wrapper">
        </div>
      </div>
      </Router>
    );
  }
}

export default App;