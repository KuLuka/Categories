import React from 'react';
import { Zetor } from './ZetorList';
import ZetorProducts from './ZetorProducts';
import './../style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const ZetorT = () => {
    return (
        <div class="tractors-container">
            <div class="tractors-logo-info">
                <div class="max-width">
                    <div class="zetor-logo"></div>
                    <div class="tractors-info">
                        <motion.p variants={fadeDesc} initial='hidden' animate='show' >
                            Zetor je marka traktora, zaštitni znak i češki proizvođač sa sedištem u Brnu, Lišen. Zetor je prvi svetski proizvođač koji je razvio i pokrenuo proizvodnju sigurnosnih kabina za traktore
                        </motion.p>
                    </div>
                </div>
            </div>


            <div className="tractors-products">
                {Zetor.map(el => (
                    <ZetorProducts el={el} />
                ))}
            </div>

        </div>
    )
}

export default ZetorT;