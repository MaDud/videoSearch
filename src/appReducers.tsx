const searchReducer = (state, action) => {
    switch (action.type) {
        case 'LOOK_FOR':
            return {
                ...state,
                searchValue: action.payload.searchValue
            };
        default:
            return state
    }
}

export default searchReducer