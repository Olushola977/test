import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Header from './partials/header/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/notification" render={() => (
            <div>NOTIFICATION</div>
            )} />
            <Route exact path="/profile" render={() => (
            <div>PROFILE</div>
            )} />
            <Route exact path="/wallet-balance" render={() => (
              <div>WALLET BALANCE</div>
            )} />
            <Route exact path="/token-balance" render={() => (
            <div>TOKEN BALANCE</div>
            )} />
            <Route exact path="/naira-balance" render={() => (
            <div>NAIRA BALANCE</div>
            )} />
          </main>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
