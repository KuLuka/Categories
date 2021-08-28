import React from 'react';
import { Solis } from './SolisList';
import SolisProducts from './SolisProducts';
import './../style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const SolisT = () => {
    return (
        <div class="tractors-container">
            <div class="tractors-logo-info">
                <div class="max-width">
                    <div class="solis-logo"></div>
                    <div class="tractors-info">
                        <motion.p variants={fadeDesc} initial='hidden' animate='show' className='imt-special-p'>
                            Izgrađeni od samo najkvalitetnijih materijala i najnaprednijih procesa i tehnologija, originalni delovi traktora Solis proizvedeni su da bi pružili visoke performanse i dug vek trajanja.
                        </motion.p>
                    </div>
                </div>
            </div>


            <div className="tractors-products">
                {Solis.map(el => (
                    <SolisProducts el={el} />
                ))}
            </div>

        </div>
    )
}

export default SolisT;