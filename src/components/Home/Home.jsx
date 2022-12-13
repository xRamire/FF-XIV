import React from 'react';
import './home.css' ;
import MainImg from '../../assets/img/Final-Fantasy-XIV-home-Logo.png';

function Home(props) {
    return (
        <div id="Home" className='landing'>
            <div className="container auto bg1">
                <div className="content padd-t-100">
                    <div class="main-img auto">
                        <img src={MainImg} alt="Final Fantasy" />
                    </div>
                    <div className='txt center'>
                        <h1>Adventure awaits you beyond the horizon</h1>
                    </div>
                </div>

            </div>

            <div className="container auto bg2">
                <div className="content verticalalign">
                    <div className="expansions column verticalalign">
                        <div className="row card-space auto padd-m-t-50">
                            <div className=" exp-card"><div className="exp-card-img exp-card-img1"></div></div>
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
        </div>
    );
}

export default Home;