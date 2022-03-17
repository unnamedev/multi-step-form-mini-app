import {motion} from "framer-motion"

/**
 * @description - ⚙️ Animator Component
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const Animator = ({children, ...props}) => <motion.div
    {...props}
    style={{position: "absolute"}}
    initial={{x: 200, scale: 0.8, opacity: 0}}
    animate={{x: 0, scale: 1, opacity: 1}}
    exit={{x: -200, scale: 0.8, opacity: 0}}
>
    {children}
</motion.div>

export default Animator
