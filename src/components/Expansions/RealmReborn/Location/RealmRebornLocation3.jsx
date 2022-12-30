import React from 'react';
import '../../expansions.css';
import LocationImg from '../../../../assets/img/locations/rr-location-3.png';
import { motion } from "framer-motion";

const RealmRebornLocation3 = ({ setKey }) => {
    return (
        <motion.div className='contentComponent'
            key={setKey}
            initial={{ opacity: 0, transition: { duration: 0.7 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ display: 'none', opacity: 0, transition: { duration: 0.3 } }}
        >
            <article className='content-article padd-m-t-25'>
                <h3>LIMSA LOMINSA</h3>
                <p>
                    On the southern coast of the island of Vylbrand, under the shadow of ancient cliffs worn by the relentless onslaught of the Rhotano Sea, lies the marine city-state of Limsa Lominsa. Said to be blessed by the goddess of navigation, Llymlaen, the city is spread out over countless tiny islands, each connected by sturdy bridges of iron and wood construction, earning her the name the "Navigator's Veil" from traveling bards who have witnessed the city's beauty from afar.
                    <br /><br />
                    Limsa Lominsa is a traditional thalassocracy, with power lying in the hands of the ruling party and its leader, the Admiral. Its economy is driven by shipbuilding, fishing, and blacksmithing, but the majority of wealth comes from the lucrative shipping industry.
                    <br /><br />
                    To maintain the safety of its maritime routes, the city employs a formidable navy known as the Knights of the Barracuda. However, even in the waters nearby the city, pirate bands run rampant, reaving and pillaging.
                </p>
            </article>
            <div className="content-article-img"><img src={LocationImg} alt="crystal call" /></div>
        </motion.div>
    );
}

export default RealmRebornLocation3;
