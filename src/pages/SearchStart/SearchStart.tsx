import useSearch from "../../hooks/useSearch";

const SearchStart = () => {
    const search = useSearch();

    return (
        <section className="start-search">
            <h2>Search Spotify</h2>
            <p>
                Find your favorite songs, artists, albums, podcasts and playlists.
            </p>
            <p>
                {search.searchTerm}
            </p>
        </section>
    );
}

export default SearchStart;