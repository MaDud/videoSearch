import { MouseEventHandler } from "react";
import './videoSnippet.css';

interface VideoSnippetI {
    id: string,
    src: string,
    title: string,
    activateVideo: (id:string) => void
}

const VideoSnippet = ({id, src, title, activateVideo}: VideoSnippetI) => {
    return (
        <figure id={id} onClick={() => activateVideo(id)} className='videoSnippet'>
            <img src={src} className='videoSnippet__img'/>
            <figcaption className='videoSnippet__description'>{title}</figcaption>
        </figure>
    )
};

export default VideoSnippet;