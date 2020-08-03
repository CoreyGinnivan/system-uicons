import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Search = forwardRef(
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
          fill-rule="evenodd"
          stroke="#2a2e3b"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="8.5" cy="8.5" r="5"></circle>
          <path d="m17.571 17.5-5.571-5.5"></path>
        </g>
      </svg>
    )
  }
)
Search.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Search.displayName = 'Search'
export default Search
