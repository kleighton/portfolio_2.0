'use strict'

import Component from './component'

var Header = new Component(null, 'header', 'header')
setTimeout(() => {
  Header.style.opacity = '1'
}, 300)

Header.logo = new Component(null, 'header-logo', null)
Header.logo.innerHTML = 'leighton'

Header.nav = new Component('ul', 'header-nav', null)
Header.items = [ 'Projects', 'Services', 'Contact' ]

var sectionLinks = []

let resetActiveLink = (array) => {
  array.forEach(item => {
    item.className = ''
  })
}

Header.items.forEach(element => {
  var item = new Component('li', null, null)
  item.innerHTML = element
  var sectionLink = new Component('a', null, null)
  sectionLink.href = '#' + element
  sectionLink.appendChild(item)
  sectionLinks.push(item)
  Header.nav.appendChild(sectionLink)
  sectionLink.addEventListener('click', function () {
    resetActiveLink(sectionLinks)
    item.className = 'active'
  })
})

Header.appendChild(Header.logo)
Header.appendChild(Header.nav)

export default Header
