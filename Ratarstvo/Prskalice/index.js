import React from 'react';
import { Agromehanika, Morava, Gumaplast, Ferocoop } from './PrskaliceList';
import PrskaliceProducts from './PrskaliceProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';



const Prskalice = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Agromehanika Kranj</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Agromehanika je vodeći proizvođač poljoprivredne mehanizacije u srednjoj i JZ Evropi. Već 50. Godina Agromehanika je sinonim za kvalitet, pouzdanost i razvoj.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Agromehanika.map(el => (
                        <PrskaliceProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Morava Požarevac</h2>
                    <p>Fabrika mašina Morava a.d. Požarevac je jedinstven industrijsko-poslovni sistem mašinogradnje u zemlji, najveći balkanski proizvođač mašina za zaštitu bilja i industrijski prvenac opštine Požarevac.</p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Morava.map(el => (
                        <PrskaliceProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Gumaplast Rau</h2>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {Gumaplast.map(el => (
                        <PrskaliceProducts el={el} />
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
                        <PrskaliceProducts el={el} />
                    ))}
                </div>
            </div>

        </>
    )
}


export default Prskalice;