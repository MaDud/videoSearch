export enum Types {
    SearchFor = 'SEARCH_FOR',
    ClickOn = 'CLICK_ON'
}

interface InitialStateI {
    searchValue: string
}

type SearchPayload = {
    [Types.SearchFor] : {
      searchValue: string
    },
    [Types.ClickOn] : undefined
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
        default:
            return state
    }
}

export default searchReducer