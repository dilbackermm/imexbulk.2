import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "IMEX Specialised in providing solutions for Free-to-flow and Hard-to-flow bulk solids. We design fabricates, distribute & sells of high quality custom designed liner bags for transport and storage of dry bulk products in standard ISO containers.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Our Packages are not only sustainably designed, but are also manufactured in accordance with the strictest environmental quality criteria. </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>know more </p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
