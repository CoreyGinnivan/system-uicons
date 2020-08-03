import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const GraphBar = forwardRef(
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
        <g
          fill="none"
          stroke={color}
          transform="translate(3 3)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m.5.5v12c0 1.1045695.8954305 2 2 2h11.5"></path>
          <path d="m3.5 8.5v3"></path>
          <path d="m7.5 5.5v6"></path>
          <path d="m11.5 2.5v9"></path>
        </g>
      </svg>
    )
  }
)
GraphBar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
GraphBar.displayName = 'GraphBar'
export default GraphBar
