import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';

import SideBar from './components/shared/layout/SideBar/SideBar';
import TopBar from './components/shared/layout/TopBar/TopBar';
import Footer from './components/shared/layout/Footer/Footer';
import SearchStart from './pages/SearchStart/SearchStart';

function App() {
  return (
    <>
      <SideBar />
      <main>
        <TopBar />
        <Router>
          <Switch>
            <Route path="/" component={SearchStart} />
          </Switch>
        </Router>
        <Footer />
      </main>
    </>
  );
}

export default App;
