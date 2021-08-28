import React from 'react';
import { both } from './MulceriList';
import './../../../MasineScss/MasineProduct.scss';
import MulcariTable from './../../Tables/MulcariTable';
import { Link } from 'react-router-dom';
import MainLayout from '../../../layouts/MainLayout';
import { motion } from 'framer-motion';
import { fadeTractor, fadeDesc } from './../../../animation';




const MulceriProduct = ({ match }) => {

    const all = both.find(p => p.nameUrl === match.params.nameUrl)



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
                                <Link className='nazad' to='/vocarstvo/mulceri'>Nazad</Link>
                            </div>
                        </motion.div>
                    </div>


                    <div className="main-table-container">
                        <MulcariTable
                            teh_kar={all.teh_kar}
                            left1Title={all.left1Title}
                            t1LeftHeader={all.t1LeftHeader}
                            table1={all.table1}
                            standardOprema1={all.standardOprema1}
                            standardLi1={all.standardLi1}
                            standardOprema2={all.standardOprema2}
                            standardLi2={all.standardLi2}
                            standardnaOprema={all.standardnaOprema}
                            standardLi={all.standardLi}
                            desc3={all.desc3}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default MulceriProduct;