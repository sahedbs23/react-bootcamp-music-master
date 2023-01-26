export const Tracks = ({tracks}) => {
   const playAudio = (previewUrl) => {
        const audio = new Audio();
        audio.play(previewUrl)
   }

    return (
        <div className="row">
            {tracks.map(track =>{
                const { id, name, album, external_urls} = track;

                return(
                    <div className="col-md-4" key={id}>
                        <img onClick={playAudio(external_urls?.spotify)} src={album.images[0].url} alt="Album Details" style={{
                            height: 200,
                            width:200,
                        }}/>
                        <p className="text-center">{name}</p>
                    </div>
                )
            })
            }
        </div>
    )
}