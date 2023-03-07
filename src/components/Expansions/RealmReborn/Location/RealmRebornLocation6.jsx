import React from 'react';
import '../../expansions.css';
import LocationImg from '../../../../assets/img/locations/rr-location-6.png';
import { motion } from "framer-motion";

const RealmRebornLocation6 = ({ setKey }) => {
    return (
        <motion.div className='contentComponent'
            key={setKey}
            initial={{ opacity: 0, transition: { duration: 0.7 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ display: 'none', opacity: 0, transition: { duration: 0.3 } }}
        >
            <article className='content-article'>
                <h3>ISHGARD</h3>
                <p>
                    In the central region of Abalathia's Spine, that great mountain range that spans Aldenard from east to west, can be found the forbidding highlands of Coerthas and the Holy See of Ishgard. The archbishop of the church, while leading his people in the teachings of Halone, the Fury, rules also as the nation's sovereign.
                    <br /><br />
                    Ishgard's formidable army of knights wages constant battle against its mortal enemies, the dragons. Faced with ever more aggressive attacks from its serpentine foes, as well as an unprecedented spell of bitter cold, the theocracy's days are dark indeed.
                    <br /><br />
                    Matters have grown so grave as to prompt the archbishop and his advisors to consider throwing open the heretofore sealed gates of Ishgard and calling for outside aid.
                </p>
            </article>
            <div className="content-article-img"><img src={LocationImg} alt="crystal call" /></div>
        </motion.div>
    );
}

export default RealmRebornLocation6;
