import React from 'react';
import { Metal } from './MotaliceList';
import MotaliceProducts from './MotaliceProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';

const Motalice = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>
                    <h2>Metal-Fach</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Metal-Fach sarađuje sa vrhunskim brendovima koji su poznati širom sveta. U grupi su John Deere, Zetor, Farmtrac, Feraboli, Ursus, Bonnel, Talek i Samasz.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Metal.map(el => (
                        <MotaliceProducts el={el} key={el._id} />
                    ))}
                </div>
            </div>

        </>
    )
}


export default Motalice;