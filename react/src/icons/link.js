import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Link = forwardRef(
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
          transform="translate(3 4)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m4.17157288 4.87867966v-1.41421357c0-1.56209716 1.26632995-2.82842712 2.82842712-2.82842712s2.82842712 1.26632996 2.82842712 2.82842712v1.41421357m0 2.82842712v2.82842712c0 1.5620972-1.26632995 2.8284271-2.82842712 2.8284271s-2.82842712-1.2663299-2.82842712-2.8284271v-2.82842712"
            transform="matrix(.70710678 .70710678 -.70710678 .70710678 7 -2.899495)"
          ></path>
          <path d="m4.5 9.5 5-5"></path>
        </g>
      </svg>
    )
  }
)
Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Link.displayName = 'Link'
export default Link
