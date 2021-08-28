import React from 'react';
import { Link } from 'react-router-dom';
import './../style.scss';
import { useScroll } from './../../UseScroll';
import { motion } from 'framer-motion';
import { fade } from './../../../animation';



const RasturaciSenaProducts = ({ el }) => {
    const [element, controls] = useScroll();
    return (
        <motion.div ref={element} animate={controls} initial='hidden' variants={fade} className='poljo-proizvodi'>

            <div className={el.className}></div>

            <div className="prod-info">
                <h4>{el.productHeader}</h4>
                <div className="h-line"></div>
                <p>{el.desc1}</p>

                <Link className='prod-btn' to={`/stocarstvo/rasturaci-sena/${el.nameUrl}`}>
                    Detaljnije
                </Link>
            </div>

        </motion.div>
    )
}

export default RasturaciSenaProducts;