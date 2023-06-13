import React, { useState } from 'react';
import { motion } from "framer-motion";

import styles from '../../styles';
import './home.css';
import MainImg from '../../assets/img/Final-Fantasy-XIV-home-Logo.png';
import DragoonWarrior from '../../assets/img/dragoon-warrior.png';
import SkyStar from '../../assets/img/skystar.png';
import homeVideo from '../../assets/img/homeVideo.mp4'
import picture from '../../assets/img/ilustracion.jpg'
import marco from '../../assets/img/marco.png'

import { fadeIn, planetVariants, staggerContainer } from '../../utils/motion';
import { TitleText, TypingText } from '../CustomTexts';

import { Link } from 'react-router-dom';

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 13.1">
    <path d="M101 1.3H89.8c-1.4 0-2.8.5-3.8 1.6-.8.9-1.9 1.4-3.1 1.5-1.3.4-2.8.5-4.2.4-1.7-.2-3.2-1.1-3.4-2 0-.5-.1-1-.3-1.4-.2-.2-.4-.1-.4-.1H56c-1.2-.3-2.4.3-3 1.4-.7 1.6-.5 3.3.4 4.8.6.5 1.3.8 2.1.8 1.1.1 2.1-.5 2.7-1.4.4-.9.1-1.2-.2-1.3-.4-.1-.9.1-1.1.4-.2.4-.5.7-.8 1-.9 0-1.6-.8-1.6-1.7.1-1.2 0-2.2 1-2.4s8.6 0 8.6 0 1.1-.1.6.4c-.9.8-1.4 1.9-1.4 3.1-.1 1.4.3 2.8 1.3 3.9.9.8.8.9.8 1.5-.1.5-.2.9-.4 1.4 0 0 1.3-.7 1.2-1.1s-.1-.9-.1-.9c.6.2 1.3.3 2 .3.5-.2.8-.9.3-1.1s-2-.3-2.4-.5c-.6-.8-1-1.7-1-2.7.5-3 3.3-4.9 6.3-4.4.3 0 .6.1.8.2.8.3 1.5.8 2 1.5-.9.3-1.6 1-2 1.8-.4 1.3-.4 2.1-.1 2.2.5.1 1.1.1 1.6-.2.9-.2 1.7-.7 2.1-1.5.2-.5.3-1 .4-1.5 0 0 .9.3 1.5.4.4.3.8.3 1.2.3v.9c-.6.2-1 .8-.9 1.5-.1.8.2 1.7.8 2.3.3.2.7.3 1.1.2.5-.1.9-.3 1.2-.7.4-.5.5-1.2.3-1.8-.2-.8-.6-1.6-1-2.3.9.2 1.8.1 2.7-.1.5-.2 1.1-.4 1.6-.5.2 1 1 1.8 2.1 2 .8.1 1.6-.2 2-.9.1-.3.1-.6.1-.9l-.5-.5c-.1.5-.5.9-1.1 1-.5.1-.9-.3-1-.8v-.1c0-1.2 1-2.1 2.2-2.1 2.4-.1 7-.1 7-.1l2.7-.1 2.8-.1M61.2 8.7c-1 .1-1.9.4-2.8 1-.5.6-.6 1.3-.5 2 0 .5.5.6 2.5 0 1.2-.4 2-1.4 2.1-2.6v-.6c0-.3-.2 0-1.3.2zm1-4.2c-.8-.3-.6-.5-1.5-.2s-1 .6-.9.9-.2.7.7.8.6.6 1.2.4.4.1.7-.2c0-.1.1-.1.1-.1.3-.3.4-.8.1-1.2-.1-.2-.3-.4-.4-.4zm8 1.4c-.1-.1-.2-.2-.4-.2-.5 0-1 .1-1.4.3-.7.2-1.3.5-1.9.9-.2.6-.1 1.2.3 1.7.3.3 1.8 0 2.4-.4.4-.2.8-.6.9-1 .1-.3-.3-.3-.1-.5 0-.3.1-.6.2-.8zm25 1.2c-.6.4-1.4.6-2.1.5-.6-.1-1.1-.5-1.2-1-.2-.9 0-1.7.5-2.5 0 0 .3-.3-.1-.3-.7.2-1.3.5-1.7.9-.4.6-.6 1.4-.5 2.2.2 1.1 1.1 2 2.2 2.2 1.1.2 2.3-.3 2.9-1.3 0-.2.3-.9 0-.7zm.9-2.9zm3.1 2.3c-.6-.3-1.3-.4-2-.4-.1-.5-.2-.9-.4-1.3-.2-.2-.4-.4-.7-.5.1.4.2.7.3 1.1.1.5 0 1-.2 1.5.1 0 .1.1.2.1 0 0-.1-.1.7-.2.8-.1 1.6 0 2.3.5.3.2.6.5.8.9-.1-.6-.4-1.3-1-1.7zm.9-2.4c-.7 0-1.3.2-1.9.5-.2.2-.2.6-.1.8.3.3.7.3.9 0 .6-.3 1.3-.6 2-.8v-.1c0-.1-.1-.2-.1-.2-.3-.2-.6-.2-.8-.2zM50.5 0c-.5.1-1 .2-1.4.5-.2.3-.3.1.1.9s1.3 2.4 1.3 2.4.9-1.6 1.3-2.4.3-.6.1-.9c-.4-.3-.9-.4-1.4-.5zM0 2.9l2.8.1 2.8.1s4.6-.1 7 .1c1.2 0 2.1.9 2.2 2.1 0 .5-.4.9-.9.9h-.1c-.5-.1-1-.5-1.1-1l-.5.5c-.1.3 0 .6.1.9.4.7 1.2 1 2 .9 1.1-.1 1.9-.9 2.1-2 .6.1 1.1.3 1.6.5.9.3 1.8.3 2.7.1-.4.7-.8 1.5-1 2.3-.2.6-.1 1.3.3 1.8.3.3.7.6 1.2.7.4 0 .8-.1 1.1-.2.6-.6.8-1.4.8-2.3.1-.6-.3-1.3-.9-1.5V6c.4 0 .8 0 1.2-.1.5-.2 1.4-.4 1.5-.4.1.5.2 1 .4 1.5.5.8 1.2 1.3 2.1 1.5.5.3 1 .3 1.6.2.3-.1.3-.9-.1-2.2-.4-.8-1.1-1.5-2-1.8.5-.7 1.2-1.2 2-1.5 2.8-1 5.9.5 6.9 3.4.1.1.2.3.2.6 0 1-.4 1.9-1.1 2.6-.4.3-1.9.3-2.4.5s-.2.9.3 1.1c.7 0 1.3-.1 2-.3 0 0 0 .5-.1.9s1.2 1.1 1.2 1.1c-.2-.4-.3-.9-.4-1.4 0-.6-.1-.7.8-1.5 1-1.1 1.4-2.5 1.3-3.9 0-1.2-.5-2.3-1.4-3.1-.5-.5.6-.4.6-.4s7.6-.2 8.6 0 .8 1.3 1 2.4c0 .9-.7 1.7-1.6 1.7-.3-.3-.6-.6-.8-1-.3-.3-.7-.5-1.1-.4-.2.1-.6.4-.2 1.3.5.9 1.6 1.5 2.7 1.4.8.1 1.6-.2 2.2-.8.9-1.4 1-3.2.4-4.8-.6-1.1-1.8-1.7-3-1.4H26.3s-.1-.1-.4.1c-.2.4-.3.9-.3 1.4-.2.9-1.7 1.7-3.4 2-1.4.1-2.8 0-4.2-.4-1.2-.1-2.3-.6-3.1-1.5-1-1-2.4-1.6-3.8-1.6L0 1.3m39.7 7.4c-1-.2-1.3-.5-1.4-.3V9c.1 1.2.9 2.3 2.1 2.6 2 .6 2.4.5 2.5 0 .2-.7 0-1.5-.5-2-.7-.5-1.7-.8-2.7-.9zm-1.1-2.5c.3.3.1 0 .7.2s.3-.2 1.2-.4.6-.5.7-.8-.1-.7-.9-.9-.7-.1-1.5.2c-.2.1-.3.2-.4.3-.3.4-.2.9.1 1.2 0 .1.1.1.1.2zm-4.4 2.3c.4-.5.5-1.1.3-1.7-.6-.4-1.2-.7-1.9-.9-.4-.3-.9-.4-1.4-.3-.2 0-.3.1-.4.2 0 .3.1.5.2.7.2.3-.2.2-.1.5.1.5.5.8.9 1 .7.5 2.1.8 2.4.5zM8.7 3.9c-.4 0-.1.3-.1.3.5.7.7 1.6.5 2.5-.2.6-.7 1-1.2 1-.8 0-1.5-.2-2.1-.6-.3-.2 0 .4.1.7.6 1 1.7 1.5 2.9 1.3 1.1-.1 2-1 2.2-2.2.1-.8 0-1.5-.5-2.2-.6-.4-1.1-.7-1.8-.8zm-3.9.3c-.2.2-.5.3-.6.6-.2.4-.3.8-.4 1.3-.7-.1-1.4.1-2.1.4-.5.4-.9 1.1-.9 1.8.2-.4.5-.7.8-.9.7-.5 1.5-.6 2.3-.5.8.1.6.1.6.1.1 0 .2-.1.3-.2-.2-.5-.3-1-.2-1.5 0-.3.1-.7.2-1.1zm0 0s.1 0 0 0c.1 0 .1 0 0 0zM2 5.4c.3.3.7.3.9 0 .2-.3.1-.6-.1-.8-.6-.3-1.2-.5-1.9-.5-.3 0-.6.1-.8.2 0 0-.1.1-.1.2v.1c.7.2 1.3.5 2 .8z"></path>
</svg> */}

// https://www.finalfantasyxiv.com/freetrial/freestyleart-gallery/author015/

function Cover({ coverHidden, setCoverHidden }) {



    const hideCover = () => {
        setCoverHidden(true);
    };

    const coverVariants = {
        initial: { y: 0 },
        animate: { y: -1000 },
    };



    return (
        <motion.div
            id="homeCover"
            className='landing'
            initial={coverHidden ? "animate" : "initial"}
            animate={coverHidden ? "animate" : "initial"}
            variants={coverVariants}
            transition={{ duration: 1 }}
        >

            <div className="container auto bg-cover wbg">
                <div className="content">
                    <div className="main-img auto padd-t-100">
                        <img src={MainImg} alt="Final Fantasy" />
                    </div>
                    <div className='txt center'>
                        <h1>Adventure awaits you beyond the horizon</h1>
                    </div>
                    <div onClick={() => hideCover()} className="arrow auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" /><polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" /></g></svg>
                    </div>
                </div>

            </div>

        </motion.div>
    )
}

function Home({ coverHidden, setCoverHidden }) {

    return (
        <>
            <Cover coverHidden={coverHidden} setCoverHidden={setCoverHidden} />
            <motion.div id="home" className='landing'
                initial={{ opacity: 0, transition: { duration: 0.5 } }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}>

                <div className='homeVideo'>
                    <video autoPlay loop muted src={homeVideo}></video>
                </div>



                <section className={`${styles.paddings} relative z-10 container auto bg1 wbg`}>
                    <div className='fade-overlay'></div>
                    <div className='fade-overlay2'></div>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 h-full`}
                    >
                        <motion.div
                            variants={planetVariants('left')}
                            className={`flex-1 ${styles.flexCenter}`}
                        >
                            <div className='relative w-[85%]'>
                                <img className='w-[90%] mx-auto' src={marco} alt="frame" />
                                <img
                                    src={picture}
                                    alt="cuadro"
                                    className="w-[75%] h-auto absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('left', 'tween', 0.2, 1)}
                            className="flex-[0.75] flex justify-center flex-col"
                        >
                            <TitleText title={<>Unveil the Secrets of Eorzea</>} />
                            <div className="mt-[31px] flex flex-col gap-[24px]">
                                <p className='flex font-normal text-[18px] text-[#333333] leading-[32px]'>
                                    Welcome to Final Fantasy XIV, where realms merge with magic and swords. Join millions of players in this epic adventure and discover a world filled with thrilling challenges, memorable characters, and a vibrant community. Get ready to forge your own destiny in Eorzea!

                                </p>
                            </div>
                        </motion.div>
                    </motion.div>


                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className={`${styles.innerWidth} mx-auto flex lg:flex-row gap-8 h-full py-32`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 485 5.9">
                            <g>
                                <path class="left-l-w-01" d="M325,2.7c0-0.1,0-0.3,0.1-0.4l0.1-0.1h-194l-0.1,0.1c-0.1,0.3-0.3,0.5-0.5,0.6l0.1,0.1c0.2,0.2,0.3,0.4,0.3,0.7H325L325,2.7z"></path>
                                <path class="left-l-w-01" d="M326.5,3.4c-0.1,0.1-0.2,0.2-0.3,0.2l-0.7,0.2h20.3l0.8-0.6c0,0,0.1,0,0.1,0c0,0,0,0-0.1,0l-2.1-0.9h-17.1L326.5,3.4z"></path>
                                <path class="left-l-w-01" d="M122,3.7c0.3-0.4,0.8-0.5,1.3-0.4l0.6,0.2c0.2,0.1,0.3,0.2,0.5,0.3h3.1l0-0.2c0-0.3,0.2-0.6,0.4-0.7l0.1-0.1c0,0,0,0,0-0.1l-0.4-0.5h-4c0,0.1-0.1,0.2-0.2,0.3L122.9,3c-0.1,0.1-0.3,0.1-0.4,0l-0.5-0.6              c0-0.1-0.1-0.1-0.1-0.2H107c0,0-0.1,0.1-0.1,0.1l-0.6,0.6c-0.1,0.1-0.3,0.1-0.4,0l-0.5-0.6c0,0,0,0,0,0H17.1              c-0.7-0.5-1.1-1.2-1.2-2L15.8,0v0h0v0l-0.2,0.2c-0.2,1.5-1.4,2.6-2.9,2.7L12.6,3l0.2,0.2c1.5,0.1,2.7,1.2,2.9,2.7l0.2,0.2l0,0v0              l0.2-0.2c0.1-0.8,0.5-1.6,1.2-2L122,3.7L122,3.7z"></path>
                                <path class="left-l-w-01" d="M348.3,2.2L347.2,3c0,0-0.1,0-0.1,0c0,0,0,0,0.1,0l1.6,0.7h113.7l0.5-0.5c0.1-0.1,0.3-0.2,0.5-0.2l2.8,0.7H485V2.2H348.3z"></path>
                                <path class="left-l-w-01" d="M0,3c0,0.4,6.2,1.1,8.2,1.1C9.1,4,10,3.6,10.6,3C10,2.3,9.1,1.9,8.2,1.8C6.2,1.8,0,2.5,0,3z"></path>
                            </g>
                        </svg>

                        <motion.div
                            variants={fadeIn('down', 'tween', 0.2, 1)}
                            className="flex-[0.75] flex justify-center flex-col text-center"
                        >
                            <TitleText title={<>Discover FFXIV</>} />
                            <div className="mt-[31px] flex flex-col gap-[24px]">
                                <p className='flex font-normal text-[18px] text-[#333333] leading-[32px] mx-auto'>
                                    Soon

                                </p>
                            </div>
                        </motion.div>

                        <svg version="1.1" id="line-ffxiv" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 485 5.9" >
                            <g>
                                <path class="left-r-w-01" d="M90.7,3.3c0,0.1,0,0.3-0.1,0.4l-0.1,0.1h137.4l0.1-0.1c0.1-0.3,0.3-0.5,0.5-0.6l-0.1-0.1c-0.2-0.2-0.3-0.4-0.3-0.7H90.7L90.7,3.3z"></path>
                                <path class="left-r-w-01" d="M89.5,2.3l0.7-0.2h-9.8l-0.8,0.6c0,0-0.1,0-0.1,0c0,0,0,0,0.1,0l2.1,0.9h6.6l0.9-1.2C89.3,2.4,89.4,2.4,89.5,2.3z"></path>
                                <path class="left-r-w-01" d="M469.3,0.2L469.2,0l0,0v0L469,0.2c-0.1,0.8-0.5,1.6-1.2,2H237.1l-0.1,0.1c-0.3,0.4-0.8,0.5-1.3,0.4l-0.6-0.2c-0.2-0.1-0.3-0.2-0.5-0.3h-3.1l0,0.2c0,0.3-0.2,0.6-0.4,0.7L231,3.2c0,0,0,0,0,0.1l0.4,0.5h4              c0-0.1,0.1-0.2,0.2-0.3l0.6-0.6c0.1-0.1,0.3-0.1,0.4,0l0.5,0.6c0,0.1,0.1,0.1,0.1,0.2h140.8c0,0,0.1-0.1,0.1-0.1l0.6-0.6              c0.1-0.1,0.3-0.1,0.4,0l0.5,0.6c0,0,0,0,0,0h88.4c0.7,0.5,1.1,1.2,1.2,2l0.2,0.2v0h0v0l0.2-0.2c0.2-1.5,1.4-2.6,2.9-2.7l0.2-0.2              l-0.2-0.2C470.7,2.7,469.5,1.6,469.3,0.2z"></path>
                                <path class="left-r-w-01" d="M476.7,1.8c-0.9,0.1-1.7,0.5-2.3,1.1c0.6,0.7,1.5,1.1,2.3,1.1c2.1,0,8.2-0.7,8.2-1.1S478.8,1.8,476.7,1.8z"></path>
                                <path class="left-r-w-01" d="M79,2.9c0,0,0.1,0,0.1,0C79.1,2.9,79.1,2.9,79,2.9l-1.5-0.7H22.5l-0.5,0.5c-0.1,0.1-0.3,0.2-0.5,0.2l-2.8-0.7H0v1.6h77.9L79,2.9z"></path>
                            </g>
                        </svg>
                    </motion.div>
                </section>


                <div className="container auto bg2 wbg" id='expansions'>
                    <div className="content verticalalign">
                        <div className="column verticalalign">
                            <div className="row card-space auto padd-m-t-50">
                                <Link to='/realm-reborn' className='exp-card'><div className="exp-card-img exp-card-img1"></div></Link>
                                <div className=" exp-card"><div className="exp-card-img exp-card-img2"></div></div>
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
        </>
    );
}

export default Home;