import React from 'react';
import { Sitrex, MinosAgri } from './MixPrikoliceList';
import MixPrikoliceProducts from './MixPrikoliceProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const MixPrikolice = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Sitrex</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Kompaniju Sitrek pokrenuo je gospodin Giovanni Signorelli, koji je osnivač i predsednik, 1970. godine, proizvodnjom poljoprivrednih mašina</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Sitrex.map(el => (
                        <MixPrikoliceProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Minos Agri</h2>

                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {MinosAgri.map(el => (
                        <MixPrikoliceProducts el={el} />
                    ))}
                </div>
            </div>


        </>
    )
}

export default MixPrikolice;