import useSearch from "../../hooks/useSearch";

const SearchResults = () => {
    const search = useSearch();

    return (
        <section className="start-search">
            <h2>Search Results</h2>
            <p>
                No results found for "{search.searchTerm}"
            </p>
        </section>
    );
}

export default SearchResults;