import React from 'react';
import { Ferocoop } from './UterivacList';
import UterivacProducts from './UterivacProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const Uterivac = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Ferocoop</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Preduzeće FEROCOOP je počelo svoj rad kao mašinska radionica FEROCOOP 1987. godine. U periodu nastanka osnovni proizvodni program su sačinjavali hidraulični cilindri za mašine unutrašnjeg transporta i poljoprivredne mašine.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Ferocoop.map(el => (
                        <UterivacProducts el={el} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Uterivac;