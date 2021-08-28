import React from 'react';
import { IMT } from './IMTList';
import IMTProducts from './IMTProducts';
import './../style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const IMTT = () => {
    return (
        <div className="tractors-container">
            <div className="tractors-logo-info">
                <div className="max-width imt-special-box">
                    <div className="imt-logo"></div>
                    <div className="tractors-info imt-special-info">
                        <motion.p variants={fadeDesc} initial='hidden' animate='show' className='imt-special-p'>
                            Industrija mašina i traktora bila je domaća proizvođačka kompanija koja je proizvodila i prodavala traktore i poljoprivredne mašine. Sedište mu je bilo u Beogradu u Srbiji. IMT je pionir u mehanizaciji farmi i tehnologiji traktora. IMT traktori snage između 35 i 220 ks pogodni su za obradu poljoprivrednog zemljišta, vinograda i voćnjaka i za infrastrukturne primene.
                        </motion.p>
                    </div>
                </div>
            </div>


            <div className="tractors-products">
                {IMT.map(el => (
                    <IMTProducts el={el} />
                ))}
            </div>

        </div>
    )
}

export default IMTT;