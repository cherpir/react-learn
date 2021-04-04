Создание реакт проекта

`npx create-react-app ПУТЬ`

Если в текущей папке
`npx create-react-app .`


----------------------




Компонент - кирпичик сайта

```javascript
import React from 'react'

const MyComponent = () => {
  return (
    // JSX
    <div>
    </div>
  ) 
}

// Использование компонента

<MyComponent />
```

Компонент всегда возвращает JSX


JSX - html препроцессор от React

```javascript
<div>
  Hello world
</div>


// Использование переменных
const Comp = () => {
  const a = 1
  let b = 2
  
  return (
    <div>
      <div>{a}</div>
      <div>{b}</div>
    </div>
  )
}

// class в HTML = className в JSX
const Comp1 = () => {
  
  const SecondClass = 'SecondClass'
  
  return (
    <div className={'MyClass'}>
      <div className={SecondClass}></div>      
    </div>
  )
}



```



```javascript

/*
* JSX
* Component
* Создание компонента = Создание своего HTML тега
*
* Тег:
* - Парные - <h1>Content</h1>
* - Одиночные - <input />
* - атрибуты, параметры тега - <input type={'text'} />
*
* Props - Property - Параметр
*
*
* PHP
*  - CMS - система управление контентом
*  - - Wordpress +++
*  - - Bitrix (интеграция с 1С)
*  - - Drupal
*  - - Joomla
*
* Копия - Шаблоны
*
* */


```
