import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Paper = forwardRef(
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
        <path
          d="m12.5 12.5v-8l-4-4h-6c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2z"
          fill="none"
          stroke={color}
          transform="translate(4 3)"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }
)
Paper.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Paper.displayName = 'Paper'
export default Paper
