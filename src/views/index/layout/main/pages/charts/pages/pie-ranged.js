import React, { Component, Fragment } from 'react';

import asyncComponents from '@/components/async-components' //异步组件

const PieRanged = asyncComponents(() => import('../components/pie-ranged'))

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

export default class pieRanged extends Component {

  render() {
    return (
      <Fragment>
        <PieRanged options={chartOptions}/>
      </Fragment>
    )
  }
}
