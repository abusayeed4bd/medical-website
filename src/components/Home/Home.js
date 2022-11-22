import React from 'react';
import backgroundImage from "../../assets/testb.jpg"
import DetailsSection from './DetailsSection';
import SideNav from './SideNav';
import profileImage from '../../assets/DSC_0649.jpg'
import AssociateInstitute from '../Header/MegaMenus/AssociateInstitute';

const Home = () => {
    return (
        <div >
            <section style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: "rgba(0,0,0,.4)", backgroundBlendMode: "overlay" }} className='bg-img'>
                <div className="container py-5 text-start text-white">
                    <h2 className='display-5 fw-bold border-start border-danger ps-3 border-5'>DR. A.A.M SHAZZADUR RAHMAN</h2>
                    <div className="ps-3">
                        <p className='fs-6 mb-0'>Associates Professor</p>
                        <p className='fs-6 text-decoration-italic'>Medicine</p>
                    </div>
                </div>
            </section>

            <section>

            </section>

            <section>
                <div className="container py-5">
                    <div >
                        <img src={profileImage} alt="" />
                        <h3 className='text-danger fw-bold'>DR. A.A.M SHAZZADUR RAHMAN</h3>
                        <p className='mb-0 fs-6 fw-bold text-primary'>Associates Professor</p>
                        <p className='mb-0 fs-6 fw-bold text-primary'>Medicine</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <SideNav />
                        </div>
                        <div className="col-lg-8">
                            <DetailsSection />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;