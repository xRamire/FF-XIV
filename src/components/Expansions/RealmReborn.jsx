import React from 'react';
import './expansions.css';

import MainImg from '../../assets/img/realmreborn-logo.png';
import Particles from '../../assets/img/particles.mp4';


const RealmReborn = () => {
    return (
        <div id='realmReborn' className='landing'>
            <video className='particles' autoPlay loop muted id="myVideo">
                <source src={Particles} type='video/mp4' />
            </video>
            <div className="container auto">
                <div className="content">
                    <div class="main-img auto padd-t-100">
                        <img src={MainImg} alt="Final Fantasy" />
                    </div>
                    <div className='txt center'>
                        <h1>Adventure awaits you beyond the horizon</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RealmReborn;
