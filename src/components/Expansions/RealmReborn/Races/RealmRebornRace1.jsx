import React, { useState } from 'react';
import '../../expansions.css';
import './races.css';

import { motion } from "framer-motion";

import RaceImg1 from '../../../../assets/img/races/rr-race-1-img1.png';
import RaceImg2 from '../../../../assets/img/races/rr-race-1-img2.png';
import RaceImg3 from '../../../../assets/img/races/rr-race-1-img3.png';
import RaceImg4 from '../../../../assets/img/races/rr-race-1-img4.png';

const RealmRebornRace1 = ({ setKey }) => {

    const [raceType, setRaceType] = useState(1);

    let txt1 = `The Midlander clan comprises over half of Eorzea's total Hyur population. The name derives from the clan's long tradition of settling in low-lying regions, though in truth Midlander lines hail from a wide variety of ancestral homelands. They have established themselves in every city throughout the realm, and can be observed leading lives as diverse as their heritage.`
    let txt2 = `The Highlander name comes from the clan's history of dominion over the mountains of Gyr Abania. Compared to their Midlander brethren, the Highlanders are noticeably larger in build and musculature. Following the fall of their ancestral homeland of Ala Mhigo, many have sought refuge in the bustling mercantile nation of Ul'dah.`



    return (
        <motion.div className='contentComponent races-component drop-shadow'
            key={setKey}
            initial={{ opacity: 0, transition: { duration: 0.7 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            <article className='content-article race-article padd-m-t-25'>
                <div className='race-title'>
                    <div><h2 className='race-name'>HYUR</h2></div>
                    <div>
                        <p className='auto padd-0'>Over the course of some one thousand years and three great migratory waves, the Hyur have come to be the most populous of the civilized races in Eorzea. Compared to the others, theirs is an average physique, both in terms of height and build. The Hyur champion personal freedom and liberty, and their espousal of an eclectic variety of languages and traditions is a legacy of their diverse heritage―as is their resulting lack of a unified cultural identity.</p>
                    </div>
                </div>
                <div className='race-types'>
                    <div className='race-types-content'>
                        <motion.div animate={{ opacity: raceType === 1 ? 1 : 0.3, transition: { duration: 0.3 } }} className="race-img race-img1">
                            <img className='img1' src={RaceImg1} alt="MIDLANDER" />
                            <img className='img2' src={RaceImg2} alt="MIDLANDER" />
                        </motion.div>
                        <div>
                            <div className='race-types-names auto'>
                                <motion.h3 onClick={() => { setRaceType(1) }} animate={{ opacity: raceType === 1 ? 1 : 0.5, transition: { duration: 0.3 } }}>MIDLANDER</motion.h3>
                                <motion.h3 onClick={() => { setRaceType(2) }} animate={{ opacity: raceType === 2 ? 1 : 0.5, transition: { duration: 0.3 } }}>HIGHLANDER</motion.h3>
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
                        <motion.div animate={{ opacity: raceType === 2 ? 1 : 0.3, transition: { duration: 0.3 } }} className="race-img race-img2">
                            <img className='img1' src={RaceImg3} alt="HIGHLANDER" />
                            <img className='img2' src={RaceImg4} alt="HIGHLANDER" />
                        </motion.div>
                    </div>
                </div>
            </article>
        </motion.div>
    );
}

export default RealmRebornRace1;
