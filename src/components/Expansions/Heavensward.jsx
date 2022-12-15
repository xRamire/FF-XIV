import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import './expansions.css';

import MainImg from '../../assets/img/heavensward-logo.png';
import HeavenswardStory1 from './Heavensward/HeavenswardStory1';


const Heavensward = () => {



    const scrollToStory = () => {
        const element = document.getElementById('story');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // story animations

    const [currentStory, setCurrentStory] = useState(1);

    const storyPosts = 1



    return (
        <motion.div id='expansion-component' className='landing relative exp-heavensward'
            initial={{ opacity: 0, transition: { duration: 0.5 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}>

            <div className="container auto bg1">
                <div className="content">
                    <div class="main-img auto padd-t-100">
                        <img src={MainImg} alt="Final Fantasy" />
                    </div>
                    <div className='txt center categories padd-t-50'>
                        <div onClick={scrollToStory} className='category-btn'><h2>Story</h2></div>
                        <div className='category-btn'><h2>Locations</h2></div>
                        <div className='category-btn'><h2>Races</h2></div>
                    </div>
                </div>
            </div>

            <div className="container auto bg2" id='story'>
                <div className="content story auto">
                    <div className="nomob carrousel-btn carrousel-btn-1" onClick={() => currentStory === 1 ? null : setCurrentStory(currentStory - 1)} style={currentStory === 1 ? { opacity: "0.5" } : { opacity: "1" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" /><polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" /></g></svg>
                    </div>
                    <AnimatePresence>
                        {currentStory === 1 ? <HeavenswardStory1 /> : null}
                    </AnimatePresence>


                    <div className="nomob carrousel-btn carrousel-btn-2" onClick={() => currentStory === storyPosts ? null : setCurrentStory(currentStory + 1)} style={currentStory === storyPosts ? { opacity: "0.5" } : { opacity: "1" }} storyImgCheck>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" /><polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" /></g></svg>
                    </div>

                    <div className="carrousel-btn-mob nodesk">
                        <div className="carrousel-btn carrousel-btn-1" onClick={() => currentStory === 1 ? null : setCurrentStory(currentStory - 1)} style={currentStory === 1 ? { opacity: "0.5" } : { opacity: "1" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" /><polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" /></g></svg>
                        </div>
                        <div className="carrousel-btn carrousel-btn-2" onClick={() => currentStory === storyPosts ? null : setCurrentStory(currentStory + 1)} style={currentStory === storyPosts ? { opacity: "0.5" } : { opacity: "1" }} storyImgCheck>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" /><polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" /></g></svg>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

export default Heavensward;
