import React from 'react';
import logo from '../../assets/nemch_logo3.jpg'

const BottomNav = () => {
    return (
        <nav className='bg-white'>
            <div className="container">
                <div className="row d-flex ">
                    <div className="col-lg-3">
                        <img className='img-fluid mt-2' src={logo} alt="" />
                    </div>
                    <div className="col-lg-2 border-end pt-2">
                        <a className='text-decoration-none text-black fw-semibold fs-6' href="#">Affiliation</a>
                        <p className='nav-description'>Discover who we are and what we do in NEMCH.</p>
                    </div>
                    <div className="col-lg-2 pt-2">
                        <a className='text-decoration-none text-black fw-semibold fs-6' href="#">Our Doctors</a>
                        <p className='nav-description'>We have the best team of Doctors</p>
                    </div>
                    <div className="col-lg-2 bg-primary text-white pt-2 me-4    ">
                        <h6>Corona Hotline Number</h6>
                        <p className='m-0 nav-description'>01794448908 [Emergency]</p>
                        <p className='m-0 nav-description'>01794448906 [Reception]</p>
                    </div>

                    <div className="col-lg-2 bg-danger text-white pt-2 ">
                        <h6>Flood Helpline</h6>

                        <p className='m-0 nav-description'>01794448919</p>
                        <p className='m-0 nav-description'>01794448921</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default BottomNav;