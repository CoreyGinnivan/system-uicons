import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Grid = forwardRef(
  ({ color = 'currentColor', size = 21, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 21 21"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        <path
          d="m9.5.5h4c.5522847 0 1 .44771525 1 1v4c0 .55228475-.4477153 1-1 1h-4c-.55228475 0-1-.44771525-1-1v-4c0-.55228475.44771525-1 1-1zm-8 0h4c.55228475 0 1 .44771525 1 1v4c0 .55228475-.44771525 1-1 1h-4c-.55228475 0-1-.44771525-1-1v-4c0-.55228475.44771525-1 1-1zm8 8h4c.5522847 0 1 .44771525 1 1v4c0 .5522847-.4477153 1-1 1h-4c-.55228475 0-1-.4477153-1-1v-4c0-.55228475.44771525-1 1-1zm-8 0h4c.55228475 0 1 .44771525 1 1v4c0 .5522847-.44771525 1-1 1h-4c-.55228475 0-1-.4477153-1-1v-4c0-.55228475.44771525-1 1-1z"
          fill="none"
          stroke="#2a2e3b"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(3 3)"
        ></path>
      </svg>
    )
  }
)
Grid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Grid.displayName = 'Grid'
export default Grid
