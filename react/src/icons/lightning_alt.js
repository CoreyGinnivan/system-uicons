import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const LightningAlt = forwardRef(
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
          d="m5.5 6.5h5l-6 8.997v-5.997h-4l2-9h5z"
          fill="none"
          stroke={color}
          transform="translate(5 2)"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }
)
LightningAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
LightningAlt.displayName = 'LightningAlt'
export default LightningAlt
