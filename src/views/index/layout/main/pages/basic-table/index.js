import React, { Component, Fragment } from 'react'
import List from './components/list'
import { basictable } from '@/api'
import Service from './service'

export default class basicTable extends Component {
  state = {
    dataSource: [],
    total: 0,
    loading: true,
    pagination: {
      pageSize: 10,
      page: 1
    },
    columns: []
  }
  initData = async () => {
    const apiData = await basictable(this.state.pagination)
    const res = await Service(apiData)

    this.setState({
      dataSource: res.data,
      total: res.total,
      loading: false,
      columns: res.columns
    })
  }
  pageNumChange = async (page) => {
    await this.setState({
      loading: true,
      pagination: { ...this.state.pagination, page }
    })
    this.initData()
  }

  componentDidMount() {
    this.initData()
  }

  render() {
    const { pagination, dataSource, total, loading, columns } = this.state
    const pageNumChange = this.pageNumChange
    const listProps = {
      pagination: {
        current: pagination.page,
        pageSize: pagination.pageSize,
        total: total
      },
      loading: loading,
      columns: columns,
      dataSource: dataSource,
      onChange(page) {
        pageNumChange(page.current)
      }
    }

    return (
      <Fragment>
        <List {...listProps} />
      </Fragment>
    )
  }
}
