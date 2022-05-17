function TemporaryName() {
  return (
    <div>
      <h1>Hi</h1>
    </div>
  )
}

const page = (
  <div>
    <h1 className = "header">This is JSX</h1>
    <p> This is a paragraph </p>
  </div>
)

const page2 = (
  <nav>
    <h1>BSSM Menu</h1>
    <ul>
      <li>Breakfast</li>
      <li>Lunch</li>
      <li>Dinner</li>
    </ul>
  </nav>
)


ReactDOM.render( <TemporaryName />,

 document.getElementById("root"));