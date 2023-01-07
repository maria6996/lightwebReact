import React from "react";
import featImage from '../images/moc-1-1.png';
import featImage1 from '../images/color2.png';


export default function Features() {

    return(
        <>
            <section className="feature-style-two" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-block">
                                <img src={featImage} alt="Awesome Image"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-block">
                                <div className="block-title ">
                                    <img src={featImage1} alt="Awesome Image" className="wow rotateIn"
                                         data-wow-duration="1000ms"/>
                                    <h2>طراحی متفاوت را در کار های ما ببینید </h2>
                                </div>
                                <p>استفاده از بروز ترین تکنولوژی های دنیا </p>
                                <ul className="feature-lists">
                                    <li><i className="fa fa-check"></i> پشتیبانی بلند مدت</li>
                                    <li><i className="fa fa-check"></i>کد نویسی تمیز و استاندارد</li>
                                    <li><i className="fa fa-check"></i>قابلیت توسعه و بروز رسانی بلند مدت</li>
                                </ul>
                                <a href="#" className="feature-btn">آشنایی بیشتر</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
    )
}