import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='app__header-info'
        >
          <div className='app__header-badge'>
            <div className='badge-cmp app__flex'>
                <spam>👋</spam>
                <div style={{ marginLeft: 20 }}>
                    <p className='p-text'>Hello, I am</p>
                    <h1 className='head-text'>Nacho</h1>
                </div>
            </div>
            <div className='tag-cmp app__flex'>
                <p className='p-text'>Web Developer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: 'easeOut', delayChildren: 0.5 }}
          className='app__header-img'
        >
          <img src={images.profile} alt='profile_bg' />
         <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.circle}
            alt='profile_circle'
            className='overlay_circle'
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className='app__header-circles'
        >
          {[images.redux, images.reactmain, images.sass].map((circle, index) => (
            <div className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={circle} alt={`circle-${index}`} />
            </div>
          ))}
        </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home'); //Header