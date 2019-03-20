import React from 'react'
import { Avatar } from 'antd'

/**
 * service服务器处理数据的示例，最好columns的表头配置放在components/list.js文件中
 */
const columns = [
  {
    title: `Image`,
    dataIndex: 'image',
    render: text => <Avatar shape="square" src={text} />,
  },
  {
    title: `Title`,
    dataIndex: 'title'
  },
  {
    title: `Author`,
    dataIndex: 'author',
  },
  {
    title: `Categories`,
    dataIndex: 'categories',
  },
  {
    title: `Tags`,
    dataIndex: 'tags',
  },
  {
    title: `Visibility`,
    dataIndex: 'visibility',
  },
  {
    title: `Comments`,
    dataIndex: 'comments',
  },
  {
    title: `Views`,
    dataIndex: 'views',
  },
  {
    title: `Publish Date`,
    dataIndex: 'date',
  },
]

export default async (data) => {
  // 处理 data
  return {...data,...{columns:columns}};
}
