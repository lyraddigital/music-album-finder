import style from './SearchResults.module.scss';
import loadingImage from '../../assets/images/loading.svg';

import useSearch from '../../hooks/useSearch';
import SearchResult from "../../components/shared/search/SearchResult/SearchResult";

const SearchResults = (props: any) => {
    const searchTerm = props?.match?.params?.searchTerm;       
    const { searchItems, isLoading } = useSearch(searchTerm);

    // Show loading image when loading on the page. Otherwise we show the results.
    if (isLoading) {
        return (
            <div className={style.loadingDiv}>
                <img src={loadingImage} alt="" />
            </div>
        );
    }

    const resultsEl = searchItems.length === 0 ? (
        <p>
            No results found for &quot;{searchTerm}&quot;
        </p>
    ): searchItems.map((s, index) => {
        return(
            <li key={index}>
                <SearchResult searchResult={s} />
            </li>
        )
    });   

    return (
        <ul className={style.songList}>
            {resultsEl}
        </ul>
    );
}

export default SearchResults;