import React from 'react';
import { Ursus } from './UrsusList';
import UrsusProducts from './UrsusProducts';
import './../style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const UrsusT = () => {
    return (
        <div class="tractors-container">
            <div class="tractors-logo-info">
                <div class="max-width">
                    <div class="ursus-logo"></div>
                    <div class="tractors-info">
                        <motion.p variants={fadeDesc} initial='hidden' animate='show'>
                            Ursus SA je poljski proizvođač poljoprivrednih mašina smešten u Lublinu. Kompanija je kroz istoriju bila povezana sa Varšavom i ima snažne istorijske korene u poljskoj istoriji proizvodnje traktora.
                        </motion.p>
                    </div>
                </div>
            </div>


            <div className="tractors-products ursus-special-box">
                {Ursus.map(el => (
                    <UrsusProducts el={el} />
                ))}
            </div>

        </div>
    )
}

export default UrsusT;