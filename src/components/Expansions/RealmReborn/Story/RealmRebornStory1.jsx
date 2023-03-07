import React from 'react';
import '../../expansions.css';
import StoryImg from '../../../../assets/img/stories/rr-story-1.png';
import { motion } from "framer-motion";


const RealmRebornStory1 = ({ setKey }) => {
    return (
        <motion.div className='contentComponent'
            key={setKey}
            initial={{ opacity: 0, transition: { duration: 0.7 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ display: 'none', opacity: 0, transition: { duration: 0.3 } }}
        >
            <article className='content-article'>
                <h3>The Crystal's Call</h3>
                <p>
                    Hydaelyn─a vibrant planet blessed by the Light of the Crystal.
                    <br /> <br />
                    Amid azure seas, encompassing the westernmost of the Three Great Continents, there lies a realm embraced by gods and forged by heroes. Her name...Eorzea.
                    <br /> <br />
                    It is here that your tale unfolds. Beckoned by the Mothercrystal─the source of all life─you must embark upon a quest to deliver the land from an eternity of Darkness.
                </p>
            </article>
            <div className="content-article-img"><img src={StoryImg} alt="crystal call" /></div>
        </motion.div>
    );
}

export default RealmRebornStory1;
