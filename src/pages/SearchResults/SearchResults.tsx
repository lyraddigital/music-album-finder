import { useRecoilValue } from 'recoil';
import style from './SearchResults.module.scss';

import { searchItemsBySearchTerm } from '../../store/searchItemsState';
import SearchResult from "../../components/search/SearchResult/SearchResult";
import NoSearchResults from '../../components/search/NoSearchResults/NoSearchResults';

const SearchResults = () => {
    const { searchItems } = useRecoilValue(searchItemsBySearchTerm);

    if (searchItems.length === 0) {
        return (
            <NoSearchResults searchTerm={''} />
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