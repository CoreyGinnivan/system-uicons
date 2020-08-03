import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const Refresh = forwardRef(
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
          transform="translate(1 2)"
        >
          <path d="m5.53718227 1.54888175c-2.41169541 1.37786775-4.03718227 3.9746666-4.03718227 6.95111825 0 4.418278 3.581722 8 8 8m4-1c2.2866288-1.4081018 4-4.1175492 4-7 0-4.418278-3.581722-8-8-8"></path>
          <path d="m5.5 1.5v5h-5.5" transform="matrix(1 0 0 -1 0 8)"></path>
          <path d="m19 10.5v5h-5.5" transform="matrix(-1 0 0 1 32.5 0)"></path>
        </g>
      </svg>
    )
  }
)
Refresh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Refresh.displayName = 'Refresh'
export default Refresh
