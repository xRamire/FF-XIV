import React from 'react';
import { motion } from "framer-motion"

import './home.css';
import MainImg from '../../assets/img/Final-Fantasy-XIV-home-Logo.png';

import { Link } from 'react-router-dom';

function Home(props) {


    const handleClickScroll = () => {
        const element = document.getElementById('expansions');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div id="home" className='landing'
            initial={{ opacity: 0, transition: { duration: 0.5 } }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}>

            <div className="container auto bg1">
                <div className="content">
                    <div class="main-img auto padd-t-100">
                        <img src={MainImg} alt="Final Fantasy" />
                    </div>
                    <div className='txt center'>
                        <h1>Adventure awaits you beyond the horizon</h1>
                    </div>
                    <div onClick={handleClickScroll} class="arrow auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" /><polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" /></g></svg>
                    </div>
                </div>

            </div>

            <div className="container auto bg2" id='expansions'>
                <div className="content verticalalign">
                    <div className="column verticalalign">
                        <div className="row card-space auto padd-m-t-50">
                            <Link to='/realm-reborn' className='exp-card'><div className="exp-card-img exp-card-img1"></div></Link>
                            <Link to='/heavensward' className=" exp-card"><div className="exp-card-img exp-card-img2"></div></Link>
                        </div>
                        <div className="row card-space auto padd-t-50 padd-m-t-0">
                            <div className="auto exp-card"><div className="exp-card-img exp-card-img3"></div></div>
                            <div className="auto exp-card"><div className="exp-card-img exp-card-img4"></div></div>
                        </div>
                        <div className="row card-space auto padd-t-50 padd-m-t-0">
                            <div className="auto exp-card"><div className="exp-card-img exp-card-img5"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;