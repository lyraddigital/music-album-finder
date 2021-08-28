import useSearch from '../../../../hooks/useSearch';
import MagnifyingIcon from '../../icons/MagnifyingIcon/MagnifyingIcon';
import XIcon from '../../icons/XIcon/XIcon';
import style from './SearchForm.module.scss';

const SearchForm = () => {
    const search = useSearch();
    const searchTerm = search.searchTerm;
    const clearButtonClass = `${style.tabletClearButton} ${searchTerm.length > 0 ? style.active: undefined}`;

    const performSearch = (e: any) => {
        search.performSearch(e.target.value)
    };

    const clearSearchTerm = () => {
        search.clearSearchTerm();
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

export default SearchForm;
