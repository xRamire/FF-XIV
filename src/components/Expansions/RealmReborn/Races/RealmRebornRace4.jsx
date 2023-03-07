import React, { useState } from 'react';
import '../../expansions.css';
import './races.css';

import { motion } from "framer-motion";

import RaceImg1 from '../../../../assets/img/races/rr-race-4-img1.png';
import RaceImg2 from '../../../../assets/img/races/rr-race-4-img2.png';
import RaceImg3 from '../../../../assets/img/races/rr-race-4-img3.png';
import RaceImg4 from '../../../../assets/img/races/rr-race-4-img4.png';

const RealmRebornRace4 = ({ setKey }) => {

    const [raceType, setRaceType] = useState(1);

    let txt1 = `The Sea Wolves were once feared as brutal pirates of the north seas. Now, however, they are one of the principal races of Limsa Lominsa, most often seen employed as sailors or seamen. In keeping with the old ways, the Sea Wolves bear names taken from the ancient Roegadyn language.`
    let txt2 = `The Hellsguard are a small clan of Roegadyn that have carved out a home in the north of Abalathia's Spine. It is clan tradition to enter the mercenary trade; thus the Hellsguard took to giving themselves easily remembered names made up of words in the common tongue. They are a common sight on the streets of Ul'dah, earning a living as sellswords or bodyguards.`

    return (
        <motion.div className='contentComponent races-component'
            key={setKey}
            initial={{ y: '+100%', opacity: 1, transition: { duration: 0.7 } }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            exit={{ y: '+100%', opacity: 1, transition: { duration: 1 } }}
        >
            <article className='content-article race-article'>
                <div className='race-title'>
                    <div className='race-name'><h2>ROEGADYN</h2><span>4 of 5</span></div>
                    <div>
                        <p className='auto padd-0'>The Roegadyn are easily identified by their massive, muscular frames. They are descended from a maritime people that roamed the northern seas, though many of their ancestors turned their longships south to brave the crossing into Eorzean waters. Often considered a barbaric race, the fiercely competitive Roegadyn are also known for their compassion and unswerving loyalty. Many of the greatest warriors in history were born of Roegadyn stock.</p>
                    </div>
                </div>
                <div className='race-types'>
                    <div className='race-types-content'>
                        <motion.div animate={{ opacity: raceType === 1 ? 1 : 0.3, transition: { duration: 0.3 } }} className="race-img race-img1 nomob">
                            <img onClick={() => { setRaceType(1) }} style={{ 'width': '18vh' }} className='img1' src={RaceImg1} alt="SEA WOLVES" />
                            <img onClick={() => { setRaceType(1) }} style={{ 'width': '18vh' }} className='img2' src={RaceImg2} alt="SEA WOLVES" />
                        </motion.div>
                        <div className='races-fix-mobile'>
                            <div className='race-types-names auto'>
                                <motion.h3 onClick={() => { setRaceType(1) }} animate={{ opacity: raceType === 1 ? 1 : 0.5, transition: { duration: 0.3 } }}>SEA WOLVES</motion.h3>
                                <motion.h3 onClick={() => { setRaceType(2) }} animate={{ opacity: raceType === 2 ? 1 : 0.5, transition: { duration: 0.3 } }}>HELLSGUARD</motion.h3>
                            </div>
                            <div className='race-type-text'>
                                <motion.p className='padd-0' animate={{ opacity: raceType === 1 ? 1 : 0, transition: { duration: 0.3 } }}>
                                    {txt1}
                                </motion.p>
                                <motion.p className='padd-0' animate={{ opacity: raceType === 2 ? 1 : 0, transition: { duration: 0.3 } }}>
                                    {txt2}
                                </motion.p>
                            </div>

                        </div>
                        <motion.div animate={{ opacity: raceType === 2 ? 1 : 0.3, transition: { duration: 0.3 } }} className="race-img race-img2 nomob">
                            <img onClick={() => { setRaceType(2) }} style={{ 'width': '20vh' }} className='img1' src={RaceImg3} alt="HELLSGUARD" />
                            <img onClick={() => { setRaceType(2) }} style={{ 'width': '18vh' }} className='img2' src={RaceImg4} alt="HELLSGUARD" />
                        </motion.div>

                        {/* mobile */}
                        {/* <motion.div animate={{ display: raceType === 1 ? 'flex' : 'none', opacity: raceType === 1 ? 1 : 0, transition: { duration: 0.3 } }} className="race-img-mob nodesk">
                            <img onClick={() => { setRaceType(1) }} className='img1' src={RaceImg1} alt="SEA WOLVES" />
                            <img onClick={() => { setRaceType(1) }} className='img2' src={RaceImg2} alt="SEA WOLVES" />
                        </motion.div>
                        <motion.div animate={{ display: raceType === 2 ? 'flex' : 'none', opacity: raceType === 2 ? 1 : 0, transition: { duration: 0.3 } }} className="race-img-mob nodesk">
                            <img onClick={() => { setRaceType(2) }} className='img1' src={RaceImg3} alt="HELLSGUARD" />
                            <img onClick={() => { setRaceType(2) }} className='img2' src={RaceImg4} alt="HELLSGUARD" />
                        </motion.div> */}
                    </div>
                </div>
            </article>
        </motion.div>
    );
}

export default RealmRebornRace4;
