import React, { Component } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { getHocComponentName } from '../utils'
import { Toggleable } from './toggleable'
export const withToogleable = UnwrappedComponent => {
  class WithToggleable extends Component {
    render() {
      const { show, ...rest } = this.props
      return (
        <Toggleable
          show={show}
          render={renderProps => (
            <UnwrappedComponent {...rest} {...renderProps} />
          )}
        />
      )
    }
  }
  WithToggleable.displayName = getHocComponentName(
    WithToggleable.displayName,
    UnwrappedComponent
  )
  WithToggleable.WrappedComponent = UnwrappedComponent
  return hoistNonReactStatics(WithToggleable, UnwrappedComponent)
}
//# sourceMappingURL=with-toggleable.jsx.map
