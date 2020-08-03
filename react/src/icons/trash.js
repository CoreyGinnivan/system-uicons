import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Trash = forwardRef(
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
          transform="translate(3 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m2.5 2.5h10v12c0 1.1045695-.8954305 2-2 2h-6c-1.1045695 0-2-.8954305-2-2zm5-2c1.1045695 0 2 .8954305 2 2h-4c0-1.1045695.8954305-2 2-2z"></path>
          <path d="m.5 2.5h14"></path>
          <path d="m5.5 5.5v8"></path>
          <path d="m9.5 5.5v8"></path>
        </g>
      </svg>
    )
  }
)
Trash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Trash.displayName = 'Trash'
export default Trash
