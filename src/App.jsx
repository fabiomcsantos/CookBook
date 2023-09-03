import React from 'react';
import Root from './Routes/Root/';
import {register} from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './App.module.css';





register();

function App() {
    
    return (

        <>
            <Root/>
        </>
    )
}
export default App;