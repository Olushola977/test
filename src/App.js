import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Footer from './partials/footer/Footer';
import Header from './partials/header/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <main style={{
            marginBottom: "50px"
          }}>
            <Route exact path="/" component={Home} />
            <Route exact path="/notification" render={() => (
            <div>NOTIFICATION</div>
            )} />
            <Route exact path="/wallet" render={() => (
            <div>WALLET</div>
            )} />
            <Route exact path="/activity" render={() => (
              <div>ACTIVITY</div>
            )} />
            <Route exact path="/market" render={() => (
            <div>MARKET</div>
            )} />
            <Route exact path="/earn" render={() => (
            <div>EARN</div>
            )} />
          </main>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
