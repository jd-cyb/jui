import React, { Component, Fragment } from 'react';

import ChartComponent from '../components/pie-ranged'

const chartOptions = {
  data : [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: 'Other',
      value: 5,
    },
  ]
}

export default class PieRangedPage extends Component {

  render() {
    return (
      <Fragment>
        <ChartComponent options={chartOptions}/>
      </Fragment>
    )
  }
}
