import React from 'react';
import '../../expansions.css';
import LocationImg from '../../../../assets/img/locations/rr-location-5.png';
import { motion } from "framer-motion";

const RealmRebornLocation5 = ({ setKey }) => {
    return (
        <motion.div className='contentComponent'
            key={setKey}
            initial={{ opacity: 0, transition: { duration: 0.7 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ display: 'none', opacity: 0, transition: { duration: 0.3 } }}
        >
            <article className='content-article'>
                <h3>ALA MHIGO</h3>
                <p>
                    The highlands of Gyr Abania in the eastern reaches of Aldenard were once under the control of a martial nation known as Ala Mhigo. It was, perhaps, the historically conflicted nature of the territory that forged the country into a significant military power.
                    <br /><br />
                    Even as this aggressive nation sent its forces to conquer in the west, it repelled repeated attempts at invasion from the east. In the Year 1557 of the Sixth Astral Era, however, it finally fell to the incursions of the Garlean Empire. From that time onwards, the country became merely another imperial territory under the governance of its usurpers. Though the people of Ala Mhigo once revered Rhalgr, the Destroyer, as their patron deity, any such religious observance has since been forbidden by the controlling authorities.
                </p>
            </article>
            <div className="content-article-img"><img src={LocationImg} alt="crystal call" /></div>
        </motion.div>
    );
}

export default RealmRebornLocation5;
