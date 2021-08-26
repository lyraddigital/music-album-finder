import './App.scss';

import SideBar from './components/shared/layout/SideBar/SideBar';
import TopBar from './components/shared/layout/TopBar/TopBar';
import Footer from './components/shared/layout/Footer/Footer';

function App() {
  return (
    <>
      <SideBar />
      <main>
        <TopBar />
        <section className="start-search">
          <h2>Search Spotify</h2>
          <p>
              Find your favorite songs, artists, albums, podcasts and playlists.
          </p>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
