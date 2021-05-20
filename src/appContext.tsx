import React from 'react';
import searchReducer from './appReducers';

interface InitialStateI {
    searchValue: string
}

const initialState:InitialStateI = {
    searchValue: 'rock'
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