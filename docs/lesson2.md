# Style (стили)

```javascript

const Comp = () => {
  
  const myStyle = {
    'color' : 'red'
  }
  
  
  return (
    <>
      <div style={myStyle}></div>
  
      <div style={{'color' : 'red'}}></div>
    </>
  )
}

```


## CSS

css
```css

.MyClass {
    color: red;
}

```

component
```javascript

import './style.css'

const Comp = () => {
  
  return (
    <>
      <div className={'MyClass'}></div>
    </>
  )
}

```
