import React from 'react';
import { Mahindra } from './MahindraList';
import MahindraProducts from './MahindraProducts';
import './../style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const MahindraT = () => {
    return (
        <div class="tractors-container">
            <div class="tractors-logo-info">
                <div class="max-width">
                    <div class="mahindra-logo"></div>
                    <div class="tractors-info">
                        <motion.p variants={fadeDesc} initial='hidden' animate='show'>
                            Mahindra Tractors je međunarodni proizvođač poljoprivredne opreme kompanije Mahindra & Mahindra. U 2010. godini, Mahindra je postala najprodavanija svetska marka traktora po obimu.
                        </motion.p>
                    </div>
                </div>
            </div>


            <div className="tractors-products">
                {Mahindra.map(el => (
                    <MahindraProducts el={el} />
                ))}
            </div>

        </div>
    )
}

export default MahindraT;