import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const EnterAlt = forwardRef(
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
          transform="matrix(-1 0 0 1 19 3)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m9.634 5.384-.025 4.267h-4.243"
            transform="matrix(.70710678 .70710678 .70710678 -.70710678 -3.11902 7.52998)"
          ></path>
          <path d="m5.5 2.5v10" transform="matrix(0 1 -1 0 13 2)"></path>
          <path
            d="m5.9959184 1.5040816h-2.45924862c-1.10138927 0-1.99549695.89047297-1.9999834 1.99185311l-.03258783 7.99999999c-.00449941 1.1045603.88727618 2.0036309 1.99183651 2.0081303.00271562.0000111.00543126.0000166.00814689.0000166h9.99183645c1.1045695 0 2-.8954305 2-2v-8c0-1.1045695-.8954305-2-2-2h-2.5"
            transform="matrix(0 1 1 0 .996 -.996)"
          ></path>
        </g>
      </svg>
    )
  }
)
EnterAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
EnterAlt.displayName = 'EnterAlt'
export default EnterAlt
