import { observable, action } from 'mobx'

class Step {
  //定义状态并使其可观察
  @observable step = {
    payAccount: '',
    receiverAccount: '',
    receiverName: '',
    amount: '',
  }

  //定义动作更改状态
  @action setStep = (values) => {
    this.step = Object.assign(this.step, values)
  }
}

export default {
  Step: new Step()
}
