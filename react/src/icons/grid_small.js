import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const GridSmall = forwardRef(
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
        <g fill="#2A2E3B" fill-rule="evenodd" transform="translate(5 5)">
          <rect width="3" height="3" x="4" y="4" rx="1"></rect>
          <rect width="3" height="3" x="4" rx="1"></rect>
          <rect width="3" height="3" x="8" y="4" rx="1"></rect>
          <rect width="3" height="3" x="8" rx="1"></rect>
          <rect width="3" height="3" x="8" y="8" rx="1"></rect>
          <rect width="3" height="3" x="4" y="8" rx="1"></rect>
          <rect width="3" height="3" y="4" rx="1"></rect>
          <rect width="3" height="3" rx="1"></rect>
          <rect width="3" height="3" y="8" rx="1"></rect>
        </g>
      </svg>
    )
  }
)
GridSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
GridSmall.displayName = 'GridSmall'
export default GridSmall
