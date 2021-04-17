import React from 'react'
import './App.css'

import {Card} from '../card/Card'


export const App = () => {

  // // Объекты
  // let obj = {
  //   name: '',
  //   surname: '',
  //   age: 0,
  //   salary: 0
  // }
  // console.log(obj.name)
  // console.log(obj.surname)
  // console.log(obj.age)
  // console.log(obj.salary)
  // // Массивы
  // let arr = [1, 2, 3, 4]
  // let arr = ['first', 'second', 'third']
  // let arr = ['a', 'b', 'c']


  let employers = [
    {
      name: 'TestName1',
      surname: 'TestSurname1',
      age: 20,
      salary: 15000
    },
    {
      name: 'TestName2',
      surname: 'TestSurname2',
      age: 21,
      salary: 2000
    },
    {
      name: 'TestName3',
      surname: 'TestSurname3',
      age: 22,
      salary: 30000
    },
    {
      name: 'TestName4',
      surname: 'TestSurname4',
      age: 22,
      salary: 30000
    },
    {
      name: 'TestName4',
      surname: 'TestSurname4',
      age: 22,
      salary: 30000
    }
  ]

  const salarySum = () => {
    let sum = 0

    for (let i = 0; i < employers.length; i++) {
      sum += employers[i].salary
    }

    return sum
  }

  const mediumAge = () => {
    let age = 0
    let sum = 0
    for (let i = 0; i < employers.length; i++) {
      sum += employers[i].age
    }
    age = sum / employers.length

    // Ср Арифм = Сумма чисел / количество


    return age
  }


  // // Вывод всех элементов в массиве
  // let arr = [1, 2, 3]
  // for ( let i = 0; i < arr.length; i++) {
  //   console.log(arr[i])
  // }

  // // Нахождение суммы всех элементов
  // let sum = 0;
  // let arr = [1, 2, 3]
  // for(let i = 0; i < arr.length; i++) {
  //   sum += arr[i]
  // }
  // console.log(sum)


  // Стрелочные функции (Лямбда)
  // Arrow function (Lambda)
  //
  // function f() {}
  // let f1 = () => {}
  // f()
  // f1()
  //
  // function f(a) {}
  // f(1)
  // let f2 = (a) => {}
  // f2(1)
  // let f22 = a => {}
  // f22(1)
  //
  // function f(a, b) {}
  // const f3 = (a, b) => {}
  //
  // function f() {
  //   return 1
  // }
  // const f4 = () => {
  //   return 1
  // }
  // const f44 = () => 1


  return (
    <div className={"Block"}>
      {
        employers.map(item => <Card
            name={item.name}
            surname={item.surname}
            age={item.age}
            salary={item.salary}
          />
        )
      }

      <div>All salary sum: {salarySum()}</div>
      <div>Medium age: {mediumAge()}</div>
    </div>
  )
}

/*

Table User:
- ID
- Имя
- Доп данные
- номер счета

Table Money:
- ID
- Сумма
- дата
- UserID


* */