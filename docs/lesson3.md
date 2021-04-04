# Props

```javascript

const Comp = ({name}) => {
  
  return (
    <div>
      Hello, {name}
    </div>
  )
}


// Использование

const App = () => {
  return (
    <div>
      <Comp />
      <Comp name={'TEST'} />
      <Comp name={'TEST1'} />
    </div>
  )
}

// Output:
<div>
  <div>
    Hello, 
  </div>
  
  <div>
    Hello, TEST
  </div>
  
  <div>
    Hello, TEST1
  </div>
</div>

```