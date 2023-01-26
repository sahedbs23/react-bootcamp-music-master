import React, {useState} from 'react';

import findArtistTracks from '../queries/findArtistTracks';
import findArtist from '../queries/findArtist';

import Search from './Search';
import Artist from "./Artist";
import { Tracks } from './Tracks';

const App = () => {
    const [artist, setArtist] = useState(null);
    const [tracks, setTracks] = useState([]);

    const searchArtist = async search => {
        const data = await findArtist(search);
        setArtist(data);

        if (data?.total > 0) {
            const tracks = await findArtistTracks(data?.items[0].id);
            setTracks(tracks);
        }
    }

    return (
        <div className='text-center'>
            <h2>Music Master </h2>
            <Search searchArtist={searchArtist} />
            {artist && <Artist artist={artist}/>}
            {tracks.length > 0 && <Tracks tracks={tracks} />}
        </div>
    )
}

export default App;
