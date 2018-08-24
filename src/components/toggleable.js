import React, { Component } from 'react'
import { isFunction } from '../utils'
const initialState = { show: false }
const defaultProps = { ...initialState, props: {} }
export class Toggleable extends Component {
  constructor() {
    super(...arguments)
    this.state = { show: this.props.show }
    this.toggle = event => this.setState(updateShowState)
  }
  static ofType() {
    return Toggleable
  }
  componentWillReceiveProps(nextProps, nextContext) {
    const currentProps = this.props
    if (nextProps.show !== currentProps.show) {
      this.setState({ show: Boolean(nextProps.show) })
    }
  }
  render() {
    const { component: InjectedComponent, children, render, props } = this.props
    const renderProps = { show: this.state.show, toggle: this.toggle }
    if (InjectedComponent) {
      return (
        <InjectedComponent {...props} {...renderProps}>
          {children}
        </InjectedComponent>
      )
    }
    if (render) {
      return render(renderProps)
    }
    return isFunction(children) ? children(renderProps) : new Error('asdsa()')
  }
}
Toggleable.defaultProps = defaultProps
const updateShowState = prevState => ({ show: !prevState.show })
//# sourceMappingURL=toggleable.jsx.map
