import { observable, action } from 'mobx'

class Collapsed {
  @observable collapsed = false

  @action toggleCollapse = (collapsed) => {
    this.collapsed = collapsed === undefined ? !this.collapsed : collapsed
  }
}

export default new Collapsed()
