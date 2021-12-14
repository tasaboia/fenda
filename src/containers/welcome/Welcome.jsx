import React from 'react'
import welcome from '../../assets/welcome.jpg';
import './welcome.css';

const Welcome = () => {
    return (
        <div className='Welcome'>
            <div className='welcome-container'>
                <div className='welcome-container-text'>
                    <h1 className="gradient-text">WELCOME</h1>
                </div>
                <img src={welcome}/>
                
            </div>
            
        </div>
    )
}

export default Welcome
