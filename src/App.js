import { Slide } from '@mui/material';
import React from 'react';
import './App.css';

import { Footer, Header , NavBar, Cards, SocialMedia, Welcome } from './containers';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <NavBar />
                <Welcome/>
                <Header/>
                <Cards/>
                <Footer/>
                
            </div>
            
        </div>
    )
}

export default App
