import React, { Component, Fragment } from 'react';

import asyncComponents from '@/components/async-components' //异步组件

const LineChart = asyncComponents(() => import('../components/line'))

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

export default class lineChart extends Component {

  render() {
    return (
      <Fragment>
        <LineChart options={chartOptions}/>
      </Fragment>
    )
  }
}
