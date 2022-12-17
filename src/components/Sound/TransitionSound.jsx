import React, { useState } from 'react';
import Sound from 'react-sound';
import PreludeDiscoveries from '../../assets/sounds/effecto-transicion.wav';


function TransitionSound({ handleSongLoading, handleSongPlaying, handleSongFinishedPlaying }) {

    const [isPlaying, setIsPlaying] = useState(true);

    return (

        <Sound
            url={PreludeDiscoveries}
            volume={50}
            playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            onLoading={handleSongLoading}
            onPlaying={handleSongPlaying}
            onFinishedPlaying={handleSongFinishedPlaying}
        />

    );
}

export default TransitionSound;