import React from 'react';
import { Ormaric, INO, MinosAgri, Ferocoop } from './RasipaciList';
import RasipaciProducts from './RasipaciProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';


const Rasipaci = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>INO Brežice Rasipači</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Industrijska Oprema Brežice je firma s dugogodišnjom proizvodnjom strojeva za poljoprivredu i komunalno gospodarstvo. Strojeve proizvodi od 1957 godine. Pod robnom markom INO je na tržištu od 1989.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {INO.map(el => (
                        <RasipaciProducts el={el} />
                    ))}
                </div>
            </div>


            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>FEROCOOP</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Preduzeće FEROCOOP je počelo svoj rad kao mašinska radionica FEROCOOP 1987. godine. U periodu nastanka osnovni proizvodni program su sačinjavali hidraulični cilindri za mašine unutrašnjeg transporta i poljoprivredne mašine.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Ferocoop.map(el => (
                        <RasipaciProducts el={el} />
                    ))}
                </div>
            </div>



            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Minos-Agri</h2>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {MinosAgri.map(el => (
                        <RasipaciProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Ormarić</h2>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Ormaric.map(el => (
                        <RasipaciProducts el={el} />
                    ))}
                </div>
            </div>

        </>
    )
}


export default Rasipaci;