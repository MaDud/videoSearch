import {useState, useContext} from 'react';
import {AppContext} from '../appContext';
import {Types} from '../appReducers';
import './search.css';


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
        <form className='form'>
            <input type='text' value={search} onChange={searchFor} className='form__input'/>
            <button type='submit' onClick={sendSearchRequest} className='form__submit'>search</button>
        </form>
    )
};

export default Search