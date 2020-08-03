import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Venn = forwardRef(
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
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="7.5" cy="10.5" r="5"></circle>
          <circle cx="13.5" cy="10.5" r="5"></circle>
        </g>
      </svg>
    )
  }
)
Venn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Venn.displayName = 'Venn'
export default Venn
