import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const LinkBroken = forwardRef(
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
          <path
            d="m5.17157288 6.87867966v-1.41421357c0-1.56209716 1.26632995-2.82842712 2.82842712-2.82842712s2.8284271 1.26632996 2.8284271 2.82842712v1.41421357m0 2.82842712v2.82842712c0 1.5620972-1.26632993 2.8284271-2.8284271 2.8284271s-2.82842712-1.2663299-2.82842712-2.8284271v-2.82842712"
            transform="matrix(.70710678 .70710678 -.70710678 .70710678 8.707107 -3.020815)"
          ></path>
          <path d="m5.5 3.5v-3"></path>
          <path d="m.5 5.5h3"></path>
          <path d="m11.5 16.5v-3"></path>
          <path d="m13.5 11.5h3"></path>
        </g>
      </svg>
    )
  }
)
LinkBroken.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
LinkBroken.displayName = 'LinkBroken'
export default LinkBroken
