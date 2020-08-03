import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Reuse = forwardRef(
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
          transform="translate(2 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g transform="matrix(0 -1 1 0 .5 16.5)">
            <path
              d="m16.25.75v5h-5.5"
              transform="matrix(0 1 1 0 10.25 -10.25)"
            ></path>
            <path d="m16 6c-2.8366699-3.33333333-5.6700033-5-8.5-5-2.82999674 0-5.32999674 1-7.5 3"></path>
          </g>
          <g transform="matrix(0 1 -1 0 16 0)">
            <path
              d="m16.75.25v5h-5.5"
              transform="matrix(0 1 1 0 11.25 -11.25)"
            ></path>
            <path d="m16.5 5.5c-2.8366699-3.33333333-5.6700033-5-8.5-5-2.82999674 0-5.32999674 1-7.5 3"></path>
          </g>
        </g>
      </svg>
    )
  }
)
Reuse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Reuse.displayName = 'Reuse'
export default Reuse
