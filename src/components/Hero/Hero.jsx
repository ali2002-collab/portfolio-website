import React from 'react'
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {them, toggleTheme} = useTheme();
  return (
    <section className={styles.container} id="hero">
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt='Profile Picture'/>
        <img className={styles.colorMode} src={themeIcon} alt='Light/Dark Mode Icon' />
      </div>
      <div className={styles.info}>
        <h1>Ali<br/>Hassan</h1>
        <h2>Frontend Developer</h2>
        <span>
            <a href='https://twitter.com/' target='_blank'>
                <img src={twitterIcon} alt='Twitter icon' />
            </a>
            <a href='https://github.com/' target='_blank'>
                <img src={githubIcon} alt='Github icon' />
            </a>
            <a href='https://linkedin.com/' target='_blank'>
                <img src={linkedinIcon} alt='Linkedin icon' />
            </a>
        </span>
        <p>I geek out over crafting beautiful, responsive, and user-friendly experiences that go beyond just the front-end.</p>
        <a href={CV} download>
            <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero

