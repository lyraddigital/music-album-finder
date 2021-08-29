import { ChangeEvent, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import MagnifyingIcon from '../../icons/MagnifyingIcon/MagnifyingIcon';
import XIcon from '../../icons/XIcon/XIcon';
import style from './SearchForm.module.scss';

const SEARCH_RESULTS_PAGE_URL = '/search/results/';
const SEARCH_START_PAGE_URL = '/search/start/';

const SearchForm = (props: RouteComponentProps) => {
    const { history, location } = props;
    const isSearchResultsPage = location?.pathname?.startsWith(SEARCH_RESULTS_PAGE_URL);
    const searchUrl =  isSearchResultsPage ? location?.pathname.replace(SEARCH_RESULTS_PAGE_URL, ''): '';
    const [searchTerm, setSearchTerm] = useState<string>(searchUrl);
    const clearButtonClass = `${style.tabletClearButton} ${searchTerm.length > 0 ? style.active: undefined}`;

    const performSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target?.value;

        setSearchTerm(newSearchTerm);
        
        if (isSearchResultsPage) {
            history.replace(`${newSearchTerm}`);
        } else {
            history.push(`${SEARCH_RESULTS_PAGE_URL}${newSearchTerm}`); 
        }
    };

    const clearSearchTerm = () => {
        setSearchTerm('');

        history.push(SEARCH_START_PAGE_URL);
    };

    return (
        <form id={style.searchForm}>
            <div className={style.searchField}>
                <div className={style.tabletMagnifyingGlass}>
                    <MagnifyingIcon />
                </div>
                <input type="text" value={searchTerm} placeholder="Search" onChange={performSearch} />
                <button type="button" className={clearButtonClass} onClick={clearSearchTerm}>
                    <XIcon />
                </button>
            </div>
            <button type="button" className={style.mobileClearButton} onClick={clearSearchTerm}>
                <XIcon isWhite={true} />
            </button>
        </form>
    );
};

export default withRouter(SearchForm);
