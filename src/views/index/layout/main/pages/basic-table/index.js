import React, { Component, Fragment } from 'react'
import List from './components/list'
// import { basictable } from '@/api'
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
    // const apiData = await basictable(this.state.pagination)
    const apiData = {
      "data": [
        {
          "status": 1,
          "title": "Harlyvcbs Kdsn Ntlog Gzkb Jrqd Kuubuo",
          "author": "Perez",
          "categories": "tbw",
          "tags": "fukqg",
          "views": 105,
          "comments": 180,
          "date": "1995-02-03 13:44:54",
          "id": 10001,
          "visibility": "Public",
          "image": "http://dummyimage.com/100x100/f28379/757575.png&text=P"
        },
        {
          "status": 2,
          "title": "Ureh Kmld Yhofqaj Mbtip",
          "author": "Young",
          "categories": "lboj",
          "tags": "iiklmnzxo",
          "views": 112,
          "comments": 197,
          "date": "1999-07-12 23:24:02",
          "id": 10002,
          "visibility": "Password protected",
          "image": "http://dummyimage.com/100x100/7992f2/757575.png&text=Y"
        },
        {
          "status": 1,
          "title": "Hbktq Chwplj Odfkewcei Nheiuoa Chkbh",
          "author": "Perez",
          "categories": "cwyzls",
          "tags": "nelfwune",
          "views": 181,
          "comments": 147,
          "date": "1971-03-11 09:42:37",
          "id": 10003,
          "visibility": "Password protected",
          "image": "http://dummyimage.com/100x100/b5f279/757575.png&text=P"
        },
        {
          "status": 1,
          "title": "Xdheod Bopywimie Lksguvmt Wkoifqkx",
          "author": "Garcia",
          "categories": "ohchx",
          "tags": "srwhs",
          "views": 157,
          "comments": 29,
          "date": "2011-06-20 11:03:36",
          "id": 10004,
          "visibility": "Password protected",
          "image": "http://dummyimage.com/100x100/f279d9/757575.png&text=G"
        },
        {
          "status": 1,
          "title": "Dxovlxxm Hld Unr",
          "author": "Thomas",
          "categories": "abjxtp",
          "tags": "tayiyptl",
          "views": 163,
          "comments": 171,
          "date": "2024-04-09 21:34:15",
          "id": 10005,
          "visibility": "Public",
          "image": "http://dummyimage.com/100x100/79f2e8/757575.png&text=T"
        },
        {
          "status": 2,
          "title": "Fhuotjvk Eegpw Wxblwtsvoc",
          "author": "Walker",
          "categories": "dczqjhrf",
          "tags": "veh",
          "views": 180,
          "comments": 53,
          "date": "1985-09-06 06:18:02",
          "id": 10006,
          "visibility": "Password protected",
          "image": "http://dummyimage.com/100x100/f2c479/757575.png&text=W"
        },
        {
          "status": 2,
          "title": "Ajdsri Hdjiqwnkc Xhqwcip Nlhgpjlw Gozf",
          "author": "White",
          "categories": "fojbh",
          "tags": "rokvnhvj",
          "views": 43,
          "comments": 106,
          "date": "2000-01-08 20:04:18",
          "id": 10007,
          "visibility": "Password protected",
          "image": "http://dummyimage.com/100x100/a179f2/757575.png&text=W"
        },
        {
          "status": 2,
          "title": "Lvpnorixgf Jgvmkl Lwfbj Hvuod Shjkozfiv Weywdygs",
          "author": "Hernandez",
          "categories": "dcl",
          "tags": "jbxlocmsn",
          "views": 64,
          "comments": 55,
          "date": "2018-03-17 19:44:35",
          "id": 10008,
          "visibility": "Password protected",
          "image": "http://dummyimage.com/100x100/79f27e/757575.png&text=H"
        },
        {
          "status": 1,
          "title": "Nxcnv Jqdg Xqbyldiocp Ikhcg Wdfmej Cmzasuczda",
          "author": "Martinez",
          "categories": "hrrkuy",
          "tags": "shf",
          "views": 85,
          "comments": 52,
          "date": "2010-01-26 15:12:04",
          "id": 10009,
          "visibility": "Password protected",
          "image": "http://dummyimage.com/100x100/f27997/757575.png&text=M"
        },
        {
          "status": 2,
          "title": "Ygi Bxaurqi Thny Emsqnf",
          "author": "Lopez",
          "categories": "mbbfggms",
          "tags": "jqoo",
          "views": 90,
          "comments": 146,
          "date": "2019-03-05 16:39:25",
          "id": 10010,
          "visibility": "Password protected",
          "image": "http://dummyimage.com/100x100/79baf2/757575.png&text=L"
        }
      ],
      "total": 100
    }
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
