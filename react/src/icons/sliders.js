import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Sliders = forwardRef(
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
          <path d="m14.5 9v-6.5"></path>
          <path d="m14.5 18.5v-4.5"></path>
          <circle cx="14.5" cy="11.5" r="2.5"></circle>
          <path d="m6.5 5v-2.5"></path>
          <path d="m6.5 18.5v-8.5"></path>
          <circle cx="6.5" cy="7.5" r="2.5"></circle>
        </g>
      </svg>
    )
  }
)
Sliders.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Sliders.displayName = 'Sliders'
export default Sliders
