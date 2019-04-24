import React from 'react'

import { Chart, Guide, Tooltip, Interval } from 'viser-react'

export default class PieRangeComponent extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { options } = this.props
    const { data } = options
    const { height = "400" } = this.props
    const scale = [
      {
        dataKey: 'value',
        min: 0,
        max: 100,
      },
    ]
    return (
      <Chart
        container="mountNode"
        forceFit={true}
        height={height}
        data={data}
        padding={0}
        scale={scale}
      >
        <Tooltip />
        <Interval
          position="gender*value"
          color="gender"
          shape="liquid-fill-gauge"
          style={{
            lineWidth: 10,
            opacity: 0.75,
          }}
        />
        {data.map((row, index) => {
          return (
            <Guide
              key={index}
              type="text"
              top={true}
              position={{
                gender: row.gender,
                value: 50,
              }}
              content={row.value + '%'}
              style={{
                fontSize: 40,
                textAlign: 'center',
              }}
            />
          );
        })}
      </Chart>
    )
  }
}
