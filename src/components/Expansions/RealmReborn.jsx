import React from 'react';
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
                    <article className='story-article padd-m-t-25'>
                        <h3>The Crystal's Call</h3>
                        <p>
                            Hydaelyn─a vibrant planet blessed by the Light of the Crystal.
                            <br /> <br />
                            Amid azure seas, encompassing the westernmost of the Three Great Continents, there lies a realm embraced by gods and forged by heroes. Her name...Eorzea.
                            <br /> <br />
                            It is here that your tale unfolds. Beckoned by the Mothercrystal─the source of all life─you must embark upon a quest to deliver the land from an eternity of Darkness.
                        </p>
                    </article>
                    <div className="story-img">
                        <img src={StoryImg} alt="crystal call" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default RealmReborn;
