import React, { Component, Fragment } from 'react';

import ChartComponent from '../components/bar'

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

export default class VerticalBarPage extends Component {

  render() {
    return (
      <Fragment>
        <ChartComponent options={chartOptions} height={500}/>
      </Fragment>
    )
  }
}
