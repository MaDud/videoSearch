interface VideoSnippetI {
    id: string,
    src: string,
    title: string
}

const VideoSnippet = ({id, src, title}: VideoSnippetI) => {
    return (
        <figure id={id}>
            <img src={src}/>
            <figcaption>{title}</figcaption>
        </figure>
    )
};

export default VideoSnippet;