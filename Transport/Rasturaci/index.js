import React from 'react';
import { SIP, Majevica } from './RasturaciList';
import RasturaciProducts from './RasturaciProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const Rasturaci = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>SIP Šempter</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>SIP je slovenački proizvođač poljoprivrednih mašina sa više od 65 godina tradicije.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {SIP.map(el => (
                        <RasturaciProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Majevica</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Sinonim za pouzdanog proizvođača kvalitetne poljoprivredne mehanizacije.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Majevica.map(el => (
                        <RasturaciProducts el={el} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Rasturaci;