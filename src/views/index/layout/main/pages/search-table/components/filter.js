/* global document */
import React, { PureComponent } from 'react'

import { Form, Button, Row, Col, Input, Cascader } from 'antd'
import city from './city'

const { Search } = Input

const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
}

const TwoColProps = {
  ...ColProps,
  xl: 96,
}

@Form.create()
class Filter extends PureComponent {
  handleFields = fields => {
    // const { createTime } = fields
    // if (createTime.length) {
    //   fields.createTime = [
    //     moment(createTime[0]).format('YYYY-MM-DD'),
    //     moment(createTime[1]).format('YYYY-MM-DD'),
    //   ]
    // }
    return fields
  }

  handleSubmit = () => {
    const { onFilterChange, form } = this.props
    const { getFieldsValue } = form

    let fields = getFieldsValue()
    fields = this.handleFields(fields)
    onFilterChange(fields)
  }

  handleReset = () => {
    const { form } = this.props
    const { getFieldsValue, setFieldsValue } = form

    const fields = getFieldsValue()
    for (let item in fields) {
      if ({}.hasOwnProperty.call(fields, item)) {
        if (fields[item] instanceof Array) {
          fields[item] = []
        } else {
          fields[item] = undefined
        }
      }
    }
    setFieldsValue(fields)
    this.handleSubmit()
  }
  handleChange = (key, values) => {
    const { form, onFilterChange } = this.props
    const { getFieldsValue } = form

    let fields = getFieldsValue()
    fields[key] = values
    fields = this.handleFields(fields)
    onFilterChange(fields)
  }

  render() {
    const { filter, form } = this.props
    const { getFieldDecorator } = form
    const { name, address } = filter

    return (
      <Row gutter={24}>
        <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
          {getFieldDecorator('name', { initialValue: name })(
            <Search
              placeholder={`Search Name`}
              onSearch={this.handleSubmit}
            />
          )}
        </Col>
        <Col
          {...ColProps}
          xl={{ span: 4 }}
          md={{ span: 8 }}
          id="addressCascader"
        >
          {getFieldDecorator('address', { initialValue: address })(
            <Cascader
              style={{ width: '100%' }}
              options={city}
              placeholder={`Please pick an address`}
              onChange={this.handleChange.bind(this, 'address')}
              getPopupContainer={() =>
                document.getElementById('addressCascader')
              }
            />
          )}
        </Col>
        <Col
          {...TwoColProps}
          xl={{ span: 10 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <div>
            <Button
              style={{ marginRight: 8 }}
              type="primary"
              className="margin-right"
              onClick={this.handleSubmit}
            >
              Search
            </Button>
            <Button onClick={this.handleReset}>
              Reset
            </Button>
          </div>


        </Col>
      </Row>
    )
  }
}

export default Filter
