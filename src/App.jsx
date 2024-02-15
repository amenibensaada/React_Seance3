
import './App.css'
import { ClassComponent } from './components/ClassComponent'
import FunctionnalComponent from './components/FunctionnalComponent'

function App() {
  const hello = () => {
    return <p>Hello world {1 + 2}</p>
  }
   const nom = "Ameni Ben Saada "
  const element = <h1> Hello,{nom}</h1>
  const tab = [{id:1,name:"twin3",module:"react"},{name:"twin2",module:"nodeJS"}]
  return (
   
    <>
      <ClassComponent name="ameni ben saada" />
      <FunctionnalComponent test="test props"/>
      <p style={{'color':'red'}}>{element}</p>
      {hello()}
      <ul>
        {tab.map((e,i) => {
          return <li key={(i)}>{e.name} & { e.module}</li>
        })}
      </ul>
      <button onClick={()=> alert("hello world")}>click me</button>
  </>
  )
 
}

export default App
