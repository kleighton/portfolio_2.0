'use strict'

import Component from '@@/components/component.js'
import Section from '@@/components/section.js'

var sectionProjects = new Section('Projects')
sectionProjects.classList += ' project-grid'

var projectGrid = new Component('div', 'project-grid', null)
projectGrid.style.opacity = '0.0'
setTimeout(() => {
  projectGrid.style.opacity = '1'
}, 300)
var projects = [
  {
    name: 'Unique Pools',
    logo: 'img/unique_pools.png',
    backgroundColor: '#222',
    description: 'Custom wordpress theme for client.'
  },
  {
    name: 'Boomrox',
    logo: 'img/boomrox_logo.png',
    backgroundColor: '#111',
    description: 'Shopify, custom Javascript Shopify API functionality and Sass creation.'
  },
  {
    name: 'Boomrox',
    logo: 'img/MYOB_logo_RGB_1475x779.png',
    backgroundColor: '#eee',
    description: 'Shopify, custom Javascript Shopify API functionality and Sass creation.'
  },
  {
    name: 'Boomrox',
    logo: 'img/icon-png-logos-7.jpg',
    backgroundColor: '#124',
    description: 'Shopify, custom Javascript Shopify API functionality and Sass creation.'
  },
  {
    name: 'Leighton Real Estate',
    logo: 'img/leightonre.png',
    backgroundColor: '#ededed',
    description: 'Custom wordpress site, designed from scratch for client.'
  },
  {
    name: 'Boomrox',
    logo: 'img/apex-legends-logo-high-resolution-dli.png',
    backgroundColor: '#009cee',
    description: 'Shopify, custom Javascript Shopify API functionality and Sass creation.'
  }
]

projects.forEach((element) => {
  var project = new Component('div', 'project-grid-item', null)
  project.style.backgroundColor = element.backgroundColor
  project.setAttribute('description', element.description)
  var projectLogo = new Component('img', 'project-grid-item-logo', null)
  projectLogo.src = element.logo
  project.appendChild(projectLogo)
  projectGrid.appendChild(project)
})

sectionProjects.appendChild(projectGrid)

export default sectionProjects
