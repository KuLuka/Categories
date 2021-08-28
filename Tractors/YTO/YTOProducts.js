import React from 'react';
import { Link } from 'react-router-dom';
import './../style.scss';
import { useScroll } from './../../UseScroll';
import { motion } from 'framer-motion';
import { fade } from './../../../animation';



const YTOProducts = ({ el }) => {
    const [element, controls] = useScroll();
    return (
        <motion.div ref={element} animate={controls} initial='hidden' variants={fade} className='carr-container1'>

            <div className={el.className}></div>

            <div className="info">
                <h4>{el.productHeader}</h4>
                <div className="h-line"></div>
                <p>{el.desc1}</p>

                <Link className='brand-link' to={`/traktori/yto/${el.nameUrl}`}>
                    Detaljnije
                </Link>
            </div>

        </motion.div>
    )
}

export default YTOProducts;