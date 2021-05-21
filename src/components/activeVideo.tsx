import {useContext} from 'react';
import {AppContext} from '../appContext';

const ActiveVideo = () => {

    const {state, dispatch} = useContext(AppContext)

    return (
        <article>
            <iframe width="800" height="600"
                src={`https://www.youtube.com/embed/${state.activeVideo}`}>
            </iframe>
        </article>
    )
}

export default ActiveVideo