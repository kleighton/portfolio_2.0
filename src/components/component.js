'use strict'

const Component = (_type, _className, _id) => {
  let element = document.createElement(_type || 'div')
  if (_className) { element.className = _className }
  if (_id) { element.id = _id }

  return element
}

module.exports = Component
