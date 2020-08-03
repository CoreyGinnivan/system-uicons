import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Marquee = forwardRef(
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
          <path d="m.5 3.5v-1c0-1.1045695.8954305-2 2-2h1"></path>
          <path
            d="m.5 16.5v-1c0-1.1045695.8954305-2 2-2h1"
            transform="matrix(0 -1 1 0 -13 17)"
          ></path>
          <path
            d="m13.5 3.5v-1c0-1.1045695.8954305-2 2-2h1"
            transform="matrix(-1 0 0 1 30 0)"
          ></path>
          <path
            d="m13.5 16.5v-1c0-1.1045695.8954305-2 2-2h1"
            transform="matrix(0 -1 -1 0 30 30)"
          ></path>
          <path d="m5.5.5h2"></path>
          <path d="m9.5.5h2"></path>
          <path d="m5.5 16.5h2"></path>
          <path d="m9.5 16.5h2"></path>
          <path d="m16.5 5.498v2.002"></path>
          <path d="m16.5 9.498v2.002"></path>
          <path d="m.5 5.498v2.002"></path>
          <path d="m.5 9.498v2.002"></path>
        </g>
      </svg>
    )
  }
)
Marquee.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Marquee.displayName = 'Marquee'
export default Marquee
