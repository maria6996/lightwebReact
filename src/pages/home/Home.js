import React, {useState, useEffect} from 'react';
import '../../App.css';
import Header from "../../components/main/Header";
import MainLayout from '../../components/main/MainLayout';
import {BrowserRouter as Router} from "react-router-dom";
import Service from "./component/Service";
import Questions from "./component/Questions";
import Features from './component/Features';
import {Collapse} from 'antd';
import News from "./component/News";
import KhabarNameh from "./component/KhabarNameh";

import {homeService} from './home.api';
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

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleChange = () => {
        setClicked(!clicked);
    }

    useEffect(() => {
        homeData();
    }, []);

    function homeData() {

        setLoading(true);
        homeService().then((r) => {
            console.log('r.data', r.data.data);
            setArticles(r.data ? r.data.data : []);
        }).catch(() => {

        }).finally(() => {
            setLoading(false);
        });

    }

    return (
        <>

            <MainLayout loading={loading}>
                <div className='content'>

                    <Service/>
                    <Features/>
                    <Questions/>
                    <News data={articles}/>
                    <KhabarNameh />
                </div>

            </MainLayout>


        </>
    );
}
