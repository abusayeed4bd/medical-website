import React from 'react';
import facebookPage from '../../assets/Screenshot_2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer >
            <div className='bg-dark py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h5 className='text-white text-start'>IMPORTANT LINKS</h5>
                            <ul className='navbar-nav text-muted text-start'>
                                <li><a className='nav-link' href="#">Web mail</a></li>
                                <li><a className='nav-link' href="#">Contact</a></li>
                                <li><a className='nav-link' href="#">Campus tour</a></li>
                                <li><a className='nav-link' href="#">Govorning body</a></li>
                                <li><a className='nav-link' href="#">notices</a></li>


                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h5 className='text-white text-start'>FACILITIES</h5>
                            <ul className='navbar-nav text-muted text-start'>
                                <li><a className='nav-link' href="#">Auditorium</a></li>
                                <li><a className='nav-link' href="#">Campus Lab</a></li>
                                <li><a className='nav-link' href="#">Hostel</a></li>
                                <li><a className='nav-link' href="#">Library</a></li>
                                <li><a className='nav-link' href="#">Playground</a></li>
                                <li><a className='nav-link' href="#">Transport</a></li>


                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h5 className='text-white text-start'>SITEMAP</h5>
                            <ul className='navbar-nav text-muted text-start'>
                                <li><a className='nav-link' href="#">Archive</a></li>
                                <li><a className='nav-link' href="#">Careers</a></li>
                                <li><a className='nav-link' href="#">Campus</a></li>
                                <li><a className='nav-link' href="#">Hospital</a></li>
                                <li><a className='nav-link' href="#">Contact</a></li>



                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h5 className='text-white text-start'>LIKE US ON FACEBOOK</h5>
                            <img src={facebookPage} className="img-fluid" alt="" />
                            <h5 className='text-white text-start'>CONNECT WITH US</h5>
                            <div className="d-flex gap-2">
                                <FontAwesomeIcon className='text-white  fs-1' icon={faFacebookSquare} />
                                <FontAwesomeIcon className='text-white  fs-1' icon={faTwitterSquare} />
                                <FontAwesomeIcon className='text-white  fs-1' icon={faYoutubeSquare} />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "black" }}>
                <div className="container d-flex justify-content-between text-muted py-3">
                    <p>© North East Medical College & Hospital</p>
                    <p>Developed by: <a href="#">IT Lab Solutions Ltd.</a></p>
                </div>
            </div>


        </footer>
    );
};

export default Footer;