import React from 'react'

const ProjectCard = ({src, href, alt, h3, p}) => {
  return (
    <a href={href} target='_blank'>
            <img className='hover' src={src} alt={alt} />
            <h3>{h3}</h3>
            <p>{p}</p>
    </a>
  )
}

export default ProjectCard
