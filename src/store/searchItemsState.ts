import { atom } from "recoil";

import { SearchResultItem } from "../models";

export interface SearchItemsState {
    searchItems: Array<SearchResultItem>;
    isLoading: boolean;
}

export const searchItemsState = atom<SearchItemsState>({
    key: 'searchItemsState',
    default: { searchItems: [], isLoading: true }
});

export const searchItems = (searchTerm: string) => {
    
}