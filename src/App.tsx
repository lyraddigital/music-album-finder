import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './App.scss';

import SideBar from './components/shared/layout/SideBar/SideBar';
import TopBar from './components/shared/layout/TopBar/TopBar';
import SearchStart from './pages/SearchStart/SearchStart';
import SearchResults from './pages/SearchResults/SearchResults';

function App() {
  return (
    <Router>
      <SideBar />
      <main>
          <TopBar />
          <Switch>
            <Route path="/search/results/:searchTerm" component={SearchResults} />
            <Route path="/search/start" component={SearchStart} />
            <Route path="/">
              <Redirect to="/search/start" />
            </Route>
          </Switch>      
      </main>
    </Router>
  );
}

export default App;
