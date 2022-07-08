import { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

import styles from '../../styles/Home.module.scss';
import SkillItem from '../SkillItem/SkillItem';

const Features = () => {
  const animation1 = useAnimation();

  const {ref,inView} = useInView(
    {
        root: null,
        rootMargin: '0px',
        threshold: .5
    }
  );

  const container = {
    'show': {
      transition:{
          ease: 'easeOut',
          duration: .5,
          staggerChildren: .4,
      },
      opacity: 1
    },
    'hidden': {
      transition : {
          ease: 'easeOut',
          duration: .5,
          staggerChildren: .4,
      }
    }
  }

  const item2 = {
    'show': {
      y: 0,
      transition:{
          ease: 'easeOut',
          duration: .5,
      },
      opacity: 1
    },
    'hidden': {
      y: '-5vh',
      opacity:0,
      transition : {

      }
    }
  }

  useEffect(() => {
    if(inView){
      animation1.start('show');
      console.log("Move")
    }
    else{
      animation1.start('hidden');
      console.log('hide')
    }
  },[inView]);

  return (
    <div className={styles.Home__Strengths}>
        <div className = {styles.Strengths__StrengthContainer}>
            <h1>My Personal Strengths</h1>
            <motion.div variants={container} initial="hidden" animate={animation1}>
              <div className = {styles.StrengthContainer__SkillRow} id = "strengths" ref = {ref}>
                <motion.div variants={item2}>
                  <SkillItem skillName={"Fullstack Knowledge"} />
                </motion.div>
                <motion.div variants={item2}>
                  <SkillItem skillName={"Great Communicator"}/>
                </motion.div>
                <motion.div variants={item2}>
                  <SkillItem skillName={"Project Experience"}/>
                </motion.div>
              </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Features