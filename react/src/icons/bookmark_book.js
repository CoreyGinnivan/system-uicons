import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const BookmarkBook = forwardRef(
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
          transform="translate(4 3)"
        >
          <path d="m2.5.5h8c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-8c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z"></path>
          <path d="m3.5.5h4v5.012l-2-2.012-2 2.012z"></path>
        </g>
      </svg>
    )
  }
)
BookmarkBook.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
BookmarkBook.displayName = 'BookmarkBook'
export default BookmarkBook
