import React from 'react';
import searchReducer from './appReducers';

export interface InitialStateI {
    searchValue: string,
    videosList: {
        [id:string] : VideoI
    },
    activeVideo: string
}

export interface VideoI {
    thumbnail: string,
    title: string
}

const initialState:InitialStateI = {
    searchValue: 'rock',
    videosList: {},
    activeVideo: "26nsBfLXwSQ"
};

const AppContext = React.createContext<{
    state: InitialStateI;
    dispatch: React.Dispatch<any>;
  }>({
    state:initialState,
    dispatch: () => null
});

const AppProvider: React.FC = ({children}) => {
    const [state, dispatch] = React.useReducer(searchReducer, initialState);

    return (
        <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}