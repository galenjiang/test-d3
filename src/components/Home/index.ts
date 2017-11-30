import * as page from 'page'
import * as Handlebars from 'handlebars'
import * as circleAndRect from './img/circle-and-rect.jpg'
import * as template from './index.html'

console.log(template)

export default function homeInit() {

  const container: HTMLElement = document.getElementById('app') as any
  container.innerHTML = Handlebars.compile(template)({ circleAndRect })
  const linkCircleAndRect = container.querySelector('#circleAndRect') as any

  linkCircleAndRect.addEventListener('click', () => {
    page('/circle-and-rect')
  })
}
