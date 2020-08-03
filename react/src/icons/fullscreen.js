import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Fullscreen = forwardRef(
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
          stroke="#2A2E3B"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(2 2)"
        >
          <polyline
            points="16.5 .522 16.5 5.5 11 5.487"
            transform="matrix(1 0 0 -1 0 6.022)"
          ></polyline>
          <line
            x1="13.533"
            x2="13.467"
            y1="-.734"
            y2="7.685"
            transform="rotate(45 13.5 3.476)"
          ></line>
          <polyline
            points="16.498 11.023 16.5 16.523 11 16.51"
            transform="matrix(0 1 1 0 -.023 .023)"
          ></polyline>
          <line
            x1="13.533"
            x2="13.467"
            y1="9.266"
            y2="17.685"
            transform="scale(1 -1) rotate(45 46.033 0)"
          ></line>
          <polyline
            points="5.75 .25 .75 .25 .75 5.75"
            transform="matrix(0 1 1 0 .25 -.25)"
          ></polyline>
          <line
            x1="3.533"
            x2="3.467"
            y1="-.734"
            y2="7.685"
            transform="scale(1 -1) rotate(45 11.891 0)"
          ></line>
          <polyline
            points="6 11.507 .5 11.5 .5 16.523"
            transform="matrix(1 0 0 -1 0 28.023)"
          ></polyline>
          <line
            x1="3.5"
            x2="3.5"
            y1="9.257"
            y2="17.743"
            transform="rotate(45 3.5 13.5)"
          ></line>
        </g>
      </svg>
    )
  }
)
Fullscreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Fullscreen.displayName = 'Fullscreen'
export default Fullscreen
