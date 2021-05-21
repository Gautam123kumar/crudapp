
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Countact from './components/pages/Contact'
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="py-4">
          <Navbar />
          <Switch>
            <Route exact path ="/" component={Home} />
            <Route exact path ="/about" component={About} />
            <Route exact path ="/contact" component={Countact} />
            <Route exact path="/users/add" component={AddUser} />
            <Route exact path="/user/edit/:id" component={EditUser} />
            <Route exact path="/user/:id" component={User} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
