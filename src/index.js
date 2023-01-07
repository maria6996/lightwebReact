import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import faIR from 'antd/lib/locale/fa_IR';
import { ConfigProvider } from 'antd';

const persianAppConfig = {
    // direction: "rtl",
    locale: faIR,
};

//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

ReactDOM.hydrate(<ConfigProvider  {...persianAppConfig}>
    <App />
</ConfigProvider>
    , document.getElementById('root'));


//
// ReactDOM.render(
//     <ConfigProvider  {...persianAppConfig}>
//         <App />
//     </ConfigProvider>,
//   document.getElementById('root')
// );

