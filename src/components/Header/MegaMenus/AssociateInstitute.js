import React from 'react';
import nursing from '../../../assets/nurse-300x169.jpg'
import cancer from '../../../assets/canc.jpg'
import helth from '../../../assets/assoc-300x169.jpg'
import denter from '../../../assets/dntal-300x169.jpg'

const AssociateInstitute = () => {
    return (

        <div id='associate' className="row bg-white p-3 position-absolute top-100 start-0">
            <div className="col-lg-3 col-3 text-start">
                <img className='img-fluid' src={nursing} alt="" />
                <a className='text-decoration-none text-black py-2 ' href="#">Nursing Institute</a>
            </div>
            <div className="col-lg-3 col-3 text-start">
                <img className='img-fluid' src={helth} alt="" />
                <a className='text-decoration-none text-black py-2 ' href="#">Institute of helth technology</a>
            </div>
            <div className="col-lg-3 col-3 text-start">
                <img className='img-fluid' src={cancer} alt="" />
                <a className='text-decoration-none text-black py-2 ' href="#">North east cancer hospital</a>
            </div>
            <div className="col-lg-3 col-3 text-start">
                <img className='img-fluid' src={denter} alt="" />
                <a className='text-decoration-none text-black py-2 ' href="#">Dental medical college</a>
            </div>
        </div>

    );
};

export default AssociateInstitute;