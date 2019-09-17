import '@@/styles/main.scss'
import Header from '@@/components/header.js'
import sectionLanding from '@@/modules/landing.js'
import sectionProjects from '@@/modules/projects.js'

const appContainer = document.getElementById('app')
appContainer.appendChild(Header)
appContainer.appendChild(sectionLanding)
appContainer.appendChild(sectionProjects)
