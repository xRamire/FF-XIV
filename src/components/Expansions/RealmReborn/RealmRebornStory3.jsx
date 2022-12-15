import React from 'react';
import '../expansions.css';
import StoryImg from '../../../assets/img/rr-story-3.png';
import { motion } from "framer-motion";


const RealmRebornStory3 = () => {
    return (
        <motion.div className='storyComponent'
            initial={{ opacity: 0, transition: { duration: 0.5 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            <article className='story-article padd-m-t-25'>
                <h3>Eorzea</h3>
                <p>
                    Comprised of Aldenard, the westernmost of the Three Great Continents, and its surrounding islands, the realm of Eorzea has been the cradle of several unique civilizations throughout history.
                    <br /><br />
                    Towering mountains dominate the north, their peaks forever lashed with icy winds; to the south, a bleak expanse of unforgiving desert holds sway.
                    <br /><br />
                    Yet these inhospitable lands hold irresistible lure for man and monster alike, for wide and deep flow the currents of aether, and rich are the veins of power-infused crystal.
                    <br /><br />
                    In this harsh though vibrant region, the people of Eorzea have carved out their histories—a cycle of prosperous Astral and disastrous Umbral eras.
                    <br /><br />
                    The First Umbral Era brought an end to the age of the gods, and there have been six such eras of calamity since the First Astral Era ushered in the age of man.
                    <br /><br />
                    Each of the Umbral catastrophes has, in turn, borne the characteristics of one of the six elements. With all the elements now represented, it was believed the current Astral era would last into eternity.
                    <br /><br />
                    But in the seventh verse of the Divine Chronicles, Mezaya Thousand Eyes prophesized a less fortunate fate. The "senary sun," or Sixth Astral Era, would indeed end, and the "septenary moon," or Seventh Umbral Era, would cast its shadow upon the land.
                </p>
            </article>
            <div className="story-img"><img src={StoryImg} alt="Eorzea" /></div>
        </motion.div>

    );
}

export default RealmRebornStory3;
