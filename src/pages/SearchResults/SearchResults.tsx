const SearchResults = (props: any) => {
    return (
        <section className="start-search">
            <h2>Search Results</h2>
            <p>
                No results found for "{props?.match?.params?.searchTerm}"
            </p>
        </section>
    );
}

export default SearchResults;