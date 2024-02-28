import style from "./about.module.css";
import { motion } from "framer-motion";

const About: React.FC = () => {

  const bannerAnimationVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05,
        duration: 0.5,
        ease: "easeIn"
      },
    },
  };

  return (
  <motion.div className={style.about} id="about" initial="hidden"
  animate="visible"
  variants={bannerAnimationVariants}>
    <h3>About</h3>
    <p>As a driven and ambitious student from Brainster Academy, I am honing my skills in the dynamic field of Front-End Development. My fervor for creating seamless and visually stunning web interfaces sets me apart. With a solid foundation in key programming languages and frameworks such as React and Next.js, I am equipped to translate my theoretical knowledge and practical experience into valuable contributions to forward-thinking, collaborative technology projects. My aim is to introduce innovative solutions, leveraging the extensive skill set developed at Brainster Academy, to make a significant difference in the tech landscape.</p>
  </motion.div>
    )
};

export default About;