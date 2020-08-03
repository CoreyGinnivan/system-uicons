import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const ZoomReset = forwardRef(
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
          transform="translate(3 1)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m.5 7.5c0 2.7614237 2.23857625 5 5 5 2.76142375 0 5-2.2385763 5-5 0-2.76142375-2.23857625-5-5-5-1.60217594 0-3.02834512.75357449-3.94340319 1.92561913"></path>
          <path d="m5.5.5v4h-4" transform="matrix(-1 0 0 1 7 0)"></path>
          <path d="m14.5 16.5-5.5-5.5"></path>
        </g>
      </svg>
    )
  }
)
ZoomReset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ZoomReset.displayName = 'ZoomReset'
export default ZoomReset
