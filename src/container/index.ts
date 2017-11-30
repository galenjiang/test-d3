import * as page from 'page'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/css/reset.css'
import './style.css'
import circleAndRectInit from '../components/CircleAndRect'
import homeInit from '../components/Home'


function init() {
  const container: HTMLElement = document.getElementById('app') as any

  page({
    hashbang: false,
  })
  page((ctx, next) => {
    container.innerHTML = ''
    next()
  })
  page('/', (ctx, next) => {
    homeInit()
  })
  page('/circle-and-rect', (ctx, next) => {
    circleAndRectInit()
  })
  page('*', () => {
    container.innerHTML = 'not found!!!!!!'
  })
  page('/')
}

export default init
