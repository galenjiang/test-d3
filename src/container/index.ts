import * as page from 'page'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/css/reset.css'
import './style.css'
import homeInit from '../components/Home'
import CircleAndRect from '../components/CircleAndRect'
import SvgBar from '../components/SvgBar'


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
    CircleAndRect()
  })
  page('/svg-bar', (ctx, next) => {
    SvgBar()
  })
  page('*', () => {
    container.innerHTML = 'not found!!!!!!'
  })
  page(location.pathname)
}

export default init
