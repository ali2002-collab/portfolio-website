import React from 'react'
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.webp';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instagramLight from '../../assets/instagram-light.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    
  return (
    <section className={styles.container} id="hero">
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt='Profile Picture'/>
        <img className={styles.colorMode} src={themeIcon} alt='Light/Dark Mode Icon'  onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>Ali<br/>Hassan</h1>
        <h2>Software Engineer</h2>
        <span>
            <a href='https://www.instagram.com/_artsbyali_/' target='_blank'>
                <img src={instagramIcon} alt='Instagram icon' />
            </a>
            <a href='https://github.com/ali2002-collab' target='_blank'>
                <img src={githubIcon} alt='Github icon' />
            </a>
            <a href='https://www.linkedin.com/in/syed-muhammad-ali-hassan-79b7812ba' target='_blank'>
                <img src={linkedinIcon} alt='Linkedin icon' />
            </a>
        </span>
        <p className={styles.description}>I geek out over creating intuitive, dynamic experiences while expanding my skills behind the scenes.</p>
        <a href={CV} download>
            <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero

