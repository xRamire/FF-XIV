import React from 'react';
import './home.css' ;
import MainImg from '../../assets/img/Final-Fantasy-XIV-home-Logo.png';
import Exp1 from '../../assets/img/realmreborn.png';
import Exp2 from '../../assets/img/heavensward.png';
import Exp3 from '../../assets/img/stormblood.png';
import Exp4 from '../../assets/img/shadowbringers.png';
import Exp5 from '../../assets/img/endwalker.png';



function Home(props) {
    return (
        <div id="Home" className='landing'>
            <div className="container auto">
                <div className="content">
                    <div class="main-img auto">
                        <img src={MainImg} alt="Final Fantasy" />
                    </div>
                    <div className='txt center'>
                        <h1>Adventure awaits you beyond the horizon</h1>
                    </div>
                    <div className='line'></div>
                    <div className="expansions column">
                        <div className="row">
                            <div className="auto exp-card margin-r-5"><img src={Exp1} alt="realm reborn" /></div>
                            <div className="auto exp-card margin-l-5"><img src={Exp2} alt="realm reborn" /></div>
                        </div>
                        <div className="row">
                            <div className="auto exp-card margin-r-5"><img src={Exp3} alt="realm reborn" /></div>
                            <div className="auto exp-card margin-l-5"><img src={Exp4} alt="realm reborn" /></div>
                        </div>
                        <div className="auto exp-card"><img src={Exp5} alt="realm reborn" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;