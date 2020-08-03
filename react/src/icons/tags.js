import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Tags = forwardRef(
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
            d="m11.4540585.95405845h3.5857864c1.1045695 0 2 .8954305 2 2v3.58578644c0 .26521649-.1053568.5195704-.2928932.70710678l-7.29289325 7.29289323c-.78104858.7810486-2.04737854.7810486-2.82842712 0l-3.17157288-3.1715729c-.78104858-.7810486-.78104858-2.04737852 0-2.82842711l7.29289325-7.29289322c.1875364-.18753638.4418903-.29289322.7071068-.29289322z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="m6.03984489 13.9540585-.90290911.6019394c-.91905738.6127049-2.16079606.3643571-2.77350098-.5547002-.08486292-.1272944-.15483981-.2639057-.20855777-.4071535l-1.53002215-4.08005911c-.3389108-.90376213.01599891-1.92063198.84366684-2.41723274l8.57132318-5.1427939"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <rect
            fill={color}
            height="2"
            rx="1"
            width="2"
            x="13.54"
            y="2.454"
          ></rect>
        </g>
      </svg>
    )
  }
)
Tags.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Tags.displayName = 'Tags'
export default Tags
