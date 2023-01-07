import React, {useState} from 'react';
import '../../App.css';
import Header from "../../main/Header";
import MainLayout from '../main/MainLayout';
import {BrowserRouter as Router} from "react-router-dom";
import Service from "../Service";
import Questions from "../Questions";
import Features from "../Features";
import {Collapse} from 'antd';
import News from "../News";

// import 'antd/dist/antd.css';
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';

const {Panel} = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function Home() {


    const [clicked, setClicked] = useState(false);
    const handleChange = () => {
        setClicked(!clicked);
    }

    return (
        <>

            <MainLayout>
                <div className='content'>

                    <Service/>

                    <Features/>

                    <Questions/>
                    <News />
                </div>

            </MainLayout>


        </>
    );
}
