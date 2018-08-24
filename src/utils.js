import { Children } from 'react'
export const isEmptyChildren = children => Children.count(children) === 0
export const isFunction = value => typeof value === 'function'
export const getComponentName = component =>
  component.displayName || component.name
export const getHocComponentName = (hocName, component) =>
  `${hocName}(${getComponentName(component)})`
export const withDefaultProps = (Cmp, defaultProps) => {
  // here we set our defaultProps
  Cmp.defaultProps = defaultProps
  // we override return type definition by turning type checker off and setting the correct return type
  return Cmp
}
//# sourceMappingURL=utils.js.map
