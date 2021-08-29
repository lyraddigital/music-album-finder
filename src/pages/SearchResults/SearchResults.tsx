import { useEffect } from "react";

export interface Song {
    title: string;
}


const SearchResults = (props: any) => {
    const searchTerm = props?.match?.params?.searchTerm;
    const results: Array<Song> = [{
        title: 'Rudix World'
    }];    
    const resultsEl = results.length === 0 ? (
        <p>
            No results found for &quot;{searchTerm}&quot;
        </p>
    ): results.map(s => (
        <p>
            {s.title}
        </p>
    ));

    useEffect(() => {

    }, [searchTerm]);    

    return (
        <section className="start-search">
            <h2>Search Results</h2>
            {resultsEl}
        </section>
    );
}

export default SearchResults;