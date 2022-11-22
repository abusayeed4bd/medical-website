import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowDown, faArrowDown19, faArrowDownShortWide, faBook, faBuilding, faBuildingColumns, faEnvelope, faHome, faHospital } from '@fortawesome/free-solid-svg-icons'
import AssociateInstitute from './MegaMenus/AssociateInstitute';
import AcademicDropdown from './MegaMenus/AcademicDropdown';
import DeptDropdown from './MegaMenus/DeptDropdown';

const TopNav = () => {
    return (
        <nav class="navbar navbar-expand-lg py-1 top-nav-bg">
            <div class="container-fluid">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav top-nav mx-auto mb-2 mb-lg-0 text-uppercase positon-relative">


                        <li className='nav-item border-end  px-2'><a className='nav-link fw-normal text-white' href="#"><FontAwesomeIcon icon={faHome} /> NEMC</a></li>
                        <li className='nav-item border-end  px-2'><a className='nav-link fw-normal text-white' href="#"><FontAwesomeIcon icon={faAngleDown} /> Academic</a>
                            <AcademicDropdown />
                        </li>
                        <li className='nav-item border-end px-2'><a className='nav-link fw-normal text-white' href="#"><FontAwesomeIcon icon={faBook} /> Dept & feculty</a>
                            <DeptDropdown />
                        </li>
                        <li className='nav-item border-end  px-2'><a className='nav-link fw-normal text-white' href="#"><FontAwesomeIcon icon={faBuildingColumns} /> Campus life</a></li>
                        <li className='nav-item border-end  px-2'><a className='nav-link fw-normal text-white' href="#"><FontAwesomeIcon icon={faHospital} /> Hospital</a></li>
                        <li className='nav-item border-end  px-2'><a id='associate-item' className='nav-link fw-normal text-white' href="#"><FontAwesomeIcon icon={faBuilding} /> Associates institutes</a>
                            <AssociateInstitute />
                        </li>
                        <li className='nav-item border-end  px-2'><a className='nav-link fw-normal text-white' href="#"><FontAwesomeIcon icon={faEnvelope} />Contact us</a></li>
                        <li className='nav-item   px-2'><a className='nav-link fw-normal text-white' href="#">Corona Corner</a></li>


                    </ul>
                    {/* <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    );
};

export default TopNav;