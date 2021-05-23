import {useContext} from 'react';
import {AppContext} from '../appContext';
import './activeVideo.css'

const ActiveVideo = () => {

    const {state, dispatch} = useContext(AppContext)

    return (
        <article className='videoBox'>
            <legend className='videoBox__legend'>Now you watch:</legend>
            <iframe src={`https://www.youtube.com/embed/${state.activeVideo}`} className='videoBox__video'>
            </iframe>
        </article>
    )
}

export default ActiveVideo