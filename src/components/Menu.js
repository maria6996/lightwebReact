import React, {useState} from "react";
import {MenuItems} from "./HomeData";
import {Link} from "react-router-dom";

export default function Menu() {

    const [dropdown, setDropdown] = useState(false);
    const [click, setClick] = useState(false);


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


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const menuItems = MenuItems.map((item)=>{
        return(
            item.subNav ? (
                <li className="scrollToLink" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {/*<a href="#services" > kahsdka</a>*/}
                    <a href="#service">خدمات</a>
                    {/*<Link to={item.itemId} className='scrollToLink' onClick={closeMobileMenu}>{item.title}</Link>*/}
                    <ul className="sub-menu">
                        {item.subNav.map((item1)=>{
                                return <li className="scrollToLink" ><Link to={item1.itemId} className='scrollToLink' onClick={closeMobileMenu}>{item1.title}</Link></li>
                            })
                        }
                    </ul>
                </li> ):
                <li className="scrollToLink"><Link to='/' className='scrollToLink' onClick={closeMobileMenu}>{item.title}</Link></li>
        )});
return(
    <>
        {menuItems}
        </>
)

}