import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const PhoneLandscape = forwardRef(
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
          transform="matrix(0 -1 1 0 3 17)"
        >
          <path d="m2.52487173.5h5.97512827c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-5.99967249c-1.1045695 0-2-.8954305-2-2 0-.0016363.00000201-.0032726.00000603-.0049088l.02454421-10.00000003c.00270637-1.10264965.89734101-1.99509117 1.99999398-1.99509117z"></path>
          <path d="m7.5 12.5h-4"></path>
        </g>
      </svg>
    )
  }
)
PhoneLandscape.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
PhoneLandscape.displayName = 'PhoneLandscape'
export default PhoneLandscape
