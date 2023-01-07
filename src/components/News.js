import React from "react";
import newImage from '../images/round-circle-1-8.png';
import newImage1 from '../images/blog-1-1.png';
import newImage2 from '../images/blog-1-2.png';
import newImage3 from '../images/blog-1-3.png';

export default function News() {

    return(
        <>
            <section className="blog-style-one" id="blog">
                <div className="container">
                    <div className="block-title text-center">
                        <img src={newImage} alt="Awesome Image" className="wow rotateIn"
                             data-wow-duration="1000ms"/>
                        <h2>آخرین مطالب خواندنی دنیای وب </h2><br/><h4>با تکنولوژی همراه باشید</h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-blog-style-one">
                                <div className="image-block">
                                    <div className="inner-block">
                                        <img src={newImage1} alt="Awesome Image"/>
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
                                    <h3><a href="blog-details.html">Pre and post launch mobile app marketing pitfalls to
                                        avoid</a></h3>
                                    <p>There are many variations of passages of available but majority have alteration in
                                        some
                                        by inject humour or random words.</p>
                                    <div className="line-block"></div>
                                    <a href="blog-details.html" className="more-link">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-blog-style-one">
                                <div className="image-block">
                                    <div className="inner-block">
                                        <img src={newImage2} alt="Awesome Image"/>
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
                                    <h3><a href="blog-details.html">Social currency high perfor- mance keywords or</a></h3>
                                    <p>There are many variations of passages of available but majority have alteration in
                                        some
                                        by inject humour or random words.</p>
                                    <div className="line-block"></div>
                                    <a href="blog-details.html" className="more-link">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-blog-style-one">
                                <div className="image-block">
                                    <div className="inner-block">
                                        <img src={newImage3} alt="Awesome Image"/>
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
                                    <h3><a href="blog-details.html">Prioritize these line items quarterly sales are at </a>
                                    </h3>
                                    <p>There are many variations of passages of available but majority have alteration in
                                        some
                                        by inject humour or random words.</p>
                                    <div className="line-block"></div>
                                    <a href="blog-details.html" className="more-link">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}