import React from 'react';
import { Ursus } from './BalirkeList';
import BalirkeProducts from './BalirkeProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const Balirke = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Ursus</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Ursus SA je poljski proizvođač poljoprivrednih mašina smešten u Lublinu. Kompanija je kroz istoriju bila povezana sa Varšavom i ima snažne istorijske korene u poljskoj istoriji proizvodnje traktora.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Ursus.map(el => (
                        <BalirkeProducts el={el} />
                    ))}
                </div>
            </div>

        </>
    )
}


export default Balirke;