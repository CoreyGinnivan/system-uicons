import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const ListAdd = forwardRef(
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
          transform="translate(4 6)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m.5.5h12"></path>
          <path d="m.5 4.5h12"></path>
          <path d="m.5 8.5h7"></path>
          <path d="m9.5 8.5h4zm2 2v-4z"></path>
        </g>
      </svg>
    )
  }
)
ListAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ListAdd.displayName = 'ListAdd'
export default ListAdd
