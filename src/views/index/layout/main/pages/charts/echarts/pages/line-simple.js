import React, { Component, Fragment } from 'react';

import ChartComponent from '../components/line'

const chartOptions = {
  xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
  }]
}

export default class LineSimplePage extends Component {

  render() {
    return (
      <Fragment>
        <ChartComponent options={chartOptions}/>
      </Fragment>
    )
  }
}
