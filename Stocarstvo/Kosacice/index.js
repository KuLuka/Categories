import React from 'react';
import { FPM, SIP, Wirax, Turska } from './KosaciceList';
import KosaciceProducts from './KosaciceProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const Kosacice = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>FPM Agromehanika Kosačice</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Kompanija FPM Agromehanika je najveći proizvođač poljoprivrednih mašina u Jugoistočnoj Evropi, sa tradicijom od skoro 60 godina.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {FPM.map(el => (
                        <KosaciceProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>SIP Šempeter Kosačice</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>SIP je slovenački proizvođač poljoprivrednih mašina sa više od 65 godina tradicije.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {SIP.map(el => (
                        <KosaciceProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Wirax</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Zaštitni znak Wirax prepoznat je na mnogim tržištima. Na poljskom tržištu povezan je sa pouzdanim poljoprivrednim mašinama.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Wirax.map(el => (
                        <KosaciceProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Turska</h2>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Turska.map(el => (
                        <KosaciceProducts el={el} />
                    ))}
                </div>
            </div>
        </>
    )
}


export default Kosacice;