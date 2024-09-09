import React from 'react'
import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import findYourJob from '../../assets/v.png';
import webpage from '../../assets/webpage.png';
import sql from '../../assets/sql.png';
import carsale from '../../assets/carsale.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={findYourJob} href={"https://github.com/ali2002-collab/Find_Your_Job"} alt={"Career Quest Logo"}
            h3={"Find Your Job (APP)"} p={"Built with React Native"} 
        />
        <ProjectCard src={webpage} href={"https://github.com/ali2002-collab/grafic-skills"} alt={"Grafics Skills Logo"}
            h3={"Grafics Skills"} p={"Built with React"} 
        />
        <ProjectCard src={sql} href={"https://github.com/ali2002-collab/SQL-Query-Analyser"} alt={"SQL Code Analysis Dashboard Logo"}
            h3={"SQL Lint Tool"} p={"Built with Java"} 
        />
        <ProjectCard src={carsale} href={"https://github.com/ali2002-collab/Car-Sales"} alt={"Car Sales Logo"}
            h3={"Car Sales"} p={"Built with C"} 
        />
      </div>
    </section>
  )
}

export default Projects
