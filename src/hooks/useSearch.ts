import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { SearchItemsState, searchItemsState } from "../store/searchItemsState";

const useSearch = (searchTerm: string): SearchItemsState => {
    const [searchItemState, setSearchItemState] = useRecoilState<SearchItemsState>(searchItemsState);

    useEffect(() => {
        setSearchItemState({ searchItems: [], isLoading: true })

        setTimeout(() => {
            setSearchItemState({ 
                searchItems: [{
                    title: 'Daryl is the best',
                    artist: 'Daryl Duck',
                    thumbnailSrc: 'https://i.ytimg.com/vi/bNH6DyDPeIc/maxresdefault.jpg'
                }],
                isLoading: false 
            });
        }, 500);
    }, [searchTerm, setSearchItemState]);

    return searchItemState;
};

export default useSearch;