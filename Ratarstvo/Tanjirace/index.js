import React from 'react';
import { Gorenc, Ferocoop, Gumaplast, FPM, Majevica } from './TanjiraceList';
import TanjiraceProducts from './TanjiraceProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';

const Tanjirace = () => {
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
                        <TanjiraceProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">


                    <h2>FEROCOOP</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Preduzeće FEROCOOP je počelo svoj rad kao mašinska radionica FEROCOOP 1987. godine. U periodu nastanka osnovni proizvodni program su sačinjavali hidraulični cilindri za mašine unutrašnjeg transporta i poljoprivredne mašine.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Ferocoop.map(el => (
                        <TanjiraceProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">

                    <h2>FPM Agromehanika</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Kompanija FPM Agromehanika je najveći proizvođač poljoprivrednih mašina u Jugoistočnoj Evropi, sa tradicijom od skoro 60 godina.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {FPM.map(el => (
                        <TanjiraceProducts el={el} />
                    ))}
                </div>
            </div>


            <div class="product-header">
                <div class="max-width">

                    <h2>Gumaplast Rau</h2>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Gumaplast.map(el => (
                        <TanjiraceProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">

                    <h2>Majevica</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Sinonim za pouzdanog proizvođača kvalitetne poljoprivredne mehanizacije.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Majevica.map(el => (
                        <TanjiraceProducts el={el} />
                    ))}
                </div>
            </div>

        </>
    )
}


export default Tanjirace;
