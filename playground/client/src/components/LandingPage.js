import React from 'react';
import Content from './Content';
import Search from './Search';
import Sidebar from './Sidebar';
import './Landingpage.css';

function LandingPage   () {
    return (
        <div>
        
        <div className='landingpage_container'>
            <Sidebar/>
            <div>
            <Search/>
            <Content/>
            </div>
        </div>
        </div>
    )
}

export default LandingPage;