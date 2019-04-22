import React, { Component, Fragment } from 'react';

import asyncComponents from '@/components/async-components' //异步组件

const Bar = asyncComponents(() => import('../components/bar'))

const chartOptions = {
  xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
  }]
}

export default class verticalBar extends Component {

  render() {
    return (
      <Fragment>
        <Bar options={chartOptions} height={500}/>
      </Fragment>
    )
  }
}
