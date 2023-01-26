import { ARTIST_BASE_URL } from "../configs/spotify"

const findArtist = async search => {
    try{
    const artists = await fetch(`${ARTIST_BASE_URL}/artist/${search}`)
    .then(response => response.json());

    return artists?.artists;
    }catch(e){
        console.log(e);
        return null;
    }
}

export default findArtist;