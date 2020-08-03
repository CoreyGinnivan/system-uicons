import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Enter = forwardRef(
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
            d="m8.621 5.379v4.242h-4.242"
            transform="matrix(.70710678 .70710678 .70710678 -.70710678 -3.399612 8.207388)"
          ></path>
          <path d="m5 3v9" transform="matrix(0 1 -1 0 12.5 2.5)"></path>
          <path
            d="m5.02090034 1.47909966h-2.5079176c-1.10147263 0-1.99561512.89060276-1.99998426 1.99206672l-.03154408 7.95228492c-.00438376 1.1045608.88748784 2.0035361 1.99204865 2.0079176.00000078 0 .00000156 0 .00000235-.0000024l10.0291813.0397707c1.1045608.0043801 2.0035351-.8874925 2.0079152-1.9920533.0000105-.0026437.0000157-.0052873.0000157-.007931v-7.99205324c0-1.1045695-.8954305-2-2-2h-2.4897173"
            transform="matrix(0 1 1 0 .02 -.02)"
          ></path>
        </g>
      </svg>
    )
  }
)
Enter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Enter.displayName = 'Enter'
export default Enter
