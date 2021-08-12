import {  BrowserRouter as Router,  Route,  Switch} from 'react-router-dom';
import HomePage from './home-components/HomePage';
import './App.css';
import LoginPage from './login-components/LoginPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          
          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}
export default App;