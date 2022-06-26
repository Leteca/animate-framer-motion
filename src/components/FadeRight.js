import React from 'react'
import {motion, useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer';


export default function FadeRight(props) {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: props.threshold,
        triggerOnce: props.triggerOnce
    });

    React.useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
        if (!inView) {
          controls.start('hidden');
        }
      }, [controls, inView]);

      const fadeUp = {
        hidden: { 
            opacity: 0,
             x: -150
            },
        visible: {
            opacity: 1,
            x: 0,
             transition: {
                duration: props.duration,
                delay: props.delay
             }  
        }
    }
  return (
    <motion.div 
        {...props}
        ref={ref} 
        initial={'hidden'} 
        animate={controls} 
        transition={{delay: 0.5}} 
        variants={fadeUp}
        
    >
       
    </motion.div>
  )
}
