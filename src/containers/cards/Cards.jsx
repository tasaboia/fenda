import React from 'react'
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';
import img10 from '../../assets/img10.jpg';
import img11 from '../../assets/img11.jpg';
import img12 from '../../assets/img12.jpg';
import img18 from '../../assets/img18.jpg';
import img17 from '../../assets/img17.jpg';

import './cards.css';


const Cards = () => {
    return (
        <div className='Slides'>
                <div className='Slides-Card'>
                    <a target="_blank" href={img1}>
                        <img className='imgfront' src={img1}/> 
                        <img className='imgback' src={img2}/>
                        
                    </a>
                    <div className='Slides-Card-container'>
                        <h4><a href="#shopping">With All My Heart</a></h4>
                        <p className='Slides-Card-container-price'>R$ 90,00 </p>
                    </div>
                </div>
                <div className='Slides-Card'>
                    <a target="_blank" href={img3}>
                        <img className='imgfront' src={img3}/> 
                        <img className='imgback' src={img4}/>
                        
                    </a>
                    <div className='Slides-Card-container'>
                        <h4><a href="#shopping">With All My Heart</a></h4>
                        <p className='Slides-Card-container-price'>R$ 90,00 </p>
                    </div>
                </div>
                <div className='Slides-Card'>
                    <a target="_blank" href={img5}>
                        <img className='imgfront' src={img5}/> 
                        <img className='imgback' src={img18}/>
                        
                    </a>
                    <div className='Slides-Card-container'>
                        <h4><a href="#shopping">With All My Heart</a></h4>
                        <p className='Slides-Card-container-price'>R$ 90,00 </p>
                    </div>
                </div>
                <div className='Slides-Card'>
                    <a target="_blank" href={img7}>
                        <img className='imgfront' src={img7}/> 
                        <img className='imgback' src={img12}/>
                        
                    </a>
                    <div className='Slides-Card-container'>
                        <h4><a href="#shopping">With All My Heart</a></h4>
                        <p className='Slides-Card-container-price'>R$ 90,00 </p>
                    </div>
                </div>
                
        </div>
    )
}

export default Cards
