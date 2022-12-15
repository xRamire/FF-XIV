import React, { useState } from 'react';
import { motion } from "framer-motion"
import './expansions.css';

import MainImg from '../../assets/img/realmreborn-logo.png';
import StoryImg from '../../assets/img/rr-story-1.png'
import ParticleBackground from 'react-particle-backgrounds';


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
            color: '#3e5f8a',
            minSize: 2,
            maxSize: 5
        },
        velocity: {
            directionAngle: 0,
            directionAngleVariance: 360,
            minSpeed: 1,
            maxSpeed: 3
        },
        opacity: {
            minOpacity: 0,
            maxOpacity: 0.5,
            opacityTransitionTime: 3000
        }
    }


    const scrollToStory = () => {
        const element = document.getElementById('story');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // story animations

    const [currentStory, setCurrentStory] = useState(0)



    return (
        <motion.div id='realmReborn' className='landing relative'
            initial={{ opacity: 0, transition: { duration: 0.5 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}>

            <div className="container auto bg1">
                <div className="content">
                    <div className="particles">
                        <ParticleBackground settings={settings} />
                    </div>
                    <div class="main-img auto padd-t-100">
                        <img src={MainImg} alt="Final Fantasy" />
                    </div>
                    <div className='txt center categories padd-t-50'>
                        <div onClick={scrollToStory} className='category-btn'><h2>Story</h2></div>
                        <div className='category-btn'><h2>Locations</h2></div>
                        <div className='category-btn'><h2>Races</h2></div>
                    </div>
                </div>
            </div>

            <div className="container auto bg2" id='story'>
                <div className="content story auto">
                    <div className="carrousel-btn carrousel-btn-1" onClick={() => currentStory === 0 ? null : setCurrentStory(currentStory - 1)} style={currentStory === 0 ? { opacity: "0.5" } : { opacity: "1" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" /><polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" /></g></svg>
                    </div>
                    <motion.article
                        animate={{ opacity: currentStory > 0 ? 0 : 1, transition: { duration: 0.5 } }}
                        className='story-article padd-m-t-25'>
                        <h3>The Crystal's Call</h3>
                        <p>
                            Hydaelyn─a vibrant planet blessed by the Light of the Crystal.
                            <br /> <br />
                            Amid azure seas, encompassing the westernmost of the Three Great Continents, there lies a realm embraced by gods and forged by heroes. Her name...Eorzea.
                            <br /> <br />
                            It is here that your tale unfolds. Beckoned by the Mothercrystal─the source of all life─you must embark upon a quest to deliver the land from an eternity of Darkness.
                        </p>
                    </motion.article>
                    <motion.div className="story-img"
                        animate={{ opacity: currentStory > 0 ? 0 : 1, transition: { duration: 0.5 } }}>
                        <img src={StoryImg} alt="crystal call" />
                    </motion.div>
                    <div className="carrousel-btn carrousel-btn-2" onClick={() => setCurrentStory(currentStory + 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" /><polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" /></g></svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default RealmReborn;
