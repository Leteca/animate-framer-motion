export const fadeUp = {
    hidden: { opacity: 0, y: 150},
    visible: {
        opacity: 1,
        y: 0,
    }
}

export const fadeUpChildrenDelay = {
    hidden: { opacity: 0, y: 150},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            
            staggerChildren: 0.5
          }
    }
}

export const flipRight ={
    hidden: { opacity: 0, rotateY: 90},
    visible: {
        opacity: 1,
        rotateY:0,
    }
}

export const scaleUp ={
    hidden:{
        opacity:0,
        scale: 0.5,
        x: 200
    },
    visible:{
        opacity: 1,
        scale: 1,
        x: 0
    }
}