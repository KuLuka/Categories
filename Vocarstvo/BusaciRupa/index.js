import React from 'react';
import { Mega } from './BusaciList';
import BusaciProducts from './BusaciProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const Busaci = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>
                    <h2>ME-GA ING</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Proizvodnja bušača za rupe i traktorskih freza</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Mega.map(el => (
                        <BusaciProducts el={el} key={el._id} />
                    ))}
                </div>
            </div>

        </>
    )
}


export default Busaci;