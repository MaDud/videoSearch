import {MouseEventHandler, useContext, useEffect} from 'react';
import {AppContext} from '../appContext';
import {Types} from '../appReducers';
import VideoSnippet from './videoSnippet';
import {VideoI} from '../appContext';

const API_KEY = 'AIzaSyAQVzEiUREcjdKY_pbBrCGXHKL6ABzqBGM';

interface VideosListI {
    [id:string]: VideoI
}

interface VideoResponseI {
    etag: string,
    id: {
        videoId: string,
    }
    snippet: {
        thumbnails: {
            [id:string]: {
                url: string
            }
        },
        title: string
    }
}

const VideosList = () => {

    const {state, dispatch} = useContext(AppContext);

    useEffect( () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${state.searchValue}&key=${API_KEY}`)
        .then(response => response.ok ? response.json() : console.log('error'))
        .then(response => {
            console.log(response.items)
            const data:VideoResponseI[] = response.items;
            let videosList:VideosListI = {};

            data.forEach(video => {
                videosList[video.id.videoId] = {
                    thumbnail: video.snippet.thumbnails['default'].url,
                    title: video.snippet.title
                }
            })

            dispatch( {
                type: Types.VideosListSuccess,
                payload: {
                    videosList: videosList
                }
            })
        })
        .catch(error => console.log('error 2'))
    }, [state.searchValue, dispatch]);

    const changeActiveVideo = (id:string) => {
        console.log(id)
        dispatch( {
            type: Types.SetActiveVideo,
            payload: {
                activeVideo: id
            }
        })
    }

    const list = Object.keys(state.videosList)
        .filter( videoId => {
            return videoId !== state.activeVideo})
        .map(videoId => {
            return <VideoSnippet key={videoId} 
                id={videoId} 
                src={state.videosList[videoId].thumbnail} 
                title={state.videosList[videoId].title}
                activateVideo={changeActiveVideo} />
    })

    return (
        <aside>
            <h2>Video List</h2>
            {list}
        </aside>
    )
};

export default VideosList