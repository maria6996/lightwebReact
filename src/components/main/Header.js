import React, {useEffect, useState} from "react";
// import {Menu, Icon} from 'antd';
import {Link, useLocation} from "react-router-dom";
// import './Navbar.css';
import Dropdown from './Dropdown';
import '../../styles/style.css';
import Menu from '../Menu';
import {MenuItems} from '../HomeData';
import logo from '../../images/logo.png';
import banner from '../../images/banner-moc-1-2.png';

import { useScrollPosition } from '@n8tb1t/use-scroll-position'


const Header = () => {


    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [head, setHeader] = useState(false);

    useScrollPosition(({ prevPos, currPos }) => {

        if(currPos.y < 0){
            setHeader(true)
        }else{
            setHeader(false)
        }
        // console.log('currPos.x',currPos.x)
        // console.log('currPos.y',currPos.y)
    });

    //
    // useEffect(() => {
    //     console.log('window.pageYOffset,',window.pageYOffset);
    // }, [window.pageYOffset]);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };



    const location = useLocation();
    const [headerSide, setHeaderSide] = useState(location.pathname === '/' ? "true" : "false");

    return (
        <>
            <div className='page-wrapper'>
                <header className="site-header header-one home-page-two">

                        <nav className= {head? `navbar navbar-expand-lg navbar-light header-navigation stricky stricky-fixed slideInDown animated` : `navbar navbar-expand-lg navbar-light header-navigation stricky`}  >

                        <div className="container clearfix">
                            <div className="main-navigation" id="main-nav-bar">
                                <ul className="one-page-scroll-menu navigation-box">

                                    <Menu/>

                                </ul>
                            </div>
                            <div className="logo-box clearfix">
                                <a className="navbar-brand" href="index.html">
                                    <img src={logo} alt="Awesome Image"/>
                                </a>
                                <button className="menu-toggler" data-target="#main-nav-bar">
                                    <span className="fa fa-bars"></span>
                                </button>
                            </div>

                        </div>
                    </nav>
                </header>

                {headerSide === "true" ?
                    <>
                        <section class="banner-style-one home-page-two" id="banner">
                            <span class="bubble-1"></span>
                            <span class="bubble-2"></span>
                            <span class="bubble-3"></span>
                            <span class="bubble-4"></span>
                            <span class="bubble-5"></span>
                            <span class="bubble-6"></span>
                            <img src={banner} class="banner-mock" alt="Awesome Image"/>
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-8">
                                        <div class="content-block">
                                            <h3>طراحی وب سایت <br/>طراحی اپلیکیشن <br/>رابط کاربری UI/UX</h3>
                                            <p>گروه لایت وب ارايه دهنده خدمات تحت وب
                                                <br/>
                                                دریافت مشاوره تخصصی <br/>
                                                آموزش برنامه نویسی خصوصی
                                            </p>

                                            <div class="button-block">
                                                <a href="#" class="banner-btn"><i class="fa fa-play"></i>تماس با ما</a>
                                                <a href="#" class="banner-btn"><i class="fa fa-apple"></i>آشنایی بیشتر
                                                    با ما</a>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                    : <section className="inner-banner">
                        <div className="container">
                            <ul className="thm-breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li><span className="sep">.</span></li>
                                <li><span className="page-title">Blog Page</span></li>
                            </ul>
                            <h2>Blog Listing</h2>
                        </div>
                    </section>
                }


            </div>

        </>
    )
}

export default Header;