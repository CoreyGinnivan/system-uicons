import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Coin = forwardRef(
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
          transform="translate(3 6)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m.5 3.5c0-1.29949353 3.13400675-3 7-3 3.8659932 0 7 1.70050647 7 3v3c0 1.29949353-3.1340068 3-7 3-3.86599325 0-7-1.70050647-7-3 0-.64128315 0-2.35871685 0-3z"></path>
          <path d="m7.5 6.48363266c3.8659932 0 7-1.60524012 7-2.985952 0-1.38071187-3.1340068-2.99768066-7-2.99768066-3.86599325 0-7 1.61696879-7 2.99768066 0 1.38071188 3.13400675 2.985952 7 2.985952z"></path>
        </g>
      </svg>
    )
  }
)
Coin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Coin.displayName = 'Coin'
export default Coin
