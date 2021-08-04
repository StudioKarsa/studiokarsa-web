import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

function getProjectList(projectType, projectCategory) {
  const projectImgClassName =
    'max-h-32 md:max-h-48 lg:max-h-64 2xl:max-h-72 rounded-xl'

  const professionalProject = [
    {
      image: (
        <StaticImage
          src="./project/skillcode/images/brand-logo.png"
          alt="title"
          className={projectImgClassName}
          objectFit="cover"
        />
      ),
      title: 'Pro - Website',
      category: 'website',
    },
    {
      image: (
        <StaticImage
          src="./project/skillcode/images/brand-logo.png"
          alt="title"
          className={projectImgClassName}
          objectFit="cover"
        />
      ),
      title: 'Pro - Mobile',
      category: 'mobile',
    },
  ]

  const personalProject = [
    {
      image: (
        <StaticImage
          src="./project/skillcode/images/brand-logo.png"
          alt="title"
          className={projectImgClassName}
          objectFit="cover"
        />
      ),
      title: 'Personal - UI/UX',
      category: 'uiux',
    },
    {
      image: (
        <StaticImage
          src="./project/skillcode/images/brand-logo.png"
          alt="title"
          className={projectImgClassName}
          objectFit="cover"
        />
      ),
      title: 'Personal - Mobile',
      category: 'mobile',
    },
  ]

  // Assign project type for consistency
  professionalProject.forEach(project => (project.type = 'professional'))
  personalProject.forEach(project => (project.type = 'personal'))

  const combinedProject = personalProject.concat(professionalProject)

  // Filter by parameter
  let filtered = combinedProject.filter(project => project.type === projectType)
  if (projectCategory !== 'all') {
    filtered = filtered.filter(project => project.category === projectCategory)
  }

  return filtered
}

const ProjectFilter = ({ setProjectType, setProjectCategory }) => {
  const [typeState, setTypeState] = useState([0, 0])

  function handleTypeChange(clickedId, typeClicked) {
    const projectCategory = document.getElementById('project-category')
    if (typeState[0] === typeClicked[0] && typeState[1] === typeClicked[1]) {
      // Deactivate/Collapse Category Filter
      projectCategory.classList.replace('max-h-96', 'max-h-0')
      setTypeState([0, 0])
    } else {
      // Activate/Expand Category Filter
      projectCategory.classList.replace('max-h-0', 'max-h-96')
      setTypeState(typeClicked)
    }

    handleClick(clickedId)
  }

  function handleClick(clickedId) {
    // Get clicked element
    const clicked = document.getElementById(clickedId)
    // Get parent of clicked
    const clickedParent = clicked.parentNode

    clickedParent.childNodes.forEach(element => {
      // Change text from black to grey (deactivate) for siblings button
      if (element.onclick) {
        element.classList.replace('text-black', 'text-gray-500')
      }
    })
    // Change text from gray to black (activate) for clicked button
    clicked.classList.replace('text-gray-500', 'text-black')

    // Determine which setState to execute by id of clickedParent
    if (clickedParent.id === 'project-type') {
      setProjectType(clicked.value)
    } else {
      setProjectCategory(clicked.value)
    }
  }

  return (
    <div className="flex flex-col space-y-2">
      <div
        className="flex flex-row items-center font-semibold text-base lg:text-lg xl:text-xl 2xl:text-2xl space-x-4"
        id="project-type"
      >
        <button
          className="text-black focus:outline-none cursor-default"
          id="type-professional"
          value="professional"
          onClick={() => handleTypeChange('type-professional', [1, 0])}
        >
          Project {/* <span className="text-xs">&#9660;</span> */}
        </button>
        <p>/</p>
        <button
          className="text-gray-500 focus:outline-none cursor-default"
          id="type-personal"
          value="personal"
          onClick={() => handleTypeChange('type-personal', [0, 1])}
        >
          Karsa Shoots
        </button>
      </div>
      <div
        className="flex flex-row items-center max-h-0 font-semibold text-sm lg:text-base xl:text-xl text-2xl:text-xl text-gray-500 space-x-2 transition-all ease-in-out overflow-hidden duration-700"
        id="project-category"
      >
        <button
          className="text-black focus:outline-none cursor-default"
          id="category-all"
          value="all"
          onClick={() => handleClick('category-all')}
        >
          All
        </button>
        <p>/</p>
        <button
          className="text-gray-500 focus:outline-none cursor-default"
          id="category-website"
          value="website"
          onClick={() => handleClick('category-website')}
        >
          Website
        </button>
        <p>/</p>
        <button
          className="text-gray-500 focus:outline-none cursor-default"
          id="category-mobile"
          value="mobile"
          onClick={() => handleClick('category-mobile')}
        >
          Mobile App
        </button>
        <p>/</p>
        <button
          className="text-gray-500 focus:outline-none cursor-default"
          id="category-uiux"
          value="uiux"
          onClick={() => handleClick('category-uiux')}
        >
          UI/UX Design
        </button>
      </div>
    </div>
  )
}

const ProjectCard = ({ index, image, title }) => {
  function getIndex(index) {
    return index.toString().length === 1 ? `0${index + 1}` : index + 1
  }

  return (
    <div className="w-1/2 lg:w-1/3 p-1 md:p-2">
      <a href="#" className="flex flex-col p-1 md:p-2 space-y-4 group">
        <div className="group-hover:shadow-xl transition ease-in-out transform group-hover:scale-105">
          {image}
        </div>
        <div className="flex flex-row">
          <p className="text-lg">
            <span className="text-gray-500">{getIndex(index)} / </span>
            {title}
          </p>
        </div>
      </a>
    </div>
  )
}

const Page = () => {
  const [projectType, setProjectType] = useState('professional')
  const [projectCategory, setProjectCategory] = useState('all')

  return (
    <div className="flex flex-col p-6 lg:p-12 xl:p-16 space-y-10">
      <h2 className="font-bold text-4xl md:text-5xl xl:text-6xl 2xl:text-8xl">
        Karsa Works
      </h2>
      <ProjectFilter
        setProjectType={setProjectType}
        setProjectCategory={setProjectCategory}
      />
      <div className="flex flex-wrap">
        {getProjectList(projectType, projectCategory).map((project, index) => (
          <ProjectCard
            index={index}
            image={project.image}
            title={project.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Page
