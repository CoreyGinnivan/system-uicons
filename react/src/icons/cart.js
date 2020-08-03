import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Cart = forwardRef(
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
        <g fill="none" transform="translate(3 4)" fillRule="evenodd">
          <path
            d="m2.5.6151756h11v5.8848244c0 1.1045695-.8954305 2-2 2h-6.23763117c-1.00727706 0-1.85737301-.74909131-1.98410666-1.74836387z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path d="m12 10h2v2h-2z" fill="currentColor"></path>
          <path d="m5 10h2v2h-2z" fill="currentColor"></path>
          <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path d="m.5.5h13"></path>
            <path d="m3 3.5h10.5"></path>
          </g>
        </g>
      </svg>
    )
  }
)
Cart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Cart.displayName = 'Cart'
export default Cart
