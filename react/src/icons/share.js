import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Share = forwardRef(
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
          transform="translate(3 3)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m10.326 1.666.016 5.641-5.673.016"
            transform="matrix(.70710678 -.70710678 -.70710678 -.70710678 5.376348 12.979652)"
          ></path>
          <path d="m7.522.521v11.979"></path>
          <path d="m4.5 7.5h-2c-1.1045695 0-2 .8954305-2 2v4c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4c0-1.1045695-.8954305-2-2-2h-2"></path>
        </g>
      </svg>
    )
  }
)
Share.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Share.displayName = 'Share'
export default Share
