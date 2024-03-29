import React from 'react';
import '../../expansions.css';
import StoryImg from '../../../../assets/img/stories/rr-story-2.png';

import { motion } from "framer-motion";


const RealmRebornStory2 = ({ setKey }) => {
    return (
        <motion.div className='contentComponent'
            key={setKey}
            initial={{ opacity: 0, transition: { duration: 0.7 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ display: 'none', opacity: 0, transition: { duration: 0.3 } }}
        >
            <article className='content-article'>
                <h3>Hydaelyn</h3>
                <p>
                    Since time immemorial, this verdant planet has seen the births of lives uncounted.
                    <br /> <br />
                    But the land now bears grievous scars, and threatens to slip into a gaping maw of death and darkness.
                    <br /> <br />
                    You who would bring the light of hope to Hydaelyn...
                    <br />
                    You who would heed the whisperings of the aetheryte and take up the mantle of "adventurer."
                    <br /><br />
                    It is here that your tale unfolds. Beckoned by the Mothercrystal─the source of all life─you must embark upon a quest to deliver the land from an eternity of Darkness.
                </p>
            </article>
            <div className="content-article-img"><img src={StoryImg} alt="Hydaelyn" /></div>
        </motion.div>

    );
}

export default RealmRebornStory2;
