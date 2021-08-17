import React from 'react'

import { ArrowDown } from '@icons/ArrowDown'

import { ContentSelect } from './styles'

export default function Select({
  icon,
  className,
  selected,
  options,
  onChange
}) {
  return (
    <ContentSelect className={className ? className : 'select'}>
      {icon && icon}
      <select name='Select' onChange={onChange}>
        {selected && (
          <option value='' selected>
            {selected}
          </option>
        )}

        {options &&
          options.map((item, index) => (
            <option key={index} value={item.params.cidade}>
              {item.params.cidade}
            </option>
          ))}
      </select>
      <ArrowDown />
    </ContentSelect>
  )
}
