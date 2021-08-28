import React from 'react';
import { both } from './IMTList';
import './../TractorsProduct.scss';
import MainLayout from './../../../layouts/MainLayout';
import { Link } from 'react-router-dom';
import MiniTable from './../../Tables/MiniTable';
import { motion } from 'framer-motion';
import { fadeTractor, fadeDesc } from './../../../animation';



const IMTProduct = ({ match }) => {


    const all = both.find(p => p.nameUrl === match.params.nameUrl);



    return (
        <MainLayout>
            <div className="full-width-line">
                <div className="max-width product-page">
                    <div className='product-page-content'>
                        <motion.div
                            className={all.className}
                            animate='show'
                            initial='hidden'
                            variants={fadeTractor}>
                        </motion.div>
                        <motion.div
                            className="product-page-info"
                            animate='show'
                            initial='hidden'
                            variants={fadeDesc}>
                            <h2>{all.productHeader}</h2>
                            <p>{all.desc2}</p>
                            <div className="product-page-li">
                                <a href="mailto:jugometal.co.rs" className='ponuda'>Napravite ponudu</a>
                                <Link className='nazad' to='/traktori/imt'>Nazad</Link>
                            </div>
                        </motion.div>
                    </div>


                    <div className="main-table-container">
                        <MiniTable
                            teh_kar={all.teh_kar}
                            left1Title={all.left1Title}
                            table1={all.table1}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default IMTProduct;