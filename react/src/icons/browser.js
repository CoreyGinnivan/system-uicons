import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Browser = forwardRef(
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
          transform="translate(2 3)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m13-1h-9c-1.1045695 0-2 .8954305-2 2v12c0 1.1045695.8954305 2 2 2h9c1.1045695 0 2-.8954305 2-2v-12c0-1.1045695-.8954305-2-2-2z"
            transform="matrix(0 1 -1 0 15.5 -1.5)"
          ></path>
          <path
            d="m9.99999986 3.00000002h-3c-.55228475 0-1 .44771525-1 1v9.99999998c0 .5522848.44771525 1 1 1h3c.55228474 0 1.00000004-.4477152 1.00000004-1v-9.99999998c0-.55228475-.4477153-1-1.00000004-1z"
            transform="matrix(0 1 -1 0 17.5 .5)"
          ></path>
          <path d="m6.5 3.498h8"></path>
          <path d="m2.5 3.5h2"></path>
        </g>
      </svg>
    )
  }
)
Browser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Browser.displayName = 'Browser'
export default Browser
