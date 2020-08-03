import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const CreditCard = forwardRef(
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
        <g fill="none" transform="translate(2 5)" fillRule="evenodd">
          <path
            d="m2.5.5h12c1.1045695 0 2 .8954305 2 2v7c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-7c0-1.1045695.8954305-2 2-2z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path d="m0 4h17v2h-17z" fill="currentColor"></path>
        </g>
      </svg>
    )
  }
)
CreditCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
CreditCard.displayName = 'CreditCard'
export default CreditCard
