import React from 'react';
import { AgromehanikaKranj, MoravaPozerevac } from './AtomizeriList';
import AtomizeriProducts from './AtomizeriProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';

const Atomizeri = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>
                    <h2>Agromehanika Kranj Atomizeri</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Agromehanika je vodeći proizvođač poljoprivredne mehanizacije u srednjoj i JZ Evropi. Već 50. Godina Agromehanika je sinonim za kvalitet, pouzdanost i razvoj.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {AgromehanikaKranj.map(el => (
                        <AtomizeriProducts el={el} key={el._id} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>Morava Požarevac</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Fabrika mašina Morava a.d. Požarevac je jedinstven industrijsko-poslovni sistem mašinogradnje u zemlji, najveći balkanski proizvođač mašina za zaštitu bilja i industrijski prvenac opštine Požarevac.</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {MoravaPozerevac.map(el => (
                        <AtomizeriProducts el={el} key={el._id} />
                    ))}
                </div>
            </div>

        </>
    )
}


export default Atomizeri;