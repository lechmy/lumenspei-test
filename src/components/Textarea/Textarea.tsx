import React from 'react'
import cx from 'classnames'
import { TextareaProps } from '../../types/props/ElementProps'


const Textarea: React.FC<TextareaProps> = ({ value, className, rows, onChange, ...rest }) => {
  return (
    <textarea
      rows={rows || 3}
      value={value}
      onChange={onChange}
      className={cx(className, 'block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6')}
      {...rest}
    />
)
}

export default Textarea