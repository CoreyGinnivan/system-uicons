import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Drag = forwardRef(
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
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m4.5 7.5h12"></path>
          <path d="m4.498 10.5h11.997"></path>
          <path d="m4.5 13.5h11.995"></path>
        </g>
      </svg>
    )
  }
)
Drag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Drag.displayName = 'Drag'
export default Drag
