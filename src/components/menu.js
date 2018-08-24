import React, { Component, Fragment } from 'react'
import {
  ToggleableMenu,
  ToggleableMenuViaComponentInjection,
  ToggleableMenuViaHOC,
} from './toggleable-menu'
const initialState = { showContents: false }
export class Menu extends Component {
  constructor() {
    super(...arguments)
    this.state = initialState
    this.toggleShowContents = () =>
      this.setState(prevState => ({ showContents: !prevState.showContents }))
  }
  render() {
    console.log(this.props)
    const { showContents } = this.state
    return (
      <Fragment>
        <button onClick={this.toggleShowContents}>Toggle show content</button>
        <hr />
        <ToggleableMenu title="First Menu" show={showContents}>
          <p>Some content</p>
        </ToggleableMenu>
        <ToggleableMenuViaComponentInjection
          title="Second Menu"
          show={showContents}
        >
          <p>Another content</p>
        </ToggleableMenuViaComponentInjection>
        <ToggleableMenuViaHOC title="Third Menu" show={showContents}>
          <p>More content</p>
        </ToggleableMenuViaHOC>
      </Fragment>
    )
  }
}
//# sourceMappingURL=menu.jsx.map
