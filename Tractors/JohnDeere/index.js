import React from 'react';
import { JohnDeere } from './JohnDeereList';
import JohnDeereProducts from './JohnDeereProducts';
import './../style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const JohnDeereT = () => {
    return (
        <div class="tractors-container">
            <div class="tractors-logo-info">
                <div class="max-width">
                    <div class="johndeere-logo"></div>
                    <div class="tractors-info">
                        <motion.p variants={fadeDesc} initial='hidden' animate='show'>
                            John Deere je zaštitno ime kompanije Deere i Company, američke korporacije koja proizvodi poljoprivredne, građevinske i šumarske mašine, dizel motore, pogonske sisteme koji se koriste u teškoj opremi i opremu za negu travnjaka.
                        </motion.p>
                    </div>
                </div>
            </div>


            <div className="tractors-products">
                {JohnDeere.map(el => (
                    <JohnDeereProducts el={el} />
                ))}
            </div>

        </div>
    )
}

export default JohnDeereT;