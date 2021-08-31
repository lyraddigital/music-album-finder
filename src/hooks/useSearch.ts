import { useEffect, useState } from "react";
import { SearchResultItem } from "../models";

const useSearch = (searchTerm: string): { searchItems: Array<SearchResultItem>, isLoading: boolean } => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchItems, setSearchItems] = useState<Array<SearchResultItem>>([]);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setSearchItems([{
                title: 'Rudix World',
                artist: 'Daryl Duckmanton',
                thumbnailSrc: 'https://i.ytimg.com/vi/bNH6DyDPeIc/maxresdefault.jpg'
            }]);
        }, 500);
    }, [searchTerm]);

    return ({
        isLoading,
        searchItems 
    });
};

export default useSearch;