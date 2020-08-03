import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Coffee = forwardRef(
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
          transform="translate(4 2)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m2.5 6.5h6c1.1045695 0 2 .8954305 2 2v2.5c0 2.4852814-2.01471863 4.5-4.5 4.5h-1c-2.48528137 0-4.5-2.0147186-4.5-4.5v-2.5c0-1.1045695.8954305-2 2-2zm8 2h1c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2h-1"></path>
          <path d="m4.5 4.5v-4"></path>
          <path d="m6.5 4.5v-2"></path>
        </g>
      </svg>
    )
  }
)
Coffee.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Coffee.displayName = 'Coffee'
export default Coffee
