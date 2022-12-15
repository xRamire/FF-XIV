import React from 'react';
import '../../expansions.css';
import LocationImg from '../../../../assets/img/rr-story-1.png';
import { motion, AnimatePresence } from "framer-motion";

const RealmRebornLocation1 = () => {
    return (
        <AnimatePresence>
            <motion.div className='storyComponent'
                initial={{ opacity: 0, transition: { duration: 0.7 } }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
                <article className='location-article padd-m-t-25'>
                    <h3>UL'DAH</h3>
                    <p>
                        The bustling commercial hub of Ul'dah sits amid the desolate desert landscape of southern Aldenard. The city is organized strategically around the dome-shaped citadel at its center. Its towering fortifications and protective outer walls are visible for malms in all directions, and serve as a stark deterrent to would-be besiegers.
                        <br /><br />
                        Visitors from every corner of Eorzea come to Ul'dah to partake of the city's famed recreation, most notably the fighting arenas and gambling halls. Ul'dahn culture is known for its affluence, and the wealth of the nation comes in large part from its abundant mineral resources and prestigious clothcrafting industry.
                        <br /><br />
                        Historically, it is the sultan who claims sovereignty over Ul'dah, but true power is wielded by the Syndicate, an elite group of six of the most influential and richest members of society. Nald'thal is the patron deity of the city, and two great halls devoted to his two aspects can be found in the eastern and western sections of the city.
                    </p>
                </article>
                <div className="story-img"><img src={LocationImg} alt="uldah" /></div>
            </motion.div>
        </AnimatePresence>
    );
}

export default RealmRebornLocation1;
