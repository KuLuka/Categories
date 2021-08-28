import React from 'react';
import { both } from './YTOList';
import './../TractorsProduct.scss';
import MainLayout from './../../../layouts/MainLayout';
import { Link } from 'react-router-dom';
import YTOTable from './../../Tables/YTOTable';
import { motion } from 'framer-motion';
import { fadeTractor, fadeDesc } from './../../../animation';



const YTOProduct = ({ match }) => {


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
                                <Link className='nazad' to='/traktori/yto'>Nazad</Link>
                            </div>
                        </motion.div>
                    </div>


                    <div className="main-table-container">
                        <YTOTable
                            teh_kar={all.teh_kar}
                            left1Title={all.left1Title}
                            table1={all.table1}
                            table2={all.table2}
                            table3={all.table3}
                            table4={all.table4}
                            table5={all.table5}
                            left1Title={all.left1Title}
                            left2Title={all.left2Title}
                            left3Title={all.left3Title}
                            left4Title={all.left4Title}
                            left5Title={all.left5Title}
                            standardnaOprema={all.standardnaOprema}
                            standardLi={all.standardLi}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default YTOProduct;