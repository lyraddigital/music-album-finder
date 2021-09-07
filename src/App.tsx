import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import SideBar from './components/shared/layout/SideBar/SideBar';
import TopBar from './components/shared/layout/TopBar/TopBar';
import Loader from './components/shared/Loader/Loader';
import SearchStart from './pages/SearchStart/SearchStart';
import SearchResults from './pages/SearchResults/SearchResults';

import './App.scss';

function App() {
  return (
    <Router>
      <SideBar />
      <main>
          <TopBar />
          <Switch>
            <Route path="/search/results/:searchTerm">
              <Suspense fallback={<Loader />}>
                <SearchResults />
              </Suspense>
            </Route>
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
