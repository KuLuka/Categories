import React from 'react';
import { both } from './ZetorList';
import './../TractorsProduct.scss';
import MainLayout from './../../../layouts/MainLayout';
import { Link } from 'react-router-dom';
import ZetorTable from './../../Tables/ZetorTable';
import { motion } from 'framer-motion';
import { fadeTractor, fadeDesc } from './../../../animation';



const ZetorProduct = ({ match }) => {


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
                            variants={fadeTractor}></motion.div>
                        <motion.div
                            className="product-page-info"
                            animate='show'
                            initial='hidden'
                            variants={fadeDesc}>
                            <h2>{all.productHeader}</h2>
                            <p>{all.desc2}</p>
                            <div className="product-page-li">
                                <a href="mailto:jugometal.co.rs" className='ponuda'>Napravite ponudu</a>
                                <Link className='nazad' to='/traktori/zetor'>Nazad</Link>
                            </div>
                        </motion.div>
                    </div>


                    <div className="main-table-container">
                        <ZetorTable
                            teh_kar={all.teh_kar}
                            left1Title={all.left1Title}
                            left2Title={all.left2Title}
                            left3Title={all.left3Title}
                            left4Title={all.left4Title}
                            left5Title={all.left5Title}
                            table1={all.table1}
                            table2={all.table2}
                            table3={all.table3}
                            table4={all.table4}
                            table5={all.table5}
                            standardOprema1={all.standardOprema1}
                            standardLi1={all.standardLi1}
                            standardOprema2={all.standardOprema2}
                            standardLi2={all.standardLi2}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default ZetorProduct;
