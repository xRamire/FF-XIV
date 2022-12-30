import React from 'react';
import '../../expansions.css';
import LocationImg from '../../../../assets/img/locations/rr-location-4.png';
import { motion } from "framer-motion";

const RealmRebornLocation4 = ({ setKey }) => {
    return (
        <motion.div className='contentComponent'
            key={setKey}
            initial={{ opacity: 0, transition: { duration: 0.7 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ display: 'none', opacity: 0, transition: { duration: 0.3 } }}
        >
            <article className='content-article padd-m-t-25'>
                <h3>MOR DHONA</h3>
                <p>
                    Mor Dhona is an inland region of Eorzea, and the site of the first aerial battle in recorded history—a conflict that took place above Silvertear Lake.
                    <br /><br />
                    In the Year 1562 of the Sixth Astral Era, five years after the invasion of Ala Mhigo, the Garlean Empire finally rose from apparent inactivity to resume its attack on Eorzea. A fleet of airships was deployed to Mor Dhona, led by the massive flagship Agrius.
                    <br /><br />
                    As the imperial fleet advanced into the skies above Silvertear Lake, the largest inland body of water in Aldenard, it was met with a wholly unexpected sight. Midgardsormr, the dragon deity of the lake, had arisen, summoned by a hand unknown. And as if to answer the mighty wyrm's call, a host of dragons flew in from the northwestern reaches of Dravania and fell upon the Empire's forces.
                    <br /><br />
                    The air was filled with the deafening roars of cannons and dragonkin alike. Locked in a deadly embrace, the thunderous impact of Midgardsormr and the dreadnought Agrius tolled their mutual demise. Thus ended the Battle of Silvertear Skies.
                    <br /><br />
                    Even now, the carcass of the immense wyrm lies entwined with the wreckage of the Agrius in the center of the lake, a towering monument to the ferocity of the conflict.
                    <br /><br />
                    Ever since that day, the lands of Eorzea have continued an inexorable fall into chaos...
                </p>
            </article>
            <div className="content-article-img"><img src={LocationImg} alt="crystal call" /></div>
        </motion.div>
    );
}

export default RealmRebornLocation4;
