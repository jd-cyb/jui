import React from 'react'

import { Chart, Coord, Legend, Tooltip, Pie } from 'viser-react';

export default class PieRangeReact extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { options } = this.props
    const { data } = options
    const { width = "100%", height = "700" } = this.props

    return < Chart forceFit={true} width={width} height={height} padding={[40, 0]} data={data} >
      <Tooltip />
      <Legend dataKey="type" />
      <Coord type="theta" startAngle={180} endAngle={270} />
      <Pie position="value" color="type" label="type" />
    </Chart >
  }
}
