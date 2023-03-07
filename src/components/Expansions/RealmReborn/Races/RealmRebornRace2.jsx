import React, { useState } from 'react';
import '../../expansions.css';
import './races.css';

import { motion } from "framer-motion";

import RaceImg1 from '../../../../assets/img/races/rr-race-2-img2.png';
import RaceImg2 from '../../../../assets/img/races/rr-race-2-img1.png';
import RaceImg3 from '../../../../assets/img/races/rr-race-2-img4.png';
import RaceImg4 from '../../../../assets/img/races/rr-race-2-img3.png';

const RealmRebornRace2 = ({ setKey }) => {

    const [raceType, setRaceType] = useState(1);

    let txt1 = `The self-proclaimed Seekers of the Sun are the diurnal clan of the Miqo'te race. Their preference for the warm light of day pervades all aspects of their culture, as is apparent in their devout reverence for Azeyma the Warden, goddess of the sun. Though relatively few in Eorzea, a small number of them have been accepted into everyday life by the other races in the port city of Limsa Lominsa. Others are known to make their home in the region of the Sagolii Desert.`;
    let txt2 = `The nocturnal among the Miqo'te have dubbed themselves the Keepers of the Moon. Shying from the garish light of day, they revel in the shroud of night, with most offering their piety to Menphina the Lover, goddess of the moon. Their tradition of hunting in the thick woodlands of the Black Shroud have for years thrown them into conflict with the forestfolk of Gridania, who condemn them as poachers. Of late, however, many Keepers of the Moon have found some small peace with the Gridanians, and taken to living within the city.`;

    return (
        <motion.div className='contentComponent races-component'
            key={setKey}
            initial={{ y: '+100%', opacity: 1, transition: { duration: 0.7 } }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            exit={{ y: '+100%', opacity: 1, transition: { duration: 1 } }}
        >
            <article className='content-article race-article'>
                <div className='race-title'>
                    <div className='race-name'><h2>MIQO'TE</h2><span>2 of 5</span></div>
                    <div>
                        <p className='auto padd-0'>Though their presence in Eorzea is lesser than that of the other races, the Miqo'te are easily distinguished by their large, projecting ears and restless, feline tails. The ancestors of this line first made their way to the realm during the Age of Endless Frost in the Fifth Umbral Era, traversing frozen seas in pursuit of the wildlife upon which they subsisted. Instinctual territoriality causes many among them to lead solitary lifestyles. Males in particular are said to shy from contact with others.</p>
                    </div>
                </div>
                <div className='race-types'>
                    <div className='race-types-content'>
                        <motion.div animate={{ opacity: raceType === 1 ? 1 : 0.3, transition: { duration: 0.3 } }} className="race-img race-img1 nomob">
                            <img onClick={() => { setRaceType(1) }} style={{ 'width': '18vh' }} className='img1' src={RaceImg1} alt="SEEKERS OF THE SUN" />
                            <img onClick={() => { setRaceType(1) }} style={{ 'width': '18vh' }} className='img2' src={RaceImg2} alt="SEEKERS OF THE SUN" />
                        </motion.div>
                        <div className='races-fix-mobile'>
                            <div className='race-types-names auto'>
                                <motion.h3 onClick={() => { setRaceType(1) }} animate={{ opacity: raceType === 1 ? 1 : 0.5, transition: { duration: 0.3 } }}>SEEKERS OF THE SUN</motion.h3>
                                <motion.h3 onClick={() => { setRaceType(2) }} animate={{ opacity: raceType === 2 ? 1 : 0.5, transition: { duration: 0.3 } }}>KEEPERS OF THE MOON</motion.h3>
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
                            <img onClick={() => { setRaceType(2) }} className='img1' src={RaceImg3} alt="KEEPERS OF THE MOON" />
                            <img onClick={() => { setRaceType(2) }} style={{ 'width': '14vh' }} className='img2' src={RaceImg4} alt="KEEPERS OF THE MOON" />
                        </motion.div>


                        {/* mobile */}
                        {/* <motion.div animate={{ display: raceType === 1 ? 'flex' : 'none', opacity: raceType === 1 ? 1 : 0, transition: { duration: 0.3 } }} className="race-img-mob nodesk">
                            <img onClick={() => { setRaceType(1) }} className='img1' src={RaceImg1} alt="SEEKERS OF THE SUN" />
                            <img onClick={() => { setRaceType(1) }} className='img2' src={RaceImg2} alt="SEEKERS OF THE SUN" />
                        </motion.div>
                        <motion.div animate={{ display: raceType === 2 ? 'flex' : 'none', opacity: raceType === 2 ? 1 : 0, transition: { duration: 0.3 } }} className="race-img-mob nodesk">
                            <img onClick={() => { setRaceType(2) }} className='img1' src={RaceImg3} alt="KEEPERS OF THE MOON" />
                            <img onClick={() => { setRaceType(2) }} className='img2' src={RaceImg4} alt="KEEPERS OF THE MOON" />
                        </motion.div> */}
                    </div>
                </div>
            </article>
        </motion.div>
    );
}

export default RealmRebornRace2;
