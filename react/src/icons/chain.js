import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Chain = forwardRef(
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
          transform="translate(4 4)"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m5.5 7.5c.96940983 1.36718798 3.01111566 1.12727011 4.01111565 0l1.98888435-2c1.1243486-1.22807966 1.1641276-2.81388365 0-4-1.135619-1.15706921-2.86438099-1.15706947-4 0l-2 2"></path>
          <path
            d="m.64175661 12.3971156c.96940983 1.367188 3 1.1970433 4 .0697732l2-1.9748738c1.12434863-1.22807961 1.16412758-2.83900987 0-4.02512622-1.13561902-1.15706922-2.86438099-1.15706948-4 0l-2 2"
            transform="matrix(-1 0 0 -1 8.14 18.966)"
          ></path>
        </g>
      </svg>
    )
  }
)
Chain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Chain.displayName = 'Chain'
export default Chain
