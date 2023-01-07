import React, { useState } from 'react';
import {MenuItems} from '../HomeData';
// import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>

                {MenuItems.map((item, index) => {
console.log(item.title);
                    return (
                        <li key={index}>
                            <Link
                                // className={item.cName}
                                to={item.path}
                                onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}

        </>
    );
}

export default Dropdown;