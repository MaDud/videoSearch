import {InitialStateI, VideoI} from './appContext'

export enum Types {
    SearchFor = 'SEARCH_FOR',
    VideosListInit = 'VIDEOS_LIST_INIT',
    VideosListSuccess = 'VIDEOS_LIST_SUCCESS',
    VideosListError = 'VIDEOS_LIST_ERROR'
}

type SearchPayload = {
    [Types.SearchFor] : {
        searchValue: string
    },
    [Types.VideosListSuccess]: {
        videosList: {
            [id: string] : VideoI
        }
    }
}

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        }
};

export type SearchActions = ActionMap<SearchPayload>[keyof ActionMap<SearchPayload>];

const searchReducer = (state:InitialStateI, action:SearchActions) => {
    switch (action.type) {
        case Types.SearchFor:
            return {
                ...state,
                searchValue: action.payload.searchValue
            };
        case Types.VideosListSuccess:
            return {
                ...state,
                videosList: action.payload.videosList
            }
        default:
            return state
    }
}

export default searchReducer