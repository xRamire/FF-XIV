import React from 'react';
import { motion } from "framer-motion"
import './expansions.css';

import MainImg from '../../assets/img/realmreborn-logo.png';
import ParticleBackground from 'react-particle-backgrounds'


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
                        <div className='category-btn'><h2>Story</h2></div>
                        <div className='category-btn'><h2>Locations</h2></div>
                        <div className='category-btn'><h2>Races</h2></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default RealmReborn;
