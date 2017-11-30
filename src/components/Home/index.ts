import * as page from 'page'
import * as Handlebars from 'handlebars'
import * as d3Logo from './img/d3_logo.jpg'
import * as circleAndRect from './img/circle-and-rect.jpg'
import * as template from './index.html'
import './style.css'

export default function homeInit() {

  const container: HTMLElement = document.getElementById('app') as any
  container.innerHTML = Handlebars.compile(template)({ d3Logo, circleAndRect })

  const linkCircleAndRect = container.querySelector('#circle-and-rect') as any

  linkCircleAndRect.addEventListener('click', () => {
    page('/circle-and-rect')
  })
  const svgBar = container.querySelector('#svg-bar') as any

  svgBar.addEventListener('click', () => {
    page('/svg-bar')
  })


}
