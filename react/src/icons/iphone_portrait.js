import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const IphonePortrait = forwardRef(
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
        <g fill="none" transform="translate(5 3)" fillRule="evenodd">
          <path
            d="m2.5.5h6c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-6c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <circle cx="5.5" cy="11.5" fill="currentColor" r="1"></circle>
        </g>
      </svg>
    )
  }
)
IphonePortrait.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
IphonePortrait.displayName = 'IphonePortrait'
export default IphonePortrait
