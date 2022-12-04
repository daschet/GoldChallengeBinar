import React, { useState } from 'react';
import Rate from "./Assets/Rate.png"
import Photo1 from "./Assets/Photo1.png"
import Photo2 from "./Assets/Photo2.png"
const Testimonial = () => {
    return (
        <div>
  <div className='container'>
    <div className='contanerCol'>
        <img src ={Photo1}/>
        <div className='itemtext'>
            <img src={Rate}/>
            <h5>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h5>
            <p>John Dee 32, Bromo</p>
        </div>
    </div>
  
    <div className='contanerCol'>
        <img src ={Photo2}/>
        <div className='itemtext'>
            <img src={Rate}/>
            <h5>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h5>
            <p>John Dee 32, Bromo</p>
        </div>
    </div>

    <div className='contanerCol'>
        <img src ={Photo1}/>
        <div className='itemtext'>
            <img src={Rate}/>
            <h5>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h5>
            <p>John Dee 32, Bromo</p>
        </div>
    </div>
</div>
</div>
    )
}
export default Testimonial;