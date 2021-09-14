import './App.css';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import Posts from './components/Posts';
import PostsEdit from './components/PostsEdit';
import history from './history';

export default function App() {
  return (
    <div className="container pt-3">
      <h1 className="pb-3">Наши услуги</h1>
      <Router history={history}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/services" />
            </Route>
            <Route exact path="/ra-hw-11_2">
              <Redirect to="/services" />
            </Route>
            <Route path="/services" exact component={Posts} />
            <Route path="/services/:id" component={PostsEdit} />
          </Switch>
      </Router>
    </div>
  );
}