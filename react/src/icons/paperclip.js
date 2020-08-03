import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Paperclip = forwardRef(
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
          d="m9.24264069 5.05025253v7.07106777c.17157287 3.7363257-1.24264069 5.6219437-4.24264069 5.6568543-3 .0349105-4.41421356-1.8507075-4.24264069-5.6568543v-7.07106777c-.11438191-2.82842712.82842713-4.24264068 2.82842713-4.24264068s2.94280904 1.41421356 2.82842712 4.24264068v7.07106777c.07786153 1.4142136-.39354299 2.1213204-1.41421356 2.1213204s-1.49207509-.7071068-1.41421356-2.1213204v-7.07106777"
          fill="none"
          stroke={color}
          transform="matrix(.70710678 .70710678 -.70710678 .70710678 13.535926 1.393384)"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }
)
Paperclip.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Paperclip.displayName = 'Paperclip'
export default Paperclip
