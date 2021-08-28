import React from 'react';
import { YTO } from './YTOList';
import YTOProducts from './YTOProducts';
import './../style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const YTOT = () => {
    return (
        <div class="tractors-container">
            <div class="tractors-logo-info">
                <div class="max-width ">
                    <div class="yto-logo"></div>
                    <div class="tractors-info">
                        <motion.p variants={fadeDesc} initial='hidden' animate='show' >
                            YTO Group Corporation je kineski proizvođač poljoprivrednih i građevinskih mašina koji je deo Sinomach-a, sveobuhvatnog konglomerata mašina. Iako se sastoji od mnogih zavisnih preduzeća i odeljenja koja proizvode niz proizvoda, uključujući poljoprivredne traktore, motore, kombajne i kamione, kompanija je najpoznatija po poljoprivrednoj opremi. Kompanija osnovana 1955. godine najveći je proizvođač traktora u Kini.


                        </motion.p>
                    </div>
                </div>
            </div>


            <div className="tractors-products">
                {YTO.map(el => (
                    <YTOProducts el={el} />
                ))}
            </div>

        </div>
    )
}

export default YTOT;