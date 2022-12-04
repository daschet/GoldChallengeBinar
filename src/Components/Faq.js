import React, { useState } from 'react';

const Faq = () => {
    return (
        <div>
            <div className='faqcont'>
                <div className='faqtext'>
                    <h2>Frequently Aksed Questions</h2>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                </div>
                <div className='faqlist'>
                    <li>Apa saja syarat yang dibutuhkan?</li>
                    <li>Berapa hari minimal sewa mobil lepas kunci?</li>
                    <li>Berapa hari sebelumnya sabaiknya booking sewa mobil?</li>
                    <li>Apakah Ada biaya antar-jemput?</li>
                    <li>Bagaimana jika terjadi kecelakaan</li>
                </div>
            </div>
        </div>
    )
};

export default Faq;