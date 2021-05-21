import { MouseEventHandler } from "react";

interface VideoSnippetI {
    id: string,
    src: string,
    title: string,
    activateVideo: (id:string) => void
}

const VideoSnippet = ({id, src, title, activateVideo}: VideoSnippetI) => {
    return (
        <figure id={id} onClick={() => activateVideo(id)}>
            <img src={src}/>
            <figcaption>{title}</figcaption>
        </figure>
    )
};

export default VideoSnippet;