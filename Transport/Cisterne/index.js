import React from 'react';
import { Majevica } from './CisterneList';
import CisterneProducts from './CisterneProducts.js';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';



const Cisterne = () => {
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
                        <CisterneProducts el={el} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cisterne;