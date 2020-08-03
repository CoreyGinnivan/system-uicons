import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Maximise = forwardRef(
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
            d="m14.5.5h-12c-1.1045695 0-2 .8954305-2 2v12c0 1.1045695.8954305 2 2 2h12c1.1045695 0 2-.8954305 2-2v-12c0-1.1045695-.8954305-2-2-2z"
            transform="matrix(0 1 -1 0 17 0)"
          ></path>
          <path d="m.5 12.5h10c1.1045695 0 2-.8954305 2-2v-10"></path>
          <path d="m.5 8.5h7c.55228475 0 1-.44771525 1-1v-7"></path>
        </g>
      </svg>
    )
  }
)
Maximise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Maximise.displayName = 'Maximise'
export default Maximise
