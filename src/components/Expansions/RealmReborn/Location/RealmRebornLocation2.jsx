import React from 'react';
import '../../expansions.css';
import LocationImg from '../../../../assets/img/locations/rr-location-2.png';
import { motion } from "framer-motion";

const RealmRebornLocation2 = ({ setKey }) => {
    return (
        <motion.div className='contentComponent'
            key={setKey}
            initial={{ opacity: 0, transition: { duration: 0.7 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ display: 'none', opacity: 0, transition: { duration: 0.3 } }}
        >
            <article className='content-article padd-m-t-25'>
                <h3>GRIDANIA</h3>
                <p>
                    In the eastern reaches of the Aldenard landmass, home to vast, dense woodlands and coursing rivers, lies the forest nation of Gridania. The cityscape is a mosaic of labyrinthine waterways and great wooden structures, so gracefully constructed they seem a part of the surrounding environment.
                    <br /><br />
                    Visitors from every corner of Eorzea come to Ul'dah to partake of the city's famed recreation, most notably the fighting arenas and gambling halls. Ul'dahn culture is known for its affluence, and the wealth of the nation comes in large part from its abundant mineral resources and prestigious clothcrafting industry.
                    <br /><br />
                    Historically, it is the sultan who claims sovereignty over Ul'dah, but true power is wielded by the Syndicate, an elite group of six of the most influential and richest members of society. Nald'thal is the patron deity of the city, and two great halls devoted to his two aspects can be found in the eastern and western sections of the city.
                </p>
            </article>
            <div className="content-article-img"><img src={LocationImg} alt="crystal call" /></div>
        </motion.div>
    );
}

export default RealmRebornLocation2;
