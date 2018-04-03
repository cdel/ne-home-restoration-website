import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '_routes/appRoutes';
import Navbar from '_components/Navbar/Navbar';
import Footer from '_components/Footer/Footer';
import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    console.log("Application has mounted on the browser!");
  }
  render() {
    return (
        <div className="App">
          <Navbar />
          <div className="App-wrapper">
            <Switch>
              {routes.map((route, index) => (
                <Route key={`${route.path ? route.path : `404Page`}-${index}`} {...route} />
              ))}
            </Switch>
          </div>
          <Footer />
        </div>
    );
  }
}

export default App;