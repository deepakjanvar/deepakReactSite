import React from 'react'
import { NavLink } from 'react-router-dom';
import home from "./img/home.svg"


function Common(props) {
  return (
    <>
      <section id='header' className='d-flex align-items-center justify-content-center'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">


                <div className='col-md-6 pt-lg-0 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1>
                    {props.name}
                    <span className='brand-name'> ThapaTechnical</span>
                  </h1>
                  <h3 className='my-3'>
                    We are the team of talented developer making websites
                  </h3>
                  <div className="mt-3">
                    <NavLink to={props.visit} className='btn-get-started'>{props.btname}</NavLink>
                  </div>
                </div>
                <div className=' col-lg-6 order-1 order-lg-2 header-img'>
                  <img src={props.imgsrc} alt="img" className=' img-fluid animated' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
