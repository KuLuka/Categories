import React from 'react';
import { FpmMulcariList, InoBreziceMulceri } from './MulceriList';
import MulceriProducts from './MulceriProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const Mulceri = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <h2>FPM Mulčeri</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Kompanija FPM Agromehanika je najveći proizvođač poljoprivrednih mašina u Jugoistočnoj Evropi, sa
                        tradicijom od skoro 60 godina.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {FpmMulcariList.map(el => (
                        <MulceriProducts el={el} />
                    ))}
                </div>
            </div>


            <div class="product-header">
                <div class="max-width">
                    <h2>INO Brežice Mulčeri</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Industrijska Oprema Brežice je firma s dugogodišnjom proizvodnjom strojeva za poljoprivredu i komunalno gospodarstvo. Strojeve proizvodi od 1957 godine. Pod robnom markom INO je na tržištu od 1989. .</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {InoBreziceMulceri.map(el => (
                        <MulceriProducts el={el} />
                    ))}
                </div>
            </div>
        </>


    )
}

export default Mulceri;



