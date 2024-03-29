import React, { useState, useEffect } from 'react';
import Sound from 'react-sound';
import PreludeDiscoveries from '../../assets/sounds/ff-XIV-prelude-discoveries.mp3';


function BgSound({ coverHidden }) {

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (coverHidden) {
            setIsPlaying(true);
        }
    }, [coverHidden]);

    return (
        <div>
            <div onClick={() => setIsPlaying(!isPlaying)} className='sound-icon'>
                <svg fill={!isPlaying ? '#555' : '#fff'} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 94.98" xmlSpace="preserve"><g><path className="st0" d="M5.06,20.78h20.67c0.43,0,0.79,0.35,0.79,0.79v44.72c0,0.43-0.35,0.79-0.79,0.79H5.05 C2.27,67.07,0,64.8,0,62.02V25.85C0,23.06,2.28,20.78,5.06,20.78L5.06,20.78z M109.14,1.06c5.01,7.08,8.82,15.04,11.14,23.57 c2.24,8.22,3.1,16.97,2.33,25.94c-0.7,8.2-2.7,15.99-5.79,23.18c-2.59,6.03-5.95,11.64-9.93,16.7c-0.62,0.82-1.25,1.63-1.9,2.43 l-0.05-0.05c-0.31,0.36-0.62,0.72-0.94,1.07l-0.94,1.06l-0.92-1.08l-3.73-4.38l-0.69-0.81l0.7-0.8c4.54-5.23,8.3-11.2,11.06-17.73 c2.66-6.29,4.39-13.11,4.99-20.29c0.68-7.98-0.08-15.75-2.06-23.05c-1.83-6.75-4.7-13.11-8.44-18.86l-0.02-0.02 c-0.68-0.99-1.39-1.97-2.13-2.92l0.08-0.07l-0.05-0.07l0.97-0.72l0.71-0.53l2.71-2.19l0.09,0.12l1.05-0.78l1.02-0.76L109.14,1.06 L109.14,1.06z M108.58,4.66c-0.25-0.38-0.49-0.75-0.75-1.12l-0.03,0.02C108.07,3.92,108.33,4.29,108.58,4.66L108.58,4.66z M92.75,12.19c3.68,5.28,6.47,11.21,8.17,17.55c1.64,6.12,2.26,12.61,1.7,19.27c-0.48,5.68-1.8,11.11-3.83,16.17 c-2.1,5.23-4.95,10.05-8.4,14.32l-0.94,1.16l-0.97-1.14l-4.72-3.29l-0.66-0.77l0.62-0.8c2.91-3.72,6.01-7.87,7.77-12.35 c1.7-4.33,2.1-8.99,2.51-13.88c0.5-5.86-0.04-11.55-1.47-16.9c-1.34-5.04-3.48-9.8-6.27-14.11c-0.37-0.53-0.75-1.06-1.15-1.58 l0.05-0.04l-0.46-0.66l0.96-0.71L91,11.9l1.03-0.76L92.75,12.19L92.75,12.19z M89.84,15.13l-0.31-0.47l-0.02,0.01L89.84,15.13 L89.84,15.13z M31,19.96C43.04,13.35,55.09,6.74,67.13,0.14c1.16-0.63,2.4,1.08,2.4,2.4v82.04c0,1.39-1.32,3.21-2.53,2.53L31,66.8 c-0.23-0.13-0.48-0.21-0.48-0.48V20.44C30.52,20.17,30.77,20.09,31,19.96L31,19.96z" /></g></svg>
            </div>
            <Sound
                url={PreludeDiscoveries}
                volume={40}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            />
        </div>

    );
}

export default BgSound;