import React from 'react';

const DeptDropdown = () => {
    return (
        <div id='associate' className="row bg-white p-3 position-absolute top-100 start-0">
            <div className="col-lg-3 col-3 text-start">
                <ul className="navbar-nav d-flex flex-column gap-0 dropdown">
                    <li><a className='nav-link' href="#">MBBS</a></li>
                    <li><a className='nav-link' href="#">BDS</a></li>
                    <li><a className='nav-link' href="#">Intarnship</a></li>
                    <li><a className='nav-link' href="#">Notice</a></li>
                    <li><a className='nav-link' href="#">Academic staff</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-3 text-start">
                <ul className="navbar-nav d-flex flex-column gap-0 dropdown">
                    <li><a className='nav-link' href="#">Prospectus</a></li>
                    <li><a className='nav-link' href="#">Phase comitte</a></li>
                    <li><a className='nav-link' href="#">Post gradguet</a></li>
                    <li><a className='nav-link' href="#">Result </a></li>
                    <li><a className='nav-link' href="#">Class routine</a></li>
                </ul>
            </div>

            <div className="col-lg-6 col-3 text-start">
                <ul className="navbar-nav d-flex flex-column gap-0 dropdown">
                    <li><a className='nav-link' href="#">Prospectus</a></li>
                    <li><a className='nav-link' href="#">Phase comitte</a></li>
                    <li><a className='nav-link' href="#">Post gradguet</a></li>
                    <li><a className='nav-link' href="#">Result </a></li>
                    <li><a className='nav-link' href="#">Class routine</a></li>
                </ul>

            </div>
        </div>
    );
};

export default DeptDropdown;