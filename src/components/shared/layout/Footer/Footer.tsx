import style from './Footer.module.scss';

import MagnifyingIcon from '../../icons/MagnifyingIcon/MagnifyingIcon';
import HomeIcon from '../../icons/HomeIcon/HomeIcon';

const Footer = () => {
    return (
        <footer>
          <div className={style.menuItem}>
              <div className={style.itemContent}>
                  <HomeIcon />
                  <span>Home</span>
              </div>
          </div>
          <div className={style.menuItem}>
              <div className={style.itemContent}>
                  <MagnifyingIcon />                  
                  <span>Search</span>
              </div>
          </div>
      </footer>
    );
};

export default Footer;
