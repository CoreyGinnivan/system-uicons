import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const BellSnooze = forwardRef(
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
          transform="translate(3 1)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="m2.5 9.41547595c0-1.90773631-.51847777-3.77960557-1.5-5.41547595-.46904747-.78174578-.2155554-1.79571405.56619038-2.26476152.25654645-.15392786.55010357-.23523848.84928557-.23523848h10.16904815c.9116644 0 1.6507144.73905002 1.6507144 1.65071443 0 .299182-.0813106.59273912-.2352385.84928557-.9815222 1.63587038-1.5 3.50773964-1.5 5.41547595v1.08452405c0 2.209139-1.790861 4-4 4h-2c-.80352907 0-1.55172031-.2369294-2.17852351-.644738"
            transform="matrix(-1 0 0 -1 15 16)"
          ></path>
          <path d="m7.5 4.5h2l-2 3h2"></path>
          <path d="m11.5.5h3l-3 4h3"></path>
          <path
            d="m5 17.5c.66666667-1 1.5-1.5 2.5-1.5s1.83333333.5 2.5 1.5"
            transform="matrix(-1 0 0 -1 15 33.5)"
          ></path>
        </g>
      </svg>
    )
  }
)
BellSnooze.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
BellSnooze.displayName = 'BellSnooze'
export default BellSnooze
