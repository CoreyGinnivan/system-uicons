import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const IphoneLandscape = forwardRef(
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
        <g fill="none" transform="translate(3 5)" fillRule="evenodd">
          <path
            d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v6c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-6c0-1.1045695.8954305-2 2-2z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <circle cx="11.5" cy="5.5" fill="currentColor" r="1"></circle>
        </g>
      </svg>
    )
  }
)
IphoneLandscape.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
IphoneLandscape.displayName = 'IphoneLandscape'
export default IphoneLandscape
