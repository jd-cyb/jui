import React from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/pie'

export default class PieComponent extends React.Component {

  constructor(props) {
    super(props)
    this.initPie = this.initPie.bind(this)
  }

  initPie() {
    const { options = {} } = this.props //外部传入的data数据
    let myChart = echarts.init(this.ID) //初始化echarts

    //设置options
    myChart.setOption(options)
    window.onresize = function () {
      myChart.resize()
    }
  }

  componentDidMount() {
    this.initPie()
  }

  componentDidUpdate() {
    this.initPie()
  }

  render() {
    const { width = "100%", height = "300px" } = this.props
    return <div ref={ID => this.ID = ID} style={{ width, height }}></div>
  }
}
