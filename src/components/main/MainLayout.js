import React from 'react';
import '../../App.css';
import Header from "../main/Header";
import Footer from '../main/Footer';
import {BrowserRouter as Router} from "react-router-dom";

const MainLayout = ({children}) => {

    return (
        <>
            <div className=''>
                <Header/>

                {children}



                <Footer />



            </div>

        </>
    )

}

export default MainLayout;