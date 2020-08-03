import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const ReplicateAlt = forwardRef(
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
          transform="matrix(-1 0 0 1 18 3)"
        >
          <path
            d="m9.5.5h-7c-1.1045695 0-2 .8954305-2 2v7c0 1.1045695.8954305 2 2 2h7c1.1045695 0 2-.8954305 2-2v-7c0-1.1045695-.8954305-2-2-2z"
            transform="matrix(0 1 -1 0 12 0)"
          ></path>
          <path
            d="m11.5 15.5h2c1.1045695 0 2-.8954305 2-2v-7c0-1.1045695-.8954305-2-2-2h-7c-1.1045695 0-2 .8954305-2 2v2"
            transform="matrix(0 1 -1 0 20 0)"
          ></path>
        </g>
      </svg>
    )
  }
)
ReplicateAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ReplicateAlt.displayName = 'ReplicateAlt'
export default ReplicateAlt
