import React, { PureComponent } from 'react'
import { Table, Avatar } from 'antd'
import styles from './list.less'

class List extends PureComponent {
  render() {
    const { columns, ...tableProps } = this.props

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => `Total ${total} Items`,
        }}
        bordered
        scroll={{ x: 1200 }}
        className={styles.table}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

export default List
