import React from 'react'
import './Card.css'



export const Card = ({name,surname,age}) => {
  return (
    <div className={'Block'}>
      <div>
        Name: {name}
      </div>

      <div>
        Surname:{surname}
      </div>

      <div>
        Age:{age}
      </div>
    </div>
  )
}