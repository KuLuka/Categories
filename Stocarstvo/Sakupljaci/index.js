import React from 'react';
import { SIP, Termometal, FPM } from './SakupljaciList';
import SakupljaciProducts from './SakupljaciProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';

const SakupljaciSena = () => {
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
                        <SakupljaciProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Termometal Ada</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Preduzeće „Termometal“ d.o.o. Ada ima više od 30 godina iskustva u mašinskoj obradi. Počeo je sa radom 1986. godine, kao zanatska radnja za termičku obradu.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Termometal.map(el => (
                        <SakupljaciProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>FPM Agromehanika</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Kompanija FPM Agromehanika je najveći proizvođač poljoprivrednih mašina u Jugoistočnoj Evropi, sa tradicijom od skoro 60 godina.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {FPM.map(el => (
                        <SakupljaciProducts el={el} />
                    ))}
                </div>
            </div>
        </>
    )
}


export default SakupljaciSena;