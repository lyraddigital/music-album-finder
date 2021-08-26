import style from './TopBar.module.scss';

import HistoryNavigationButtons from "../HistoryNavigationButtons/HistoryNavigationButtons";
import SearchForm from "../SearchForm/SearchForm";

const TopBar = () => {
    return (
        <header className={style.header}>
            <HistoryNavigationButtons backButtonDisabled={true} forwardButtonDisabled={true} />
            <SearchForm />
        </header>
    );
};

export default TopBar;
