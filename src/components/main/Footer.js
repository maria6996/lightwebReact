import React from "react";

export default function Footer() {

    return (
        <>

            <footer className="site-footer">
                <span className="bubble-1"></span>
                <span className="bubble-2"></span>
                <span className="bubble-3"></span>
                <span className="bubble-4"></span>
                <span className="bubble-5"></span>
                <span className="bubble-6"></span>
                <div className="container">
                    <div className="inner-container">
                        <div className="row">
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <a href="index.html"><img src="images/logo-1-1.png" alt="Awesome Image"/></a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <div className="widget-title">
                                        <h3>تماس با ما</h3>
                                    </div>
                                    <ul className="contact-list">
                                        <li>
                                            <a href="tel:+989107526651">0910-752-6651</a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <div className="widget-title">
                                        <h3>خدمات</h3>
                                    </div>
                                    <ul className="links-list">
                                        <li><a href="#"> طراحی و برنامه نویسی وب</a></li>
                                        <li><a href="#">طراحی اپلیکیشن اختصاصی</a></li>
                                        <li><a href="#">سئو بهینه سازی</a></li>
                                        <li><a href="#"> طراحی لوگو و لوگوتایپ</a></li>
                                        <li><a href="#">فروشگاه ساز اینترنتی لایت وب</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <div className="widget-title">
                                        <h3>لینک های مفید</h3>
                                    </div>
                                    <ul className="links-list">
                                        <li><a href="#">درباره ما</a></li>
                                        <li><a href="#">تماس با ما</a></li>
                                        <li><a href="#">سوالات متداول</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <div className="widget-title">
                                        <h3>شبکه های اجتماعی</h3>
                                    </div>
                                    <div className="social-block">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-dribbble"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bottom-footer text-center">
                <div className="container">
                    <p>&copy; copyright 2019 by <a href="http://www.lightweb.ir">LightWeb.ir</a></p>
                </div>
            </div>
        </>

)
}