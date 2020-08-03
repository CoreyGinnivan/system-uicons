import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Tag = forwardRef(
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
        <g fill="none" transform="translate(2 3)" fillRule="evenodd">
          <path
            d="m9.45405845.95405845h3.58578645c1.1045695 0 2 .8954305 2 2v3.58578644c0 .26521649-.1053568.5195704-.2928932.70710678l-7.29289325 7.29289323c-.78104858.7810486-2.04737854.7810486-2.82842712 0l-3.17157288-3.1715729c-.78104858-.7810486-.78104858-2.04737852 0-2.82842711l7.29289322-7.29289322c.18753638-.18753638.44189029-.29289322.70710678-.29289322z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <rect
            fill="currentColor"
            height="2"
            rx="1"
            width="2"
            x="11.54"
            y="2.454"
          ></rect>
        </g>
      </svg>
    )
  }
)
Tag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Tag.displayName = 'Tag'
export default Tag
