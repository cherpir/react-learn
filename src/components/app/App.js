import React from 'react'
import './App.css'

import {Card} from '../card/Card'


export const App = () => {
  return (
    <div className={"Block"}>
      <Card name={'TestName1'} surname={'TestSurname1'} age={20}/>
      <Card name={'TestName2'} surname={'TestSurname2'}  age={21}/>
      <Card name={'TestName3'} surname={'TestSurname3'} age={22}/>
    </div>
  )
}
