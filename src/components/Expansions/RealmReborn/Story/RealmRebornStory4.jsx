import React from 'react';
import '../../expansions.css';
import StoryImg from '../../../../assets/img/stories/rr-story-4.png';
import { motion } from "framer-motion";


const RealmRebornStory4 = ({ setKey }) => {
    return (
        <motion.div className='contentComponent'
            key={setKey}
            initial={{ opacity: 0, transition: { duration: 0.7 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ display: 'none', opacity: 0, transition: { duration: 0.3 } }}
        >
            <article className='content-article'>
                <h3>Adventurers</h3>
                <p>
                    The life of an adventurer is the pursuit of fortune and the pursuit of fame. It is the devotion of oneself to seeking out danger and glory wherever they might lie. It is an endless quest taken up only by the most intrepid and dauntless of souls.
                    <br /><br />
                    The term came into popular use among the people of Eorzea little more than a decade ago. Left idle by the onset of the Age of Calm, a leading mercenary officer gathered to his side a number of trusted companions, and together they formed a guild dedicated to the common cause of aiding the realm at large.
                    <br /><br />
                    Outside the modest station of their humble beginnings, a simple sign hung for all to see―Adventurers' Guild.
                    <br /><br />
                    The Adventurers' Guild has since spread, and can now be found in each of therealm's great nations. It is here that Eorzeans come with their myriad pleas and requests, and here that adventurers heed the call, whether it be the slaying of some foul beast plaguing the countryside, or the crafting of fine wares demanding a master's touch.
                    <br /><br />
                    What greatness lies in store for you, adventurer?
                </p>
            </article>
            <div className="content-article-img"><img src={StoryImg} alt="Adventurers" /></div>
        </motion.div>
    );
}

export default RealmRebornStory4;
