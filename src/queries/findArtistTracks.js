import { ARTIST_BASE_URL } from "../configs/spotify";

const findArtistTracks = async artistId => {
    try{
    const tracks = await fetch(`${ARTIST_BASE_URL}/artist/${artistId}/top-tracks`)
    .then(response => response.json());
    return tracks?.tracks;
    }catch(e){
        console.log(e);
        return [];
    }
}

export default findArtistTracks;