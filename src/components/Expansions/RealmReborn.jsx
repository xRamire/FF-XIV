import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import './expansions.css';

import MainImg from '../../assets/img/realmreborn-logo.png';

import ParticleBackground from 'react-particle-backgrounds';
import RealmRebornStory1 from './RealmReborn/Story/RealmRebornStory1';
import RealmRebornStory4 from './RealmReborn/Story/RealmRebornStory4';
import RealmRebornStory3 from './RealmReborn/Story/RealmRebornStory3';
import RealmRebornStory2 from './RealmReborn/Story/RealmRebornStory2';

import { AnimatePresence } from 'framer-motion';


const RealmReborn = () => {

    const settings = {
        canvas: {
            canvasFillSpace: true,
            width: 200,
            height: 200,
            useBouncyWalls: false,
        },
        particle: {
            particleCount: 50,
            color: '#fff',
            minSize: 3,
            maxSize: 6
        },
        velocity: {
            // directionAngle: 90,
            // directionAngleVariance: 360,
            directionAngle: 0,
            directionAngleVariance: 0,
            minSpeed: 0.2,
            maxSpeed: 0.5
        },
        opacity: {
            minOpacity: 0,
            maxOpacity: 0.8,
            opacityTransitionTime: 15000
        }
    }


    const scrollToStory = () => {
        // const element = document.getElementById('story');
        // if (element) {
        //     // 👇 Will scroll smoothly to the top of the next section
        //     element.scrollIntoView({ behavior: 'smooth' });
        // }

    };

    // story animations

    const [currentStory, setCurrentStory] = useState(1);

    const storyPosts = 4


    const [showStory, setShowStory] = useState(false)


    return (
        <motion.div id='expansion-component' className='landing relative exp-realmreborn bg0'
            initial={{ opacity: 0, transition: { duration: 0.5 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}>

            <div className="container auto bg1">
                <div className="content">
                    <div className="particles">
                        <ParticleBackground settings={settings} />
                    </div>
                    <motion.div animate={{ opacity: showStory ? 0 : 1, transition: { duration: 0.5 } }} class="main-img auto padd-t-100">
                        <img src={MainImg} alt="Final Fantasy" />
                    </motion.div>
                    <motion.div
                        animate={{ y: showStory ? '-350px' : 0, transition: { duration: 1 } }}
                        className='txt center categories padd-t-50'>
                        <div onClick={() => setShowStory(!showStory)} className='category-btn'><h2>Story</h2></div>
                        <div className='category-btn'><h2>Locations</h2></div>
                        <div className='category-btn'><h2>Races</h2></div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ y: '+100%', zIndex: -1, transition: { duration: 0 } }}
                animate={{ y: showStory ? '0' : '+100%', transition: { duration: 1 } }}
                className="container auto bg2" id='story'>
                <div className="content story auto">
                    <div className="nomob carrousel-btn carrousel-btn-1" onClick={() => currentStory === 1 ? null : setCurrentStory(currentStory - 1)} style={currentStory === 1 ? { opacity: "0.5" } : { opacity: "1" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" /><polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" /></g></svg>
                    </div>
                    <AnimatePresence>
                        {currentStory === 1 ? <RealmRebornStory1 /> : null}
                        {currentStory === 2 ? <RealmRebornStory2 /> : null}
                        {currentStory === 3 ? <RealmRebornStory3 /> : null}
                        {currentStory === 4 ? <RealmRebornStory4 /> : null}
                    </AnimatePresence>


                    <div className="nomob carrousel-btn carrousel-btn-2" onClick={() => currentStory === storyPosts ? null : setCurrentStory(currentStory + 1)} style={currentStory === storyPosts ? { opacity: "0.5" } : { opacity: "1" }} storyImgCheck>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" /><polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" /></g></svg>
                    </div>

                    <div className="carrousel-btn-mob nodesk">
                        <div className="carrousel-btn carrousel-btn-1" onClick={() => currentStory === 1 ? null : setCurrentStory(currentStory - 1)} style={currentStory === 1 ? { opacity: "0.5" } : { opacity: "1" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" /><polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" /></g></svg>
                        </div>
                        <div className="carrousel-btn carrousel-btn-2" onClick={() => currentStory === storyPosts ? null : setCurrentStory(currentStory + 1)} style={currentStory === storyPosts ? { opacity: "0.5" } : { opacity: "1" }} storyImgCheck>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" /><polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" /></g></svg>
                        </div>
                    </div>

                </div>
            </motion.div>
        </motion.div>
    );
}

export default RealmReborn;
