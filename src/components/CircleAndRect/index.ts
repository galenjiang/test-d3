import * as d3 from 'd3'

export default () => {
  const container = document.getElementById('app')
  const width = (container as HTMLElement).offsetWidth
  const height = (container as HTMLElement).offsetHeight
  const context = d3.select(container).append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .attr('viewBox', `0 0 ${width} ${height}`)
  context.append('rect')
    .attr('width', 600)
    .attr('height',300)
    .attr('transform', `translate(${width / 2}, ${height / 2})`)
    .attr('fill', 'red')
  context.append('circle')
    .attr('r', '100px')
    .attr('rx', '0')
    .attr('ry', '0')
    .attr('transform', `translate(${width / 2}, ${height / 2})`)
    .attr('fill', 'green')
}
