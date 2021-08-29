const SearchResult = (props: any) => {
    const  { searchResult } = props;

    return (
        <article>
            <picture>
                <source srcSet={searchResult?.largeThumbnailSrc}>
                    {/* <img src={searchResult?.smallThumbnailSrc} alt="" /> */}
                </source>
            </picture>
            
            <div>
                <h3>{ searchResult?.title }</h3>
                <p className="artist">{ searchResult?.artist }</p>
            </div>
        </article>
    );
}

export default SearchResult;