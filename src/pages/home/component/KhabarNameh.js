import React from "react";

export default function KhabarNameh() {
    return(

        <section className="subscribe-style-one">
            <div className="container ">
                <div className="block-title text-center">
                    <img src="images/round-circle-1-8.png" alt="Awesome Image" className="wow rotateIn"
                         data-wow-duration="1000ms"/>
                    <h3>خبرنامه گروه لایت وب </h3><br/><h4> جشنواره ها و تخفیف ها را از دست ندهید</h4>
                </div>

                <form className="subscribe-form" action="inc/mailchimp/subscribe.php">
                    <input type="text" name="email" placeholder="شماره موبایل خود را وارد کنید" />
                        <button type="submit">بله حتما!</button>
                </form>
            </div>
        </section>
    )
}