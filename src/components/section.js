'use strict'

import Component from './component'

let Section = (_id) => {
  let element = new Component(null, null, _id)
  if (_id) { element.id = _id }

  element.className = 'section'
  return element
}

export default Section
