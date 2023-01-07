import React, {useEffect, useState} from "react";
import newImage from '../../../images/round-circle-1-8.png';
import newImage1 from '../../../images/blog-1-1.png';
import newImage2 from '../../../images/blog-1-2.png';
import newImage3 from '../../../images/blog-1-3.png';
import {QuestionItems} from "../../../components/HomeData";
import {homeService} from "../home.api";
import {baseUrl} from '../../../config/config';

export default function News(props) {


    const {data} = props;

    const [loading, setLoading] = useState(false);




    const items = data.map((item, index) => {
        return (

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-blog-style-one">
                        <div className="image-block">
                            <div className="inner-block">
                                <img src={`${baseUrl}`+item.media} alt="Awesome Image"/>
                                <div className="date-block">
                                    30 April, 2019
                                </div>
                            </div>
                        </div>
                        <div className="text-block">
                            <div className="meta-info">
                                <a href="#">By Admin</a>
                                <span className="sep">.</span>
                                <a href="#">2 Comments</a>
                            </div>
                            <h3><a href="blog-details.html">{item.title}</a></h3>
                            <p>
                                {item.description}
                            </p>
                            <div className="line-block"></div>
                            <a href="" className="more-link">Read More</a>
                        </div>
                    </div>
                </div>

        )
    });

    return (
        <>

            <section className="blog-style-one" id="blog">
                <div className="container">
                    <div className="block-title text-center">
                        <img src={newImage} alt="Awesome Image" className="wow rotateIn"
                             data-wow-duration="1000ms"/>
                        <h2>آخرین مطالب خواندنی دنیای وب </h2><br/><h4>با تکنولوژی همراه باشید</h4>
                    </div>
                    <div className="row">
                        {items}
                    </div>
                </div>
            </section>

        </>

    )
}