import React, { useState, useEffect} from 'react';
import './About.scss';
import { AppWrap, MotionWrap } from '../../wrapper';

import { motion } from 'framer-motion';
import { images } from '../../constants';
import { client, urlFor } from '../../client';



const About = () => {

    const [about, setAbout] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query)
        .then((data) => { setAbout(data);});
    }, []);

  return (
    <>
    <h2 className='head-text'>I know that<span> Good Design </span><br />means <span>  Good Business</span>
    </h2>
    <div className='app__profiles'>
        {about.map((about, index) => (
            <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className='app__profile-item'
                key={about.title + index}
            >
                <img src={urlFor(about.imgUrl)} alt={about.title} />
                <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
        ))}
    </div>
    </>
  )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
  );