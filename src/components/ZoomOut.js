import React from 'react'
import {motion, useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer';


export default function ZoomOut(props) {
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

      const animation = {
        hidden: { 
            opacity: 0,
             scale: 2
            },
        visible: {
            opacity: 1,
            scale: 1,
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
        variants={animation}
        
    >
       
    </motion.div>
  )
}
