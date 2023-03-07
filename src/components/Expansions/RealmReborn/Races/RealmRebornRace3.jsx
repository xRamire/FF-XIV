import React, { useState } from 'react';
import '../../expansions.css';
import './races.css';

import { motion } from "framer-motion";

import RaceImg1 from '../../../../assets/img/races/rr-race-3-img2.png';
import RaceImg2 from '../../../../assets/img/races/rr-race-3-img1.png';
import RaceImg3 from '../../../../assets/img/races/rr-race-3-img3.png';
import RaceImg4 from '../../../../assets/img/races/rr-race-3-img4.png';

const RealmRebornRace3 = ({ setKey }) => {

    const [raceType, setRaceType] = useState(1);

    let txt1 = `The forests, of which the Black Shroud is the tangled heart, have been home to the Wildwood Elezen for hundreds of years. Many of the Wildwood, however, have been drawn to the city-states they helped found, such as Ishgard and Gridania. Their fondness for law and order has contributed to a reputation for being haughty and argumentative.`
    let txt2 = `For the past several centuries, the Duskwight Elezen have lived in the woodland caverns of Eorzea. These cave-dwelling Elezen are the descendants of a branch that split from the main Wildwood clan during the founding of Gridania. The Duskwight despise the "shackles" of urban life, and it is not uncommon for this reclusive people to avoid the city-states altogether.`


    return (
        <motion.div className='contentComponent races-component'
            key={setKey}
            initial={{ y: '+100%', opacity: 1, transition: { duration: 0.7 } }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            exit={{ y: '+100%', opacity: 1, transition: { duration: 1 } }}
        >
            <article className='content-article race-article'>
                <div className='race-title'>
                    <div className='race-name'><h2>ELEZEN</h2><span>3 of 5</span></div>
                    <div>
                        <p className='auto padd-0'>
                            The Elezen are a characteristically tall people, long of limb and slender of build. They are also possessed of a somewhat extended lifespan in comparison to the Hyur. The Elezen once claimed sole dominion over Eorzea, their presence predating that of the other races, and, as such, developed a heightened sense of honor and pride. In years past, the Hyur migration into Elezen lands sparked bitter conflict. At present, however, the mutual understanding reached between the two races allows them to work towards mutual peace and prosperity.
                        </p>
                    </div>
                </div>
                <div className='race-types'>
                    <div className='race-types-content'>
                        <motion.div animate={{ opacity: raceType === 1 ? 1 : 0.3, transition: { duration: 0.3 } }} className="race-img race-img1 nomob">
                            <img onClick={() => { setRaceType(1) }} style={{ 'width': '12vh' }} className='img1' src={RaceImg1} alt="WILDWOOD" />
                            <img onClick={() => { setRaceType(1) }} style={{ 'width': '12vh' }} className='img2' src={RaceImg2} alt="WILDWOOD" />
                        </motion.div>
                        <div className='races-fix-mobile'>
                            <div className='race-types-names auto'>
                                <motion.h3 onClick={() => { setRaceType(1) }} animate={{ opacity: raceType === 1 ? 1 : 0.5, transition: { duration: 0.3 } }}>WILDWOOD</motion.h3>
                                <motion.h3 onClick={() => { setRaceType(2) }} animate={{ opacity: raceType === 2 ? 1 : 0.5, transition: { duration: 0.3 } }}>DUSKWIGHT</motion.h3>
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
                            <img onClick={() => { setRaceType(2) }} style={{ 'width': '15vh' }} className='img1' src={RaceImg3} alt="DUSKWIGHT" />
                            <img onClick={() => { setRaceType(2) }} style={{ 'width': '11vh' }} className='img2' src={RaceImg4} alt="DUSKWIGHT" />
                        </motion.div>

                        {/* mobile */}
                        {/* <motion.div animate={{ display: raceType === 1 ? 'flex' : 'none', opacity: raceType === 1 ? 1 : 0, transition: { duration: 0.3 } }} className="race-img-mob nodesk">
                            <img onClick={() => { setRaceType(1) }} className='img1' src={RaceImg1} alt="WILDWOOD" />
                            <img onClick={() => { setRaceType(1) }} className='img2' src={RaceImg2} alt="WILDWOOD" />
                        </motion.div>
                        <motion.div animate={{ display: raceType === 2 ? 'flex' : 'none', opacity: raceType === 2 ? 1 : 0, transition: { duration: 0.3 } }} className="race-img-mob nodesk">
                            <img onClick={() => { setRaceType(2) }} className='img1' src={RaceImg3} alt="DUSKWIGHT" />
                            <img onClick={() => { setRaceType(2) }} className='img2' src={RaceImg4} alt="DUSKWIGHT" />
                        </motion.div> */}
                    </div>
                </div>
            </article>
        </motion.div>
    );
}

export default RealmRebornRace3;
