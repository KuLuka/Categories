import React from 'react';
import { SIP } from './RasturaciSenaList';
import RasturaciSenaProducts from './RasturaciSenaProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';

const RasturaciSena = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>SIP Šempeter</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>SIP je slovenački proizvođač poljoprivrednih mašina sa više od 65 godina tradicije.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {SIP.map(el => (
                        <RasturaciSenaProducts el={el} />
                    ))}
                </div>
            </div>

        </>
    )
}


export default RasturaciSena;