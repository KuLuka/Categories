import React from 'react';
import { Gorenc, Majevica } from './SetvoList';
import SetvoProducts from './SetvoProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const Setvospremaci = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Gorenc</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Već 40 godina pouzdan, prilagodljiv i profesionalan partner svima koji zahtijevaju najkvalitetnije proizvode poljoprivredne mehanizacije i usluge povezane s metalom.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Gorenc.map(el => (
                        <SetvoProducts el={el} />
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
                        <SetvoProducts el={el} />
                    ))}
                </div>
            </div>

        </>
    )
}


export default Setvospremaci;
