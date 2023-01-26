const Artist = ({artist}) => {
    const {name, followers, genres, images} = artist.items[0];
    return (
        <div>
            <h2>{name}</h2>
            <p>{followers.total} Followers</p>
            <p>{genres.join(', ')} </p>
            <img src={images[0] && images[0].url} alt="Artist profile" style={{
                height: 200,
                width: 200,
                borderRadius: 100,
                objectFit: 'cover'
            }}/>
        </div>
    )
}

export default Artist;