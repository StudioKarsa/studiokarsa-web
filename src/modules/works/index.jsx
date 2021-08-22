import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const PROJECT_FILTER_TYPE = {
  PROFESSIONAL: 'PROFESSIONAL',
  PERSONAL: 'PERSONAL',
}

const PROJECT_FILTER_CATEGORY_TYPE = {
  ALL: 'All',
  UIUX: 'UI/UX',
  WEBSITE: 'WEBSITE',
  MOBILE: 'MOBILE',
}

const projectImgClassName =
  'max-h-32 md:max-h-48 lg:max-h-64 2xl:max-h-72 rounded-xl'

function getProfessionalProjects() {
  const professionalProjects = [
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
      category: PROJECT_FILTER_CATEGORY_TYPE.WEBSITE,
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
      category: PROJECT_FILTER_CATEGORY_TYPE.MOBILE,
    },
  ]

  // Assign project type for consistency
  professionalProjects.forEach(
    project => (project.type = PROJECT_FILTER_TYPE.PROFESSIONAL)
  )

  return professionalProjects
}

function getPersonalProjects() {
  const personalProjects = [
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
      category: PROJECT_FILTER_CATEGORY_TYPE.UIUX,
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
      category: PROJECT_FILTER_CATEGORY_TYPE.MOBILE,
    },
  ]

  // Assign project type for consistency
  personalProjects.forEach(
    project => (project.type = PROJECT_FILTER_TYPE.PERSONAL)
  )

  return personalProjects
}

function getProjectList(projectType, projectCategory) {
  const professionalProjects = getProfessionalProjects()
  const personalProjects = getPersonalProjects()

  const combinedProjects = personalProjects.concat(professionalProjects)

  // Filter by parameter
  let filtered = combinedProjects.filter(
    project => project.type === projectType
  )
  if (projectCategory !== PROJECT_FILTER_CATEGORY_TYPE.ALL) {
    filtered = filtered.filter(project => project.category === projectCategory)
  }

  return filtered
}

const ProjectFilter = ({
  projectType,
  setProjectType,
  setProjectCategory,
  isCategoryCollapsed,
  setIsCategoryCollapsed,
}) => {
  const handleProjectTypeChange = (event, selectedProjectType) => {
    // Compare the former value of projectType with the new one
    if (selectedProjectType === projectType) {
      // Open / Close the category dropdown
      setIsCategoryCollapsed(!isCategoryCollapsed)
      return
    }

    setProjectType(selectedProjectType)
    if (!isCategoryCollapsed) {
      setIsCategoryCollapsed(true)
    }

    changeTextColorByID(event.target.id)
  }

  const handleProjectCategoryChange = (event, selectedCategory) => {
    setProjectCategory(selectedCategory)
    changeTextColorByID(event.target.id)
  }

  function changeTextColorByID(clickedId) {
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
  }

  return (
    <div className="flex flex-col space-y-2">
      <div
        className="flex flex-row items-center font-semibold text-base lg:text-lg xl:text-xl 2xl:text-2xl space-x-4"
        id="project-type"
      >
        <button
          className="text-black focus:outline-none cursor-default"
          id="professional"
          onClick={event =>
            handleProjectTypeChange(event, PROJECT_FILTER_TYPE.PROFESSIONAL)
          }
        >
          Project
        </button>
        <p>/</p>
        <button
          className="text-gray-500 focus:outline-none cursor-default"
          id="personal"
          onClick={event =>
            handleProjectTypeChange(event, PROJECT_FILTER_TYPE.PERSONAL)
          }
        >
          Karsa Shoots
        </button>
      </div>
      <div
        className={`flex flex-row items-center font-semibold text-sm lg:text-base xl:text-xl text-2xl:text-xl text-gray-500 space-x-2 transition-all ease-in-out overflow-hidden duration-700 ${
          isCategoryCollapsed ? 'max-h-96' : 'max-h-0'
        }`}
        id="project-category"
      >
        <button
          className="text-black focus:outline-none cursor-default"
          id="all"
          onClick={event =>
            handleProjectCategoryChange(event, PROJECT_FILTER_CATEGORY_TYPE.ALL)
          }
        >
          All
        </button>
        <p>/</p>
        <button
          className="text-gray-500 focus:outline-none cursor-default"
          id="website"
          onClick={event =>
            handleProjectCategoryChange(
              event,
              PROJECT_FILTER_CATEGORY_TYPE.WEBSITE
            )
          }
        >
          Website
        </button>
        <p>/</p>
        <button
          className="text-gray-500 focus:outline-none cursor-default"
          id="mobile"
          onClick={event =>
            handleProjectCategoryChange(
              event,
              PROJECT_FILTER_CATEGORY_TYPE.MOBILE
            )
          }
        >
          Mobile App
        </button>
        <p>/</p>
        <button
          className="text-gray-500 focus:outline-none cursor-default"
          id="uiux"
          onClick={event =>
            handleProjectCategoryChange(
              event,
              PROJECT_FILTER_CATEGORY_TYPE.UIUX
            )
          }
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
    <div className="w-1/2 lg:w-1/3 hover:shadow-2xl rounded-xl">
      <a href="#" className="flex flex-col p-2 md:p-4 space-y-4">
        <div className="transition ease-in-out transform group-hover:scale-105">
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
  const [isCategoryCollapsed, setIsCategoryCollapsed] = useState(false)

  const [projectType, setProjectType] = useState(
    PROJECT_FILTER_TYPE.PROFESSIONAL
  )

  const [projectCategory, setProjectCategory] = useState(
    PROJECT_FILTER_CATEGORY_TYPE.ALL
  )

  return (
    <div className="flex flex-col p-6 lg:p-12 xl:p-16 space-y-10">
      <h2 className="font-bold text-4xl md:text-5xl xl:text-6xl 2xl:text-8xl">
        Karsa Works
      </h2>
      <ProjectFilter
        projectType={projectType}
        setProjectType={setProjectType}
        setProjectCategory={setProjectCategory}
        isCategoryCollapsed={isCategoryCollapsed}
        setIsCategoryCollapsed={setIsCategoryCollapsed}
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
