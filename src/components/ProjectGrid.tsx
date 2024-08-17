import { HStack, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectGrid = () => {
  return (
    <HStack padding={5}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </HStack>
  )
}

export default ProjectGrid