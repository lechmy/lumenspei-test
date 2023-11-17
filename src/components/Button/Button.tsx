import React from 'react'
import cx from 'classnames'
import { ButtonProps } from '../../types/props/ElementProps'


const Button: React.FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button
      className={cx(className, 'block rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600')}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button