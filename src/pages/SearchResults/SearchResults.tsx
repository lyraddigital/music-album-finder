import style from './SearchResults.module.scss';

import useSearch from '../../hooks/useSearch';
import Loader from '../../components/shared/Loader/Loader';
import SearchResult from "../../components/search/SearchResult/SearchResult";
import NoSearchResults from '../../components/search/NoSearchResults/NoSearchResults';

const SearchResults = (props: any) => {
    const searchTerm = props?.match?.params?.searchTerm;       
    const { searchItems, isLoading } = useSearch(searchTerm);

    if (isLoading) {
        return <Loader />;        
    }

    if (searchItems.length === 0) {
        return (
            <NoSearchResults searchTerm={searchTerm} />
        );
    }

    return (
        <ul className={style.songList}>
            {searchItems.map((s, index) => {
                return (
                    <li key={index}>
                        <SearchResult searchResult={s} />
                    </li>
                )
            })}
        </ul>
    );
}

export default SearchResults;