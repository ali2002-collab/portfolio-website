import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"HTML"}/>
        <SkillList src={checkMarkIcon} skill={"CSS"}/>
        <SkillList src={checkMarkIcon} skill={"Tailwind CSS"}/>
        <SkillList src={checkMarkIcon} skill={"JavaScript"}/>
        <SkillList src={checkMarkIcon} skill={"TypeScript"}/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"React JS"}/>
        <SkillList src={checkMarkIcon} skill={"React Native"}/>
        <SkillList src={checkMarkIcon} skill={"Java"}/>
        <SkillList src={checkMarkIcon} skill={"C"}/>
        <SkillList src={checkMarkIcon} skill={"C++ (Beginner)"}/>
        <SkillList src={checkMarkIcon} skill={"Python (Beginner)"}/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"Rapid API"}/>
        <SkillList src={checkMarkIcon} skill={"Git"}/>
        <SkillList src={checkMarkIcon} skill={"EXPO"}/>
        <SkillList src={checkMarkIcon} skill={"SCSS"}/>
        <SkillList src={checkMarkIcon} skill={"Bootstrap"}/>
        <SkillList src={checkMarkIcon} skill={"VITE"}/>
      </div>
    </section>
  )
}

export default Skills
