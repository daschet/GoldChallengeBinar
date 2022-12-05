import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const BlueBox = () => {
    return (
        <div>
            <div className='blue'>
                <div className='blueBoi'>
                    <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h5>
                    <Link to = {'/carimobil'}>
                        <button className='tombol2'>
                        <p>Mulai Sewa Mobil</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )}

export default BlueBox;