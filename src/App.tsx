import './App.scss';

import SideBar from './components/shared/layout/SideBar/SideBar';
import TopBar from './components/shared/layout/TopBar/TopBar';

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
        <footer>
          <div className="menu-item">
              <div>
                <svg height="24" role="img" width="24" viewBox="0 0 24 24" className="navigation-item">
                  <path d="M12 3l8 4.927V21h-5.647v-7.03H9.647V21H4V7.968L12 3zm0-1L3 7.506V22h7.579v-6.973h2.842V22H21V7.464L12 2z"></path>
                </svg>
                  <span>Home</span>
              </div>
          </div>
          <div className="menu-item">
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="magnifying-glass navigation-item"> {/* [ngClass]="class" */}
                    <path d="M16.39,16.31l4.4,5.15-.77.66L15.62,17a8.21,8.21,0,0,1-5.12,1.73A8.29,8.29,0,0,1,7.2,18a8.29,8.29,0,0,1-4.53-4.53,8.46,8.46,0,0,1,0-6.6A8.57,8.57,0,0,1,4.48,4.17,8.46,8.46,0,0,1,7.2,2.36a8.46,8.46,0,0,1,6.6,0,8.46,8.46,0,0,1,2.72,1.81,8.57,8.57,0,0,1,1.81,2.72,8.49,8.49,0,0,1,0,6.66,8.57,8.57,0,0,1-1.92,2.76ZM10.5,17.69a7.24,7.24,0,0,0,3.76-1A7.45,7.45,0,0,0,17,14a7.5,7.5,0,0,0,0-7.52A7.45,7.45,0,0,0,14.26,3.7a7.5,7.5,0,0,0-7.52,0A7.45,7.45,0,0,0,4,6.43,7.5,7.5,0,0,0,4,14a7.45,7.45,0,0,0,2.73,2.73A7.24,7.24,0,0,0,10.5,17.69Z" transform="translate(-2 -1.69)"></path>
                  </svg>
                  <span>Search</span>
              </div>
          </div>
      </footer>
      </main>
    </>
  );
}

export default App;
