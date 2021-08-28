import React from 'react';
import { Carraro } from './CarraroList';
import CarraroProducts from './CarraroProducts';
import './../style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';

const CarraroT = () => {
    return (
        <div class="tractors-container">
            <div class="tractors-logo-info">
                <div class="max-width">
                    <div class="carraro-logo"></div>
                    <div class="tractors-info">
                        <motion.p variants={fadeDesc} initial='hidden' animate='show'>
                            Carraro Agritalia je italijanski proizvođač traktora i odeljenje Carraro Group, koje je odvojeno od Antonia Carrara. Carraro Group osnovana je u Campodarsegu u Italiji 1910. godine kao Giovanni Carraro. Divizija Carraro Agritalia osnovana je u Rovigu u Italiji 1977.
                        </motion.p>
                    </div>
                </div>
            </div>


            <div className="tractors-products">
                {Carraro.map(el => (
                    <CarraroProducts el={el} />
                ))}
            </div>
        </div>
    )
}

export default CarraroT;
