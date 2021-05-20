import {useState, useContext} from 'react';
import {AppContext} from '../appContext';
import {Types} from '../appReducers';


const Search = () => {

    const [search, setSearch] = useState('rock');
    const {state, dispatch} = useContext(AppContext);

    const searchFor = (e:React.ChangeEvent<HTMLInputElement>) => {
        const searchValue= e.target.value;
        setSearch(searchValue)
    }

    const sendSearchRequest = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch({
            type: Types.SearchFor,
            payload: {
                searchValue: search
            }
        });
    }

    return (
        <form>
            <input type='text' value={search} onChange={searchFor}/>
            <button type='submit' onClick={sendSearchRequest}>search</button>
        </form>
    )
};

export default Search