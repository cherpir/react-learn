import './App.css'

// Создание компонента
function First({text}) {
  return (
    <div>
      First Component - {text}.
    </div>
  )
}




export function App() {
  return (
    <>
      <div className={'app'}>
        Hello world
      </div>

      <First text={'123'} /> {/* Используем компонент */}
      <First text={'321'} /> {/* Используем компонент */}

      <div className={'app2'}>
        Hello world
      </div>
    </>
  )
}


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
