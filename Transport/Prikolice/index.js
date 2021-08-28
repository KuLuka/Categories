import React from 'react';
import { Majevica, Celmak } from './PrikoliceList';
import PrikoliceProducts from './PrikoliceProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const Prikolice = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Majevica</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Sinonim za pouzdanog proizvođača kvalitetne poljoprivredne mehanizacije</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Majevica.map(el => (
                        <PrikoliceProducts el={el} />
                    ))}
                </div>
            </div>


            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Čelmak</h2>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Celmak.map(el => (
                        <PrikoliceProducts el={el} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default Prikolice;