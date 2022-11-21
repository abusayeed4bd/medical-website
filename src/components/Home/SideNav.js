import React from 'react';

const SideNav = () => {
    return (
        <div className=''>
            <ul className='navbar-nav'>
                <li><a className='nav-link border border-dark text-primary p-2 fw-semibold mb-1' href="#speciality-subject">Speciality Subject</a></li>
                <li><a className='nav-link border border-dark text-primary p-2 fw-semibold mb-1' href="#training">Training</a></li>

                <li><a className='nav-link border border-dark text-primary p-2 fw-semibold mb-1' href="#academic-qualification">Academic</a></li>
                <li><a className='nav-link border border-dark text-primary p-2 fw-semibold mb-1' href="#experiences">Experiences</a></li>
                <li><a className='nav-link border border-dark text-primary p-2 fw-semibold mb-1' href="#publications">Research and publication</a></li>
                <li><a className='nav-link border border-dark text-primary p-2 fw-semibold mb-1' href="#area-of-interest">Area of interest</a></li>
                <li><a className='nav-link border border-dark text-primary p-2 fw-semibold mb-1' href="#expertise">Expertise</a></li>
                <li><a className='nav-link border border-dark text-primary p-2 fw-semibold mb-1' href="#affiliation">Affiliation and contribution</a></li>
            </ul>
        </div>
    );
};

export default SideNav;