import SearchResult from "../../components/shared/search/SearchResult/SearchResult";

export interface Song {
    title: string;
    artist: string;
}

const SearchResults = (props: any) => {
    const searchTerm = props?.match?.params?.searchTerm;
    const results: Array<Song> = [{
        title: 'Rudix World',
        artist: 'Daryl Duckmanton'
    }];    
    const resultsEl = results.length === 0 ? (
        <p>
            No results found for &quot;{searchTerm}&quot;
        </p>
    ): results.map((s, index) => <SearchResult searchResult={s} key={index} />);   

    return (
        <section className="start-search">
            <h2>Search Results</h2>
            {resultsEl}
        </section>
    );
}

export default SearchResults;