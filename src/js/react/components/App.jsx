import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ActivePage from '_components/Pages/Active';
import CompletedPage from '_components/Pages/Completed';
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
          <Route exact path="/" component={ActivePage} />
          <Route path="/completed" component={CompletedPage} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;