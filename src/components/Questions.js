import React, {useState} from "react";
import {QuestionItems} from "./HomeData";
import {Collapse} from "antd";
import {PlusOutlined, MinusOutlined,CaretRightOutlined} from '@ant-design/icons';

import 'antd/dist/antd.css';

const {Panel} = Collapse;

export default function Questions() {

    const qItems = QuestionItems;
    const [clicked, setClicked] = useState(false);

    const handleChange = (e) => {
        console.log('eee',e);
        setClicked(!clicked);
    }

    return (

        <>


            <section className="faq-style-one">
                <div className="container">
                    <div className="block-title text-center">
                        <img src="images/round-circle-1-7.png" alt="Awesome Image" className="wow rotateIn"
                             data-wow-duration="1000ms"/>
                        <h2>سولات متداول <br/>شاید سوال شما هم باشد!</h2>
                    </div>
                    <Collapse

                        // expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        className="site-collapse-custom-collapse"

                        expandIcon={({isActive}) =>  isActive ? <MinusOutlined /> : <PlusOutlined />} className="accrodion-grp" defaultActiveKey={['1']}>
                        {
                            qItems.map((item) => {
                                return (
                                    <Panel header={item.title} key={item.key}>
                                        <p>{item.description}</p>
                                    </Panel>
                                )
                            })
                        }
                    </Collapse>

                </div>
            </section>


        </>
    )
}