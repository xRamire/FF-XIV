import React, { useState } from 'react';
import Sound from 'react-sound';
import PreludeDiscoveries from '../../assets/sounds/effecto-transicion.wav';


function TransitionSound({ }) {

    const [isPlaying, setIsPlaying] = useState(true);

    return (

        <Sound
            url={PreludeDiscoveries}
            volume={40}
            playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        />

    );
}

export default TransitionSound;