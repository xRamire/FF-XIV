import React from 'react';
import '../expansions.css';
import StoryImg from '../../../assets/img/hs-story-1.jpg';
import { motion } from "framer-motion";

import { AnimatePresence } from 'framer-motion';

const HeavenswardStory1 = () => {
    return (
        <AnimatePresence>
            <motion.div className='storyComponent'
                initial={{ opacity: 0, transition: { duration: 0.7 } }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
                <article className='story-article padd-m-t-25'>
                    <h3>Shadows of Ul'dah</h3>
                    <p>
                        Owing to schemes in the shadows of Ul'dah, the Scions of the Seventh Dawn have been scattered, and the Warrior of light has been forced to flee North.
                        <br /> <br />
                        Though granted shelter by Lord Haurchefant, our heroes must press on to Ishgard. But what trials await in this reclusive nation, locked in a never-ending struggle with dragons?
                        <br /> <br />
                        Come what may, they must not falter, lest the light of hope be forever extinguished.
                    </p>
                </article>
                <div className="story-img"><img src={StoryImg} alt="crystal call" /></div>
            </motion.div>
        </AnimatePresence>
    );
}

export default HeavenswardStory1;
