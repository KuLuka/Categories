import React from 'react';
import { IMT, AgroLemind, BellImpex } from './PlugoviList';
import PlugoviProducts from './PlugoviProducts';
import './../style.scss';
import './../../../MasineScss/style.scss';
import { motion } from 'framer-motion';
import { fadeDesc } from './../../../animation';

const Plugovi = () => {
    return (
        <>
            <div class="product-header">
                <div class="max-width">
                    <div class="pocetna-link">
                        <i class="fas fa-arrow-left"></i><a href="#">Pocetna</a>
                    </div>

                    <h2>IMT</h2>
                    <motion.p variants={fadeDesc} initial='hidden' animate='show'>Sa istorijom dugom više od 70 godina, IMT - Industrija mašina i traktora je Srpska kompanija za proizvodnju traktora i poljoprivredne opreme i jedna je od najpopularnijih marki traktora u istočnoj Evropi, severnoj Africi i na Balkanu..</motion.p>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {IMT.map(el => (
                        <PlugoviProducts el={el} />
                    ))}
                </div>
            </div>


            <div class="product-header">
                <div class="max-width">


                    <h2>Agro Lemind Leskovac</h2>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {AgroLemind.map(el => (
                        <PlugoviProducts el={el} />
                    ))}
                </div>
            </div>

            <div class="product-header">
                <div class="max-width">


                    <h2>Bell Impex</h2>
                </div>
            </div>

            <div className="category-product max-width">
                <div className="grid-prod">
                    {BellImpex.map(el => (
                        <PlugoviProducts el={el} />
                    ))}
                </div>
            </div>

        </>
    )
}


export default Plugovi;