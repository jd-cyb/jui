import React, { PureComponent, Fragment } from 'react'
import { Row, Col, Button, Popconfirm } from 'antd'

import List from './components/list'
import Filter from './components/filter'
import { searchtable } from '@/api'

export default class User extends PureComponent {
  state = {
    dataSource: [],
    total: 0,
    loading: true,
    pagination: {
      pageSize: 10,
      page: 1
    },
    filters: {},
    selectedRowKeys: []
  }
  initData = async () => {
    const res = await searchtable({ ...this.state.pagination, ...this.state.filters });
    this.setState({
      dataSource: res.data,
      total: res.total,
      loading: false
    });
  }
  pageNumChange = async (page) => {
    console.log(page)
    await this.setState({
      loading: true,
      pagination: { ...this.state.pagination, page }
    })
    this.initData()
  }

  filterChange = async (filters) => {
    await this.setState({
      loading: true,
      filters: filters,
      pagination: { ...this.state.pagination, ...{ page: 1 } }
    })
    this.initData()
  }

  componentDidMount() {
    this.initData();
  }

  render() {
    const { location } = this.props
    const { query } = location
    const { pagination, dataSource, total, loading, selectedRowKeys } = this.state
    const pageNumChange = this.pageNumChange
    const filterChange = this.filterChange
    const listProps = {
      pagination: {
        current: pagination.page,
        pageSize: pagination.pageSize,
        total: total
      },
      loading: loading,
      dataSource: dataSource,
      onChange(page) {
        pageNumChange(page.current)
      },
      //列表删除
      onDeleteItem(id) {
        console.log(id)
      },
      //列表编辑
      onEditItem(item) {
        console.log(item)
      },
      rowSelection: {
        selectedRowKeys,
        onChange: keys => {
          this.setState({
            selectedRowKeys: keys
          });
        },
      },
    }

    //搜索
    const filterProps = {
      filter: {
        ...query,
      },
      onFilterChange(filters) {
        filterChange(filters)
      }
    }

    //批量删除
    const handleDeleteItems = () => {
      console.log(selectedRowKeys) //批量删除
    }

    return (
      <Fragment>
        <Filter {...filterProps} />
        {selectedRowKeys.length > 0 && (
          <Row style={{ marginBottom: 24, textAlign: 'right', fontSize: 13 }}>
            <Col>
              {`Selected ${selectedRowKeys.length} items `}
              <Popconfirm
                title="Are you sure delete these items?"
                placement="left"
                onConfirm={handleDeleteItems}
              >
                <Button type="primary" style={{ marginLeft: 8 }}>
                  Remove
                </Button>
              </Popconfirm>
            </Col>
          </Row>
        )}
        <List {...listProps} />
      </Fragment>
    )
  }
}
