import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './components/Homepage/Homepage';
import RouteSelection from './components/RouteSelection/RouteSelection'
import LogOrsign from './components/Login-Signup/LogOrsign'
import Signup from './components/Login-Signup/Signup' 
import Profile from './components/Profile/Profile'
import TicketPage from './components/TicketPage/TicketPage'
import CancelPage from './components/CancelPage/CancelPage'
import CompletedPage from './components/CompletedTrip/CompletedTrip'
import UpcomingPage from './components/TicketPage/TicketPage'
import CancelledPage from './components/CancelledTicket/CancelledTicket'
import FeaturesPage from './components/ChangingFeatures/FeaturesPage'
import ServicePage from './components/ServicePage/ServicePage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={props => <Homepage {...props} />} />
          <Route path="/login" render={props => <LogOrsign {...props} />} />
          <Route path="/register" render={props => <Signup {...props} />} />
          <Route path="/routes" exact render={props => <RouteSelection {...props} />} />
          <Route path="/profile" exact render={props => <Profile {...props} />} />
          <Route path="/getTicket" exact render={props => <TicketPage {...props} />} />
          <Route path="/cancelPage" exact render={props => <CancelPage {...props} />} />
          <Route path="/completedPage" exact render={props => <CompletedPage {...props} />} />
          <Route path="/upcomingPage" exact render={props => <UpcomingPage {...props} />} />
          <Route path="/cancelledPage" exact render={props => <CancelledPage {...props} />} />
          <Route path="/featuresPage" exact render={props => <FeaturesPage {...props} />} />
          <Route path="/ServicePage" exact render ={props => <ServicePage {...props} />} />
        </Switch>

      </Router>
    </div>

  );
}

export default App;
