import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Funnel = forwardRef(
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
          d="m.5.5h12l-4 7v3l-3 2.998v-5.998z"
          fill="none"
          stroke={color}
          transform="translate(4 4)"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }
)
Funnel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Funnel.displayName = 'Funnel'
export default Funnel
