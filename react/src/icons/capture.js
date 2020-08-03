import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Capture = forwardRef(
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
          fill-rule="evenodd"
          stroke="#2a2e3b"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(2 2)"
        >
          <path
            d="m16.5.48528137v3.00587879c0 1.10227101-.8918463 1.99674656-1.9941126 1.99999133l-3.0058874.00884851"
            transform="matrix(1 0 0 -1 0 5.985)"
          ></path>
          <path d="m16.5 11.5v3c0 1.1045695-.8954305 2-2 2h-3"></path>
          <path
            d="m5.5 5.5-3.00588742-.00884851c-1.10226624-.00324477-1.99411258-.89772032-1.99411258-1.99999133v-3.00587879"
            transform="matrix(1 0 0 -1 0 5.985)"
          ></path>
          <path d="m5.5 16.5h-3c-1.1045695 0-2-.8954305-2-2v-3"></path>
        </g>
      </svg>
    )
  }
)
Capture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Capture.displayName = 'Capture'
export default Capture
