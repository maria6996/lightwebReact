import React from 'react';
import {ServiceItems} from '../../../components/HomeData';
import roundcircle from '../../../images/round-circle-1-2.png';
import color from '../../../images/color1.png';
const Service = ({props}) => {




    return (
        <>

            <section className="services-style-one" id="service">
                <div className="container">
                    <div className="block-title text-center">
                        <img src={color} alt="Awesome Image" className="wow rotateIn"
                             data-wow-duration="1000ms"/>
                        <h2>خدمات گروه لایت وب</h2>
                    </div>
                    <div className="row">
                        {ServiceItems.map((item,index)=>{
                                return(
                                    <div className="col-lg-4 col-md-6 col-sm-12 serviceItem">
                                        <div className="single-service-one">
                                            <div className="hover-block"></div>
                                            <div className="text-center"><i className="opins-icon-smartphone"></i>
                                                <h3>{item.title} </h3></div>
                                            <p>{item.description}</p>
                                            <div className="line-block"></div>
                                            <a href="#" className="more-link">{item.link}</a>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </section>







        </>
    )
}

export default Service;