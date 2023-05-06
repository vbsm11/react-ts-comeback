import React, {useState} from 'react'

export const UncontrolledInput = () => {

  const [value, setValue] = useState<string>('')

  return (
      <div>
        <input onChange={(e) => setValue(e.currentTarget.value)}/> - {value}
      </div>
    )
}