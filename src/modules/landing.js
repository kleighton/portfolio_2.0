'use strict'

import Component from '@@/components/component.js'
import Section from '@@/components/section.js'

var sectionLanding = new Section('landing')
sectionLanding.style.opacity = '0.0'
sectionLanding.classList += ' section-landing'
setTimeout(() => {
  sectionLanding.style.opacity = '1'
}, 300)

var bannerText = new Component('div', 'banner-text', null)
bannerText.innerHTML = 'Front-end Developer'

var bannerText2 = new Component('div', 'banner-text-small', null)
bannerText2.innerHTML = 'Helping start-ups, small businesses, and agencies achieve high quality websites and exceptional user experience'

var sectionTrigger = new Component('a', 'section-trigger', null)
sectionTrigger.href = '#Projects'

var sectionTriggerText = new Component('div', 'section-trigger-text', null)
sectionTriggerText.innerHTML = 'View Projects'

var sectionTriggerIcon = new Component('div', 'section-trigger-icon', null)
sectionTriggerIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>'

sectionTrigger.appendChild(sectionTriggerText)
sectionTrigger.appendChild(sectionTriggerIcon)

sectionLanding.appendChild(bannerText)
sectionLanding.appendChild(bannerText2)
sectionLanding.appendChild(sectionTrigger)

/* Waves Animation */
var waveContainer = new Component('div', 'wave-container', null)
waveContainer.innerHTML = '<div><svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="none"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path></defs><g class="parallax"><use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.2"></use><use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.3)"></use><use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"></use><use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.4)"></use></g></svg></div>'
sectionLanding.appendChild(waveContainer)

export default sectionLanding
