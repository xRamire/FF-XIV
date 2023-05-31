import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll } from "framer-motion";
import './expansions.css';
import DebounceFunction from '../DebounceFunction'
import { expansions } from '../../expansions';

import MainImg from '../../assets/img/realmreborn-logo.png';

import ParticleBackground from 'react-particle-backgrounds';
import RealmRebornStory1 from './RealmReborn/Story/RealmRebornStory1';
import RealmRebornStory2 from './RealmReborn/Story/RealmRebornStory2';
import RealmRebornStory4 from './RealmReborn/Story/RealmRebornStory4';
import RealmRebornStory3 from './RealmReborn/Story/RealmRebornStory3';

import RealmRebornLocation1 from './RealmReborn/Location/RealmRebornLocation1';
import RealmRebornLocation2 from './RealmReborn/Location/RealmRebornLocation2';
import RealmRebornLocation3 from './RealmReborn/Location/RealmRebornLocation3';
import RealmRebornLocation4 from './RealmReborn/Location/RealmRebornLocation4';
import RealmRebornLocation5 from './RealmReborn/Location/RealmRebornLocation5';
import RealmRebornLocation6 from './RealmReborn/Location/RealmRebornLocation6';

import RealmRebornRace1 from './RealmReborn/Races/RealmRebornRace1';
import RealmRebornRace2 from './RealmReborn/Races/RealmRebornRace2';
import RealmRebornRace3 from './RealmReborn/Races/RealmRebornRace3';
import RealmRebornRace4 from './RealmReborn/Races/RealmRebornRace4';
import RealmRebornRace5 from './RealmReborn/Races/RealmRebornRace5';


const RealmReborn = () => {

    // Setting particles background
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

    // general animation parameters
    const blockAnimation = '200';
    const [isHoveringL, setIsHoveringL] = useState(false);
    const [isHoveringR, setIsHoveringR] = useState(false);

    const handleMouseEnterL = () => {
        setIsHoveringL(true);
    };
    const handleMouseLeaveL = () => {
        setIsHoveringL(false);
    };

    const handleMouseEnterR = () => {
        setIsHoveringR(true);
    };
    const handleMouseLeaveR = () => {
        setIsHoveringR(false);
    };

    // story animations
    const [currentStory, setCurrentStory] = useState(1);
    const [showStory, setShowStory] = useState(false);
    const storyPosts = 4;

    // location animations
    const [currentLocation, setCurrentLocation] = useState(1);
    const [showLocation, setShowLocation] = useState(false)
    const locationPosts = 6;

    // races animations
    const [currentRaces, setCurrentRaces] = useState(1);
    const [showRaces, setShowRaces] = useState(false)
    const racesPosts = 5;


    const [scrollPosition, setSrollPosition] = useState(1);

    const debouncedScrollPosition = useMemo(function () {

        function handleScroll() {

            window.addEventListener('wheel', function (e) {

                if (e.deltaY < 0) {
                    // console.log('scrolling up');
                    setSrollPosition(scrollPosition > 1 ? scrollPosition - 1 : 1)

                }
                else if (e.deltaY > 0) {
                    // console.log('scrolling down');
                    setSrollPosition(scrollPosition < racesPosts ? scrollPosition + 1 : racesPosts)

                }



            });
        };



        return DebounceFunction(handleScroll, 200)
    }, [scrollPosition])



    let setKey = 50


    const handleLastSectionBtn = () => {

        if (showStory && (currentStory > 1)) {
            setCurrentStory(currentStory - 1)
        }

        if (showLocation && (currentLocation > 1)) {
            setCurrentLocation(currentLocation - 1)
        }

    }

    const handleNextSectionBtn = () => {

        if (showStory && (currentStory < storyPosts)) {
            setCurrentStory(currentStory + 1)
        }

        if (showLocation && (currentLocation < locationPosts)) {
            setCurrentLocation(currentLocation + 1)
        }

    }


    return (
        <motion.div id='expansion-component' className='landing relative exp-realmreborn bg0 lock-scroll '
            initial={{ opacity: 0, transition: { duration: 0.5 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}>

            <div className="container auto bg1 unlock-scroll-small">
                <div className="content ">
                    <div className="particles">
                        <ParticleBackground settings={settings} />
                    </div>
                    <motion.div animate={{ opacity: showStory || showLocation || showRaces ? 0 : 1, transition: { duration: 0.5 } }} className="main-img auto padd-t-100">
                        <img src={MainImg} alt="Final Fantasy" />
                    </motion.div>
                    <motion.div
                        animate={{ y: showStory || showLocation || showRaces ? '-' + blockAnimation * 1.8 + '%' : 0, transition: { duration: 1 } }}
                        className='txt center categories padd-t-50'>
                        <motion.div onClick={() => { setShowStory(!showStory); setShowLocation(false); setShowRaces(false) }} animate={{ opacity: showStory ? 1 : null, backgroundPosition: showStory ? '100% 100%' : null, backgroundSize: showStory ? '100% 2px' : null }} className='category-btn'><h2>Story</h2></motion.div>
                        <motion.div onClick={() => { setShowLocation(!showLocation); setShowStory(false); setShowRaces(false) }} animate={{ opacity: showLocation ? 1 : null, backgroundPosition: showLocation ? '100% 100%' : null, backgroundSize: showLocation ? '100% 2px' : null }} className='category-btn'><h2>Locations</h2></motion.div>
                        <motion.div onClick={() => { setShowRaces(!showRaces); setShowStory(false); setShowLocation(false) }} animate={{ opacity: showRaces ? 1 : null, backgroundPosition: showRaces ? '100% 100%' : null, backgroundSize: showRaces ? '100% 2px' : null }} className='category-btn'><h2>Races</h2></motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ----STORY---- */}
            <motion.div
                initial={{ y: blockAnimation + '%', transition: { duration: 0 } }}
                animate={{ y: showStory ? '0' : '+' + blockAnimation + '%', transition: { duration: 1 } }}
                className="container auto bg2">
                <div className="content component-container auto">
                    <div onMouseEnter={handleMouseEnterL} onMouseLeave={handleMouseLeaveL} className="nomob carrousel-btn carrousel-btn-2" onClick={() => currentStory === 1 ? null : setCurrentStory(currentStory - 1)} style={currentStory === 1 ? { opacity: "0.5" } : { opacity: "1" }}>
                        <svg style={{ fill: isHoveringL && currentStory !== 1 ? '#0083ab' : null }} xmlns="http://www.w3.org/2000/svg" width="11" height="20"><path d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413" /></svg>
                    </div>
                    <AnimatePresence>
                        {currentStory === 1 ? <RealmRebornStory1 key={setKey + 1 + 1} /> : null}
                        {currentStory === 2 ? <RealmRebornStory2 key={setKey + 1 + 2} /> : null}
                        {currentStory === 3 ? <RealmRebornStory3 key={setKey + 1 + 3} /> : null}
                        {currentStory === 4 ? <RealmRebornStory4 key={setKey + 1 + 4} /> : null}
                    </AnimatePresence>


                    <div onMouseEnter={handleMouseEnterR} onMouseLeave={handleMouseLeaveR} className="nomob carrousel-btn carrousel-btn-1" onClick={() => currentStory === storyPosts ? null : setCurrentStory(currentStory + 1)} style={currentStory === storyPosts ? { opacity: "0.5" } : { opacity: "1" }} >
                        <svg style={{ fill: isHoveringR && currentStory !== storyPosts ? '#0083ab' : null }} xmlns="http://www.w3.org/2000/svg" width="11" height="20"><path d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413" /></svg>
                    </div>



                </div>
            </motion.div>

            {/* ----LOCATIONS---- */}
            <motion.div
                initial={{ y: blockAnimation + '%', transition: { duration: 0 } }}
                animate={{ y: showLocation ? '0' : blockAnimation + '%', transition: { duration: 1 } }}
                className="container auto bg2">
                <div className="content component-container auto">
                    <div onMouseEnter={handleMouseEnterL} onMouseLeave={handleMouseLeaveL} className="nomob carrousel-btn carrousel-btn-2" onClick={() => currentLocation === 1 ? null : setCurrentLocation(currentLocation - 1)} style={currentLocation === 1 ? { opacity: "0.5" } : { opacity: "1" }}>
                        <svg style={{ fill: isHoveringL && currentLocation !== 1 ? '#0083ab' : null }} xmlns="http://www.w3.org/2000/svg" width="11" height="20"><path d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413" /></svg>
                    </div>
                    <AnimatePresence>
                        {currentLocation === 1 ? <RealmRebornLocation1 key={setKey + 2 + 1} /> : null}
                        {currentLocation === 2 ? <RealmRebornLocation2 key={setKey + 2 + 2} /> : null}
                        {currentLocation === 3 ? <RealmRebornLocation3 key={setKey + 2 + 3} /> : null}
                        {currentLocation === 4 ? <RealmRebornLocation4 key={setKey + 2 + 4} /> : null}
                        {currentLocation === 5 ? <RealmRebornLocation5 key={setKey + 2 + 5} /> : null}
                        {currentLocation === 6 ? <RealmRebornLocation6 key={setKey + 2 + 6} /> : null}
                    </AnimatePresence>


                    <div onMouseEnter={handleMouseEnterR} onMouseLeave={handleMouseLeaveR} className="nomob carrousel-btn carrousel-btn-1" onClick={() => currentLocation === locationPosts ? null : setCurrentLocation(currentLocation + 1)} style={currentLocation === locationPosts ? { opacity: "0.5" } : { opacity: "1" }} >
                        <svg style={{ fill: isHoveringR && currentLocation !== locationPosts ? '#0083ab' : null }} xmlns="http://www.w3.org/2000/svg" width="11" height="20"><path d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413" /></svg>
                    </div>

                </div>
            </motion.div>

            {/* ----RACES---- */}
            <motion.div
                onWheel={debouncedScrollPosition}
                initial={{ y: blockAnimation + '%', transition: { duration: 0 } }}
                animate={{ y: showRaces ? '0' : blockAnimation + '%', transition: { duration: 1 } }}
                className="container auto bg2" id='races'>
                <div className="content story-races auto relative">
                    <AnimatePresence>
                        {scrollPosition > 0 ? <RealmRebornRace1 key={setKey + 3 + 1} /> : null}
                        {scrollPosition > 1 ? <RealmRebornRace2 key={setKey + 3 + 2} /> : null}
                        {scrollPosition > 2 ? <RealmRebornRace3 key={setKey + 3 + 3} /> : null}
                        {scrollPosition > 3 ? <RealmRebornRace4 key={setKey + 3 + 4} /> : null}
                        {scrollPosition > 4 ? <RealmRebornRace5 key={setKey + 3 + 5} /> : null}
                    </AnimatePresence>
                </div>
            </motion.div>


            <div className='nodesk'>
                <motion.div animate={{ display: showStory || showLocation ? 'flex' : 'none', transition: { duration: 0.3 } }} className="carrousel-btn-mob ">
                    <div className="carrousel-btn carrousel-btn-1" onClick={() => handleLastSectionBtn()} style={(showStory && (currentStory === 1)) || (showLocation && (currentLocation === 1)) ? { opacity: "0.5" } : { opacity: "1" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" /><polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" /></g></svg>
                    </div>
                    <div className="carrousel-btn carrousel-btn-2" onClick={() => handleNextSectionBtn()} style={(showStory && (currentStory === storyPosts)) || (showLocation && (currentLocation === locationPosts)) ? { opacity: "0.5" } : { opacity: "1" }} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" /><polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" /></g></svg>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default RealmReborn;
