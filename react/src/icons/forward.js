import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Forward = forwardRef(
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
          d="m3.0719137 4.34699243c3.33312545-3.99914449 7.1040797-4.9416152 11.3128626-2.82741214-4.3235209-.22876383-7.15194803 1.65685425-8.48528136 5.65685425l-.00074747-.00159901 2.12206781 2.12291936h-7.07106781v-7.07106781z"
          fill="none"
          stroke={color}
          transform="matrix(-.70710678 .70710678 .70710678 .70710678 11.597036 2.253721)"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }
)
Forward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Forward.displayName = 'Forward'
export default Forward
