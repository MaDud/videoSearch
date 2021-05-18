import {useState} from 'react';


const Search = () => {

    const [search, setSearch] = useState('rock');

    const searchFor = (e:React.ChangeEvent<HTMLInputElement>) => {
        const searchValue= e.target.value;
        setSearch(searchValue)
    }

    const sendSearchRequest = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(search)
    }

    return (
        <form>
            <input type='text' value={search} onChange={searchFor}/>
            <button type='submit' onClick={sendSearchRequest}>search</button>
        </form>
    )
};

export default Search