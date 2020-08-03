import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Coins = forwardRef(
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
          transform="translate(1 3)"
        >
          <path d="m17.5 8.5v3c0 1.2994935-3.1340068 3-7 3-3.86599325 0-7-1.7005065-7-3 0-.4275221 0-1.2608554 0-2.5"></path>
          <path d="m3.79385803 9.25873308c.86480173 1.14823502 3.53999333 2.22489962 6.70614197 2.22489962 3.8659932 0 7-1.60524016 7-2.98595204 0-.77476061-.9867994-1.62391104-2.5360034-2.22001882"></path>
          <path d="m14.5 3.5v3c0 1.29949353-3.1340068 3-7 3-3.86599325 0-7-1.70050647-7-3 0-.64128315 0-2.35871685 0-3"></path>
          <path d="m7.5 6.48363266c3.8659932 0 7-1.60524012 7-2.985952 0-1.38071187-3.1340068-2.99768066-7-2.99768066-3.86599325 0-7 1.61696879-7 2.99768066 0 1.38071188 3.13400675 2.985952 7 2.985952z"></path>
        </g>
      </svg>
    )
  }
)
Coins.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Coins.displayName = 'Coins'
export default Coins
