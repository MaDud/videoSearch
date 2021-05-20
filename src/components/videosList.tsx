import {useContext, useEffect} from 'react';
import {AppContext} from '../appContext';
import VideoSnippet from './videoSnippet';

const API_KEY = 'AIzaSyAQVzEiUREcjdKY_pbBrCGXHKL6ABzqBGM';

const VideosList = () => {

    const {state, dispatch} = useContext(AppContext);

    useEffect( () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${state.searchValue}&key=${API_KEY}`)
        .then(response => response.ok ? response.json() : console.log('error'))
        .then(response => console.log(response))
        .catch(error => console.log('error 2'))
    }, [state.searchValue])

    return (
        <aside>
            <VideoSnippet id={'1'} src={'1'} title={'1'} />
            <VideoSnippet id={'2'} src={'2'} title={'2'} />
        </aside>
    )
};

export default VideosList