import React from 'react';
import { Belarus } from './BelarusList';
import BelarusProducts from './BelarusProducts';
import './../style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const BelarusT = () => {
    return (
        <div class="tractors-container">
            <div class="tractors-logo-info">
                <div class="max-width">
                    <div class="belarus-logo"></div>
                    <div class="tractors-info">
                        <motion.p variants={fadeDesc} initial='hidden' animate='show'>
                            Minsk traktorski pogon osnovan je 29. maja 1946. godine. Danas se pretvorio u jednog od najvećih proizvođača poljoprivrednih mašina širom sveta.
                        </motion.p>
                    </div>
                </div>
            </div>


            <div className="tractors-products">
                {Belarus.map(el => (
                    <BelarusProducts el={el} />
                ))}
            </div>

        </div>
    )
}

export default BelarusT;