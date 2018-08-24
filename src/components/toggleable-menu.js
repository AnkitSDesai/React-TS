import React, { Fragment } from 'react'
import { Toggleable } from './toggleable'
import { withToogleable } from './with-toggleable'

const MenuItem = ({ title, toggle, show, children }) => (
  <Fragment>
    <div onClick={toggle}>
      <h1>{title}</h1>
    </div>
    {show ? children : null}
  </Fragment>
)
const ToggleableMenu = ({ title, children, show: showContent }) => (
  <Toggleable show={showContent}>
    {({ show, toggle }) => (
      <MenuItem title={title} toggle={toggle} show={show}>
        {children}
      </MenuItem>
    )}
  </Toggleable>
)
// Wrapped Stateless MenuItem with Toggleable via Component injection + Generic compoennt pattern
const ToggleableWithTitle = Toggleable.ofType()
const ToggleableMenuViaComponentInjection = ({
  title,
  children,
  show: showContent,
}) => (
  <ToggleableWithTitle
    component={MenuItem}
    props={{ title }}
    show={showContent}
  >
    {children}
  </ToggleableWithTitle>
)
// Wrapped Stateless MenuItem with withToggleable HOC pattern
const ToggleableMenuViaHOC = withToogleable(MenuItem)
export {
  ToggleableMenu,
  ToggleableMenuViaComponentInjection,
  ToggleableMenuViaHOC,
}
//# sourceMappingURL=toggleable-menu.jsx.map
