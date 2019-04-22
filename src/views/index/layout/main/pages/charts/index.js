import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Radio } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

import routes from './routes';

export default class echartsDemo extends Component {

  render() {
    const onChange = (e)=> {
      const { history } = this.props;
      history.push(`/charts/${e.target.value}`)
      console.log(`radio checked:${e.target.value}`);
    }

    return (
      <Fragment>
        <RadioGroup onChange={onChange} defaultValue="vertical-bar" size="large">
          <RadioButton value="vertical-bar">垂直柱状图</RadioButton>
          <RadioButton value="horizontal-bar">水平柱状图</RadioButton>
          <RadioButton value="bar-stack">垂直堆叠柱状图</RadioButton>
          <RadioButton value="pie-simple">饼图</RadioButton>
          <RadioButton value="line-simple">折线图</RadioButton>
          <RadioButton value="pie-doughnut">环形图</RadioButton>
          <RadioButton value="pie-ranged">扇形图</RadioButton>
          <RadioButton value="radar">雷达图</RadioButton>
          <RadioButton value="funnel">漏斗图</RadioButton>
        </RadioGroup>
        <Switch>
          {routes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (
                  <route.component {...props} />
                )} />
            ) : (null);
          })}
          <Redirect from="/charts" to="/charts/vertical-bar" />
        </Switch>
      </Fragment>
    )
  }
}
