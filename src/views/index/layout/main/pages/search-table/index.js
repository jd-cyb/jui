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
    // const res = await searchtable({ ...this.state.pagination, ...this.state.filters });
    const res = {
      "data": [
        {
          "id": "640000199701301499",
          "name": "Richard Clark",
          "nickName": "Anderson",
          "phone": "14256169133",
          "age": 13,
          "address": "山西省 大同市 阳高县",
          "isMale": true,
          "email": "e.eiv@lwcyscu.bv",
          "createTime": "2019-02-19 09:45:33",
          "avatar": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
        },
        {
          "id": "540000198305187227",
          "name": "Sandra Miller",
          "nickName": "Perez",
          "phone": "17297285267",
          "age": 38,
          "address": "台湾 澎湖县 湖西乡",
          "isMale": true,
          "email": "n.vsxut@hqct.kw",
          "createTime": "2023-06-14 08:23:26",
          "avatar": "https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg"
        },
        {
          "id": "37000020020601664X",
          "name": "Anna Clark",
          "nickName": "Miller",
          "phone": "14677427699",
          "age": 70,
          "address": "海南省 海口市 美兰区",
          "isMale": false,
          "email": "m.olub@pxwhvzn.pk",
          "createTime": "2023-04-24 11:01:06",
          "avatar": "https://d3iw72m71ie81c.cloudfront.net/male-5.jpg"
        },
        {
          "id": "360000201304281888",
          "name": "Shirley Garcia",
          "nickName": "Brown",
          "phone": "17136081270",
          "age": 90,
          "address": "重庆 重庆市 长寿区",
          "isMale": false,
          "email": "i.eltpufj@xlo.mz",
          "createTime": "2004-05-19 12:13:38",
          "avatar": "https://d3iw72m71ie81c.cloudfront.net/male-5.jpg"
        },
        {
          "id": "230000202407087127",
          "name": "Sarah Anderson",
          "nickName": "Martin",
          "phone": "14950635813",
          "age": 33,
          "address": "吉林省 辽源市 东丰县",
          "isMale": false,
          "email": "w.kvsw@vsqm.is",
          "createTime": "1998-04-10 20:43:42",
          "avatar": "https://pbs.twimg.com/profile_images/584098247641300992/N25WgvW_.png"
        },
        {
          "id": "23000020010821262X",
          "name": "John Clark",
          "nickName": "Williams",
          "phone": "15352948622",
          "age": 49,
          "address": "西藏自治区 山南地区 洛扎县",
          "isMale": true,
          "email": "b.perkwlpy@cfl.dm",
          "createTime": "2004-01-07 14:38:15",
          "avatar": "https://images.pexels.com/photos/413723/pexels-photo-413723.jpeg?h=350&auto=compress&cs=tinysrgb"
        },
        {
          "id": "430000199007187367",
          "name": "Gary Lopez",
          "nickName": "Clark",
          "phone": "17285307167",
          "age": 90,
          "address": "青海省 海北藏族自治州 刚察县",
          "isMale": true,
          "email": "f.iysmsy@qitijx.mg",
          "createTime": "2012-10-31 10:41:49",
          "avatar": "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
          "id": "350000199501055431",
          "name": "Kimberly White",
          "nickName": "Walker",
          "phone": "15858576344",
          "age": 62,
          "address": "宁夏回族自治区 固原市 隆德县",
          "isMale": false,
          "email": "j.tkswpzq@rwjecm.et",
          "createTime": "2003-05-25 13:35:39",
          "avatar": "https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg"
        },
        {
          "id": "120000200702231406",
          "name": "Kenneth Brown",
          "nickName": "Perez",
          "phone": "15356473624",
          "age": 51,
          "address": "江西省 九江市 永修县",
          "isMale": false,
          "email": "p.tjipyc@urrvxtphp.pk",
          "createTime": "1980-01-18 21:06:48",
          "avatar": "https://randomuser.me/api/portraits/men/43.jpg"
        },
        {
          "id": "210000201001217771",
          "name": "George Perez",
          "nickName": "Hernandez",
          "phone": "14713641760",
          "age": 99,
          "address": "海南省 海口市 其它区",
          "isMale": false,
          "email": "l.hgxk@yqjlwnb.es",
          "createTime": "1972-08-05 12:52:15",
          "avatar": "https://randomuser.me/api/portraits/women/65.jpg"
        }
      ],
      "total": 80
    }
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
