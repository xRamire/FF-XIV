import React, { useState } from 'react';
import '../../expansions.css';
import './races.css';

import { motion } from "framer-motion";

import RaceImg1 from '../../../../assets/img/races/rr-race-5-img1.png';
import RaceImg2 from '../../../../assets/img/races/rr-race-5-img2.png';
import RaceImg3 from '../../../../assets/img/races/rr-race-5-img3.png';
import RaceImg4 from '../../../../assets/img/races/rr-race-5-img4.png';

const RealmRebornRace5 = ({ setKey }) => {

    const [raceType, setRaceType] = useState(1);

    let txt1 = `The Plainsfolk have settled in La Noscea and other regions where the ground is flat and easily cultivated. Though many live the life of farmers, it is not uncommon to see Plainsfolk residing in Limsa Lominsa, holding positions in the navy or working in the fisheries. They are well known for their relaxed and carefree demeanor.`
    let txt2 = `The Dunesfolk can be found on the scorching sands of Thanalan and other such arid areas. As the founders of the merchant city of Ul'dah, they are famous for their obsession with commerce. A natural inclination to transform ideas into action has served the Dunesfolk well in their business dealings.`


    return (
        <motion.div className='contentComponent races-component'
            key={setKey}
            initial={{ y: '+100%', opacity: 1, transition: { duration: 0.7 } }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            exit={{ y: '+100%', opacity: 1, transition: { duration: 1 } }}
        >
            <article className='content-article race-article'>
                <div className='race-title'>
                    <div className='race-name'><h2>LALAFELL</h2><span>5 of 5</span></div>
                    <div>
                        <p className='auto padd-0'>The Lalafell are a folk both rotund and diminutive. Small by any race's standards and possessed of a childlike countenance, it proves difficult for non-Lalafell to gauge an individual's age with any degree of accuracy. Originally an agricultural people inhabiting the fertile islands of the south seas, they found their way to Eorzea via the burgeoning trade routes. Lalafell are welcoming of outsiders, and share prosperous relations with all of the other races of Eorzea.</p>
                    </div>
                </div>
                <div className='race-types'>
                    <div className='race-types-content'>
                        <motion.div animate={{ opacity: raceType === 1 ? 1 : 0.3, transition: { duration: 0.3 } }} className="race-img race-img1 nomob">
                            <img onClick={() => { setRaceType(1) }} style={{ 'width': '18vh' }} className='img1' src={RaceImg1} alt="PLAINSFOLK" />
                            <img onClick={() => { setRaceType(1) }} style={{ 'width': '18vh' }} className='img2' src={RaceImg2} alt="PLAINSFOLK" />
                        </motion.div>
                        <div className='races-fix-mobile'>
                            <div className='race-types-names auto'>
                                <motion.h3 onClick={() => { setRaceType(1) }} animate={{ opacity: raceType === 1 ? 1 : 0.5, transition: { duration: 0.3 } }}>PLAINSFOLK</motion.h3>
                                <motion.h3 onClick={() => { setRaceType(2) }} animate={{ opacity: raceType === 2 ? 1 : 0.5, transition: { duration: 0.3 } }}>DUNESFOLK</motion.h3>
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
                            <img onClick={() => { setRaceType(2) }} className='img1' src={RaceImg3} alt="DUNESFOLK" />
                            <img onClick={() => { setRaceType(2) }} className='img2' src={RaceImg4} alt="DUNESFOLK" />
                        </motion.div>

                        {/* mobile */}
                        {/* <motion.div animate={{ display: raceType === 1 ? 'flex' : 'none', opacity: raceType === 1 ? 1 : 0, transition: { duration: 0.3 } }} className="race-img-mob nodesk">
                            <img onClick={() => { setRaceType(1) }} className='img1' src={RaceImg1} alt="PLAINSFOLK" />
                            <img onClick={() => { setRaceType(1) }} className='img2' src={RaceImg2} alt="PLAINSFOLK" />
                        </motion.div>
                        <motion.div animate={{ display: raceType === 2 ? 'flex' : 'none', opacity: raceType === 2 ? 1 : 0, transition: { duration: 0.3 } }} className="race-img-mob nodesk">
                            <img onClick={() => { setRaceType(2) }} className='img1' src={RaceImg3} alt="DUNESFOLK" />
                            <img onClick={() => { setRaceType(2) }} className='img2' src={RaceImg4} alt="DUNESFOLK" />
                        </motion.div> */}
                    </div>
                </div>
            </article>
        </motion.div>
    );
}

export default RealmRebornRace5;
